<template>
  <div class="center">
    <!-- <h2>Database</h2> -->
    <!-- <div>
      {{ doctors }}
    </div>
    <button @click="getDoctors()">Read all from Firestore</button>
    <button @click="createDoctor()">Send new document to Firestore</button>
    <button @click="deleteDoctor()">Delete from Firestore</button>
    <button @click="updateDoctor()">Send update to Firestore</button> -->

    <form action="submit" class="">
      <div>
        <input
          class="input-fields"
          type="text"
          placeholder="First name"
          v-model="doctor.first_name"
          required
        />
      </div>
      <div>
        <input
          class="input-fields"
          type="text"
          placeholder="Last name"
          v-model="doctor.last_name"
          required
        />
      </div>
      <div class="padded-input center">
        <label for="doctors-specialty" class="label-margin"
          >Doctor's Specialty:</label
        >

        <select
          name="doctors-specialty"
          id="doctors-specialty"
          v-model="doctor.specialties"
          required
        >
          <option value="General Physician">General Physician</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Dentist">Dentist</option>
        </select>
      </div>
      <div class="padded-input center">
        <label for="doctors-rating" class="label-margin"
          >Doctor's English-Speaking Ability:</label
        >

        <select
          name="doctors-rating"
          id="doctors-rating"
          v-model="doctor.rating"
          required
        >
          <option value="1">1 (Low)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 (High)</option>
        </select>
      </div>
      <div>
        <input
          class="input-fields"
          type="text"
          placeholder="Google Maps link"
          v-model="doctor.address"
          required
        />
      </div>
      <div class="padded-input center">
        <label for="doctors-reservation" class="label-margin"
          >Can you make reservations in English?</label
        >

        <select
          name="doctors-reservations"
          id="doctors-reservations"
          v-model="doctor.english_reservation"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button @click="submitForm()" class="submit-btn-form">Submit Information</button>
    </form>
  </div>
</template>

<script>
import { getAll, create, remove, update } from "../firebase";
import { buildDoctor, rateDoctor } from "../util";

export default {
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
    submitForm() {
      create(this.doctor);
    },
    createDoctor() {
      const doctor = this.doctors.length ? this.doctors[0] : {};
      if (doctor) {
        rateDoctor(doctor);
        delete doctor.id;
        create(doctor, () => {
          this.getDoctors();
        });
      }
    },
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
.padded-input {
  margin-top: 10px;
  margin-bottom: 10px;
}
.submit-btn-form {
  background-color: rgb(47, 45, 58);
  width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  border: 0px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
}
.label-margin {
  margin-right: 10px;
}
</style>
