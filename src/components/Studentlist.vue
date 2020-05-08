<template>
  <div class="student-list">
    <h1>Students</h1>
    <div class="intro">
      <p>Student</p>
      <p>Status</p>
    </div>

    <div class="studentname" v-for="student in allStudents" :key="student.id">
      <div class="name">
        <p>{{ student.name }}</p>
      </div>
      <button class="present">Present</button>
      <button class="absent">Absent</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Studentlist',
  methods: mapActions(['fetchStudents']),
  computed: mapGetters(['allStudents']),
  created() {
    this.fetchStudents()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.intro {
  display: flex;
  width: 80vw;
  height: 10vh;
  margin: auto;
  align-items: center;
  justify-content: center;
}

.intro > p {
  flex: 1;
  background: #525252;
  color: white;
  height: inherit;
  border: white solid 2px;
  padding-top: 2.5vh;
}

.studentname {
  display: flex;
  height: 10vh;
  width: 80vw;
  margin: auto;
  border: 2px #525252 solid;
}

.name {
  flex: 4;
  border-right: 2px #525252 solid;
}
.name > p {
  line-height: 10vh;
}

button {
  outline: none;
  appearance: none;
  display: block;
  border: none;
  /* width: inherit; */
  /* height: inherit; */
}
.present {
  flex: 2;
  border-right: 2px #525252 solid;
  /* margin: auto; */
  background: rgba(000, 080, 000, 0.2);
}
.absent {
  flex: 2;
  background: rgba(080, 000, 000, 0.2);
}
</style>
