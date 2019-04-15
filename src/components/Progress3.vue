<template>
  <div id="prg3" class="text-xs-center subheading">
    <v-progress-circular
      v-for="skill in skills"
      :rotate="-90"
      :size="130"
      :width="13"
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
      top: 0,
      offset: 0,
      skills: [
        {
          lang: 'Premiere Pro',
          color: '#f06292',
          start: '0',
          value: '70'
        },
        {
          lang: 'Audition',
          color:  '#1de9b6',
          start: '0',
          value: '40'
        },     
        {
          lang: 'Illustrator',
          color:  '#ff6d00',
          start: '0',
          value: '60'
        },     
        {
          lang: 'Character Animator',
          color:  '#ea80fc',
          start: '0',
          value: '70'
        },
        {
          lang: 'After Effects',
          color:  '#b388ff',
          start: '0',
          value: '30'
        },
        {
          lang: 'Photoshop',
          color:  '#00b0ff',
          start: '0',
          value: '30'
        },                                                  
      ]
      }),
      methods: {
        // start rotate animation
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
        // get scroll top value
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
        const FPS = 1000 / 60 //set FPS
        //get offset value
        this.offset = document.getElementById('prg3').offsetTop - window.innerHeight
        // set scroll event listener
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
