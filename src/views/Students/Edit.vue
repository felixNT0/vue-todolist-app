<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit Students</h4>
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
          <button @click="updateStudent" type="button" class="btn btn-primary">
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
  name: "StudentEdit",
  data() {
    return {
      studentId: "",
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
  mounted() {
    this.studentId = this.$route.params.id;
    this.getStudentId(this.$route.params.id);
  },
  methods: {
    getStudentId(studentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${studentId}`)
        .then((res) => {
          this.model.student = res.data;
          // navigateTo("home");
        })
        .catch((e) => console.log(e));
    },
    updateStudent() {
      axios
        .patch(
          `https://dummyjson.com/users/${this.studentId}`,
          this.model.student
        )
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
