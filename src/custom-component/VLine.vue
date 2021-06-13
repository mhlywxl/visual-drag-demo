<template>
  <div class="v-line">
    <v-text :propValue="element.propValue" :element="element" />
  </div>
</template>

<script>
export default {
    props: {
        element: {
            type: Object,
        },
    },
    watch: {
        element(val) {
            console.log(val)
        },
    },
}
</script>

<style lang="scss" scoped>
.v-line {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
