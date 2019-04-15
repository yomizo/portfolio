<template>
  <div id="prg1" class="text-xs-center subheading">
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
      interval: {},
      i: 0,
      addValue: null,
      offset: 0,
      skills: [
        {
          lang: 'HTML&CSS',
          color: '#ff4081',
          start: '0',
          value: '80'
        },
        {
          lang: 'JavaScript',
          color:  '#ffd600',
          start: '0',
          value: '70'
        },
        {
          lang: 'Ruby',
          color:  '#ff1744',
          start: '0',
          value: '70'
        },            
        {
          lang: 'Python',
          color:  '#00e5ff',
          start: '0',
          value: '60'
        },      
        {
          lang: 'PHP',
          color:  '#00b0ff',
          start: '0',
          value: '30'
        },                                  
      ]
      }),
      methods: {
        run: function(){
          setInterval(() =>{
            this.skills.forEach(skill =>{
              if(skill.start != skill.value){
                skill.start = Number(skill.start)
                return(skill.start += 10)
              }
           })
         }, 500)}
      },
      created(){
        window.addEventListener('scroll', this.run())
      },
      destroyed(){
        window.removeEventListener('scroll', this.run)
      }
  }
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>


