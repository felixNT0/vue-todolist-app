<script>
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  name: "students",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
    console.log(this.$route);
  },
  methods: {
    getStudents() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          this.students = res.data;
        })
        .catch((e) => console.log(e));
    },
    deleteStudent(studentId) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${studentId}`)
        .then((res) => {
          this.getStudents();
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Students
          <RouterLink to="/student/create" class="btn btn-primary float-end"
            >Add Student</RouterLink
          >
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody v-if="this.students.length > 0">
            <tr v-for="(student, index) in this.students" :key="index">
              <td>
                {{ student.id }}
              </td>
              <td>{{ student.name }}</td>
              <td>
                {{ student.username }}
              </td>
              <td>
                {{ student.email }}
              </td>
              <td>
                {{ student.phone }}
              </td>
              <td>
                {{ student.website }}
              </td>

              <td>
                <RouterLink
                  :to="{ path: '/student/' + student.id + '/edit' }"
                  class="btn btn-success"
                  >Edit</RouterLink
                >
                <button
                  @click="deleteStudent(student.id)"
                  type="button"
                  class="btn btn-danger float-end"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
