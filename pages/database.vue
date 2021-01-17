<template>
  <div class="center">
    <h2>Database</h2>
    <div>
      {{ doctors }}
    </div>
    <button @click="getDoctors()">Read all from Firestore</button>
    <button @click="createDoctor()">Send new document to Firestore</button>
    <button @click="deleteDoctor()">Delete from Firestore</button>
    <button @click="updateDoctor()">Send update to Firestore</button>
  </div>
</template>

<script>
import { getAll, create, remove, update } from "../firebase";
import { rateDoctor } from "../util";

export default {
  data() {
    return {
      doctors: [],
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
    createDoctor() {
      const doctor = this.doctors.length ? this.doctors[0] : {};
      if (doctor) {
        rateDoctor(doctor);
        delete doctor.id;
        create(doctor);
      }
    },
    deleteDoctor() {
      if (this.doctors && this.doctors.length) {
        const index = this.doctors.length - 1;
        const doctorId = this.doctors[index].id;
        remove(doctorId);
      }
    },
    updateDoctor() {
      const doctor = this.doctors.length ? this.doctors[0] : {};
      if (doctor) {
        rateDoctor(doctor);
        const doctorId = doctor.id;
        delete doctor.id;
        update(doctorId, doctor);
      }
    },
  },
};
</script>

<style></style>
