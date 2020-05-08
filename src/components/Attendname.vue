<template>
  <div class="attendname">
    <div class="name"><p>Damilola</p></div>
    <button class="present" @click="resolve">Present</button>
    <button class="absent">Absent</button>
  </div>
</template>

<script>
export default {
  name: 'Attendname',
  methods: {
    resolve() {
      console.log('present')
    }
  }
}
</script>

<style scoped>
.attendname {
  display: flex;
  height: 10vh;
  width: 80vw;
  margin: auto;
  border: 2px #525252 solid;
}

p {
  font-weight: bold;
}
.name {
  flex: 4;
  border-right: 2px #525252 solid;
}
button {
  outline: none;
  appearance: none;
  display: block;
  border: none;
  width: inherit;
  height: inherit;
  /* padding: 5% 0; */
}
.present {
  flex: 2;
  border-right: 2px #525252 solid;
  margin: auto;
  background: rgba(000, 080, 000, 0.2);
}
.absent {
  flex: 2;
  background: rgba(080, 000, 000, 0.2);
}
</style>
