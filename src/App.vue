<template>
  <div id="app">
    App
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted: () => {
    Promise.resolve(42).finally(() => console.log("Console log from finally"));
  }
}
</script>

<style>
</style>
