<template>
  <div class="text-xs-center subheading">
    <v-progress-circular
      v-for="skill in skills"
      :rotate="-90"
      :size="130"
      :width="13"
      :value="skill.value"
      :color="skill.color"
    >
      {{ skill.lang }}
    </v-progress-circular>
  </div>
</template>

<script>
  export default {
    data: () => ({
      interval: {},
      value: 0,
      skills: [
        {
          lang: 'Vue.js',
          color: '#00c853',
          value: '70'
        },
        {
          lang: 'Rails',
          color:  '#ff1744',
          value: '60'
        },     
        {
          lang: 'Bulma',
          color:  '#00bfa5',
          value: '90'
        },     
        {
          lang: 'Semantic ui',
          color:  '#aa00ff',
          value: '70'
        },                                  
      ]
      }),

  }
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
