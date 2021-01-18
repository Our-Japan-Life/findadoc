<template>
  <div class="" id="app">
    <div class="db-div">
      <div>
        <h2>English-Speaking Doctors in Japan</h2>
      </div>
      <div>
        <button class="add-doctor-btn" @click="showModal()">Add Doctor</button>
      </div>
      <div>
        <div v-for="item in doctors" :key="item.id" class="card column">
          <div class="db-icons">
            <img src="~/assets/menu-dots.svg" alt="options" />
          </div>
          <div class="db-padding">
            <h2>Dr. {{ item.first_name }} {{ item.last_name }}</h2>
          </div>
          <div class="db-padding">
            Specialty: {{ item.specialties.join(", ") }}
          </div>
          <div class="db-padding">Rating: {{ item.rating }}/5</div>
          <div class="db-padding">Address: {{ item.address }}</div>
          <div class="db-icons">
            <a
              class="db-links"
              :href="item.website"
              target="_blank"
              rel="noopener noreferrer"
              ><img src="~/assets/homepage.svg" alt="website"
            /></a>
            <a
              class="db-links"
              :href="item.location"
              target="_blank"
              rel="noopener noreferrer"
              ><img src="~/assets/map.svg" alt="location"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="modal.showModal"
        @click="hideModal()"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="modal.showModal">
        <SubmitDoctor @refresh="getDoctors()" @close="hideModal()" />
      </div>
    </transition>
  </div>
</template>

<script>
import { getAll, remove, update } from "../firebase";
import { rateDoctor } from "../util";

export default {
  mounted() {
    this.getDoctors();
  },
  data() {
    return {
      doctors: [],
      doctor: {
        first_name: "",
        last_name: "",
        last_updated: null,
        location: null,
        rating: "",
        total_ratings: "",
        specialties: [],
        website: "",
        english_reservation: false,
        address: "",
      },
      modal: {
        showModal: false,
      },
    };
  },
  methods: {
    showModal() {
      this.modal.showModal = true;
    },
    hideModal() {
      this.modal.showModal = false;
      this.getDoctors();
    },
    getDoctors() {
      getAll((querySnapshot) => {
        const tempDoctors = [];

        querySnapshot.forEach((doc) => {
          const doctor = { id: doc.id, ...doc.data() };
          tempDoctors.push(doctor);
        });

        this.doctors = tempDoctors;
        console.log(this.doctors);
      });
    },
    // submitForm() {
    //   create(this.doctor);
    // },
    // createDoctor() {
    //   const doctor = this.doctors.length ? this.doctors[0] : {};
    //   if (doctor) {
    //     rateDoctor(doctor);
    //     delete doctor.id;
    //     create(doctor, () => {
    //       this.getDoctors();
    //     });
    //   }
    // },
    deleteDoctor() {
      if (this.doctors && this.doctors.length) {
        const index = this.doctors.length - 1;
        const doctorId = this.doctors[index].id;
        remove(doctorId, () => {
          this.getDoctors();
        });
      }
    },
    updateDoctor() {
      const doctor = this.doctors.length ? this.doctors[0] : {};
      if (doctor) {
        rateDoctor(doctor);
        const doctorId = doctor.id;
        delete doctor.id;
        update(doctorId, doctor, () => {
          this.getDoctors();
        });
      }
    },
  },
};
</script>

<style>
/* .add-doctor-btn {
  background-color: rgb(194, 227, 228);
  height: 30px;
  border: 0px;
  border-radius: 5px;
  font-family: "Noto Serif JP", serif;
  font-size: 16px;
  color: #000;
  cursor: pointer;
} */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  /* padding-left: 10px; */
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  min-width: 100%;
  transition: transform 0.2s;
  overflow-x: hidden;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 8px 0 rgb(130, 182, 184);
}
.column {
  float: left;
  width: 25%;
  padding: 0px;
  margin: 20px;
}
.db-div {
  width: 80%;
  text-align: center;
}
.db-links {
  margin-left: 10px;
}
.db-padding {
  margin: 10px;
  text-align: left;
  margin-left: 20px;
}
.db-icons {
  margin: 10px;
  text-align: right;
  padding-left: 20px;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;

  padding: 25px;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
#app {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
