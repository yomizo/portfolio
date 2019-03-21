<template>
  <v-layout>
    <!-- <v-navigation-drawer
    v-model="drawer"
    :mini-variant="mini"
    absolute
    clipped
    app
    class="hidden-md-and-up grey"
  >
    
    <v-list class="pa-1">
      <v-list-tile v-if="mini" @click.stop="mini = !mini">
        <v-list-tile-action>
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>
          <img :src="require('../assets/yomizou_face.png')">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Tomoyuki Yomiyama</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider light></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer> -->
  <v-toolbar app fixed clipped-left flat class="transparent lime--text">
    <!-- <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
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
        :href="mn.href" 
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
