<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Students</h4>
      </div>
      <div class="card-body">
        <div class="mt-3">
          <label for="">Full Name</label>
          <input
            type="text"
            v-model="model.student.name"
            class="form-control"
          />
        </div>
        <div class="mt-3">
          <label for="">UserName</label>
          <input
            type="text"
            v-model="model.student.username"
            class="form-control"
          />
        </div>
        <div class="mt-3">
          <label for="">Email</label>
          <input
            type="text"
            v-model="model.student.email"
            class="form-control"
          />
        </div>
        <div class="mt-3">
          <label for="">Phone</label>
          <input
            type="number"
            v-model="model.student.phone"
            class="form-control"
          />
        </div>
        <div class="mt-3">
          <label for="">Website</label>
          <input
            type="text"
            v-model="model.student.website"
            class="form-control"
          />
        </div>
        <div class="mt-3">
          <button @click="saveStudents" type="button" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentCreate",
  data() {
    return {
      model: {
        student: {
          name: "",
          username: "",
          email: "",
          phone: "",
          website: "",
        },
      },
    };
  },
  methods: {
    saveStudents() {
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          ...this.model.student,
        })
        .then((res) => {
          console.log(res);
          this.model.student = {
            name: "",
            username: "",
            email: "",
            phone: "",
            website: "",
          };
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
