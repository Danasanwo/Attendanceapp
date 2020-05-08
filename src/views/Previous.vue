<template>
  <div class="previous">
    <h1>Days of Attendance</h1>
    <EachDay />
  </div>
</template>

<script>
import EachDay from '../components/EachDay.vue'
export default {
  name: 'Previous',
  components: {
    EachDay
  }
}
</script>
