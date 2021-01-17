<template>
  <div class="" id="app">
    <div class="db-div">
      <div>
        <h2>Database</h2>
      </div>
      <div>
        <button class="add-doctor-btn" @click="modal.showModal = true">
          Add Doctor
        </button>
      </div>
      <div>
        <div v-for="item in doctors" :key="item.id" class="center db-padding">
          <div>
            Name
            <div class="db-padding">
              Dr. {{ item.first_name }} {{ item.last_name }}
            </div>
          </div>
          <div>
            Specialty
            <div class="db-padding">
              {{ item.specialties[0] }}
            </div>
          </div>
          <div>
            Rating
            <div class="db-padding">{{ item.rating }}/5</div>
          </div>
          <div>
            Location
            <div class="db-padding">{{ item.address }}</div>
          </div>
          <div>
            Website
            <div class="db-padding">{{ item.website }}</div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="modal.showModal"
        @click="modal.showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="modal.showModal">
        <SubmitDoctor />
      </div>
    </transition>
  </div>
</template>

<script>
import { getAll, create, remove, update } from "../firebase";
import { buildDoctor, rateDoctor } from "../util";

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
    getDoctors() {
      getAll((querySnapshot) => {
        const tempDoctors = [];

        querySnapshot.forEach((doc) => {
          const doctor = { id: doc.id, ...doc.data() };
          tempDoctors.push(doctor);
        });

        this.doctors = tempDoctors;
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
.add-doctor-btn {
  background-color: rgb(194, 227, 228);
  height: 30px;
  border: 0px;
  border-radius: 5px;
  font-family: "Noto Serif JP", serif;
  font-size: 16px;
  color: #000;
  cursor: pointer;
}
.db-div {
  width: 80%;
  text-align: center;
  padding: 10px;
}
.db-padding {
  margin: 10px;
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
  /* align-items: center; */
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
