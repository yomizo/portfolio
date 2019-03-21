<template>
  <v-parallax
     :src="src"
     height="1000"
     dark
     >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-bold mb-3">make a splash!</h1>
      <h4 class="subheading">Build your application today!</h4>
    </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    data: () => ({
      menu: [
        {
          text: 'one',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'two',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'three',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      title: "make a splash!",
      subtitle: "",
      src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    })
  }
</script>

<style>

</style>
