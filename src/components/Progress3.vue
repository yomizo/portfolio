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
          lang: 'Premiere Pro',
          color: '#f06292',
          value: '70'
        },
        {
          lang: 'Audition',
          color:  '#1de9b6',
          value: '40'
        },     
        {
          lang: 'Illustrator',
          color:  '#ff6d00',
          value: '60'
        },     
        {
          lang: 'Character Animator',
          color:  '#ea80fc',
          value: '70'
        },
        {
          lang: 'After Effects',
          color:  '#b388ff',
          value: '30'
        },
        {
          lang: 'Photoshop',
          color:  '#00b0ff',
          value: '30'
        },                                                  
      ]
      }),
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 80) {
          return (this.value = 78)
        }
        this.value += 10
      }, 800)
    }
  }
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
