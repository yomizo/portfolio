<template>
  <v-layout>
    <v-toolbar app fixed clipped-left flat class="transparent lime--text">
      <v-toolbar-title class="headline text-uppercase">
        <span><a class="lime--text" href="#top">{{title}}</a></span>
        <span class="font-weight-light">{{subtitle}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          class="white--text" 
          v-for="(mn, i) in items" 
          :key="i"  
          @click="$vuetify.goTo(mn.href)"
          flat>
          {{mn.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-layout>
</template>

<script>

  export default {
    data: () => ({
      title: "PEM!",
      subtitle:"",
      drawer: false,
      items: [
        { title: 'Top', icon: 'dashboard', href:'#top' },
        { title: 'Portfolio', icon: 'question_answer', href:'#portfolio' },
        { title: 'Skills', icon: 'question_answer', href:'#skills' },
        { title: 'History', icon: 'question_answer', href:'#history' },
        { title: 'Contact', icon: 'question_answer', href:'#contact' },        
      ],
      mini: false,
      right: null
    }),
    components: {
      
    }
  }
</script>

<style>
a {
  text-decoration: none;
}
</style>
