<template>
  <div id="prg2" class="text-xs-center subheading">
    <v-progress-circular
      v-for="skill in skills"
      rotate="-90"
      size="130"
      width="13"
      :value="skill.start"
      :color="skill.color"
    >
      {{ skill.lang }}
    </v-progress-circular>
  </div>
</template>

<script>
  export default {
    data: () => ({
      offset: 0,
      top: 0,
      skills: [
        {
          lang: 'Vue.js',
          color: '#00c853',
          start: '0',
          value: '70'
        },
        {
          lang: 'Rails',
          color:  '#ff1744',
          start: '0',
          value: '60'
        },     
        {
          lang: 'Bulma',
          color:  '#00bfa5',
          start: '0',
          value: '90'
        },     
        {
          lang: 'Semantic ui',
          color:  '#aa00ff',
          start: '0',
          value: '70'
        },                                  
      ]
      }),
      methods: {
        run: function(){
          this.top = this.scrollTop()
          if(this.top >= this.offset) {
            setInterval(() =>{
              this.skills.forEach(skill =>{
                if(skill.start != skill.value){
                  skill.start = Number(skill.start)
                  return(skill.start += 10)
                }
              })
            }, 600)
          }
        },
        scrollTop() {
          let tgt
          if ('scrollingElement' in document) {
            tgt = document.scrollingElement
          } else if (this.browser.isWebKit) {
            tgt = document.body
          } else {
            tgt = document.documentElement
          }
          return tgt.scrollTop
        }
      },
      mounted(){
        const FPS = 1000 / 60
        this.offset = document.getElementById('prg2').offsetTop - window.innerHeight
        document.addEventListener('scroll', _.throttle(this.run, FPS), {passive: true})
      },
      destroyed(){
        document.removeEventListener('scroll', this.run)
      }
  }
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
