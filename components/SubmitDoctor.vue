<template>
  <div>
    <div v-if="submitted === true">
      <div class="center">
        <h1 class="modal-title">Thank you for helping our community grow!</h1>
      </div>
      <div class="center">
        <button @click="resetDoctor()">Add another doctor</button>
        <button @click="close()">Close</button>
      </div>
    </div>
    <div class="center" v-if="submitted === false">
      <form @submit.prevent="validateForm" action="">
        <div class="center">
          <h1 class="modal-title">Add a Doctor</h1>
        </div>
        <div class="center">
          <p>Please fill out this form as accurately as possible.</p>
        </div>
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
          <label for="doctors-specialty" class="label-margin">
            Doctor's Specialty:
          </label>
          <select
            name="doctors-specialty"
            id="doctors-specialty"
            v-model="doctor.specialties"
            required
            multiple
          >
            <option v-for="option in specialty_options" :key="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="padded-input center">
          <label for="doctors-rating" class="label-margin">
            Doctor's English-Speaking Ability:
          </label>
          <select
            name="doctors-rating"
            id="doctors-rating"
            v-model.number="doctor.rating"
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
          <label for="doctors-reservation" class="label-margin">
            Can you make reservations in English?
          </label>
          <select
            name="doctors-reservations"
            id="doctors-reservations"
            v-model="doctor.english_reservation"
            required
          >
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>
        <button type="submit" class="submit-btn-form">
          Submit Information
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { create } from "~/firebase";

export default {
  data() {
    return {
      doctor: {
        first_name: null,
        last_name: null,
        last_updated: null,
        location: null,
        rating: null,
        total_ratings: 0,
        specialties: [],
        website: null,
        english_reservation: null,
        address: null,
      },
      submitted: false,
      specialty_options: [
        "General Physician",
        "Dermatologist",
        "Dentist",
        "Oncology",
        "Infectious Disease",
        "Nephrology",
      ],
    };
  },
  methods: {
    validateForm(event) {
      let validForm = true;
      const fields = ["first_name", "last_name", "address", "rating"];

      for (const field of fields) {
        validForm = validForm && this.doctor[field] != "";
      }

      validForm = validForm && this.doctor.specialties.length > 0;
      validForm =
        validForm &&
        (this.doctor.english_reservation === true ||
          this.doctor.english_reservation === false);

      if (validForm) {
        this.submitForm();
        return validForm;
      }

      event.preventDefault();
    },
    submitForm() {
      if (this.doctor.rating) {
        this.doctor.total_ratings++;
      }

      create(this.doctor);

      this.submitted = true;

      this.refresh();
    },
    close() {
      this.$emit("close");
    },
    refresh() {
      this.$emit("refresh");
    },
    resetDoctor() {
      this.submitted = false;

      for (const field in this.doctor) {
        this.doctor[field] = null;
      }

      this.doctor.specialties = [];
      this.doctor.total_ratings = 0;
    },
  },
};
</script>

<style>
.close-window {
  position: absolute;
  font-size: 14px;
  right: 20px;
  cursor: pointer;
  padding: 10px;
}
.modal-title {
  color: black;
  text-align: center;
}
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