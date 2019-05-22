<template>
  <v-app>
<!-- MENU BTN RIGHT BOTTOM -->
    <v-speed-dial
      v-model="fab"
      bottom
      right
      direction="top"
      :transition="transition"
      fixed
    > 
      <v-btn
        slot="activator"
        v-model="fab"
        color="lime"
        dark
        fab
      >
        <v-icon>menu</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        class="btn"
        v-for="(btn, i) in btns"
        :key="i"
        right
        round
        dark
        small
        :color="btn.color"
        @click="$vuetify.goTo(btn.link)"
      >
        <v-icon>{{btn.name}}</v-icon>
        {{btn.title}}
      </v-btn>
    </v-speed-dial>
<!-- TOOLBAR -->
    <ToolBar/>
<!-- TOP -->
    <v-layout
     id="top"
     class="section grey darken-4 lime--text"
     justify-center
     v-bind="binding" 
     align-center>
      <v-avatar data-aos="zoom-in-out" data-aos-delay="600" size="256px">
        <img :src="require('./assets/yomizou_face.png')">
      </v-avatar>
      <div>
        <h1 class="display-1 white--text font-weight-bold">
          <div class="inline" data-aos="slide-up" data-aos-delay="1200"><span class="display-4 font-weight-bold lime--text">T</span>omoyuki</div>
          <div class="inline" data-aos="flip-right" data-aos-delay="1800"><span class="display-4 font-weight-bold lime--text">Y</span>omiyama </div>
          <div class="inline" data-aos="fade" data-aos-delay="2400">
            <span class="display-4 font-weight-bold lime--text">PEM!</span>
          </div>
        </h1>
      </div>
    </v-layout>
<!-- PORTFOLIO -->
    <v-layout
     id="portfolio"
     py-5
     justify-center
     column
     class="grey darken-1 section">   
      <v-flex class="display-2
      font-weight-medium 
      lime--text 
      text-xs-center"
      >
        <div data-aos="fade-up" data-aos-dulation="400" data-aos-delay="50">Portfolio</div>
      </v-flex>
      <v-layout py-5 justify-center v-bind="binding"
       class="lime--text text-xs-center">
        <Card3 data-aos="flip-down" data-aos-delay="200"/>
        <Card2 data-aos="flip-down" data-aos-delay="200"/>
        <Card data-aos="flip-down" data-aos-delay="200"/>
        <Card4 data-aos="flip-down" data-aos-delay="200"/>
      </v-layout>
    </v-layout>
<!-- SKILLS     -->
    <v-layout
     id="skills"
     py-5
     class="grey darken-4 section"
     justify-center
     column
    >
      <v-flex class="display-2
      font-weight-medium 
      lime--text 
      text-xs-center"
      >
        <div data-aos="fade-up" data-aos-dulation="400" data-aos-delay="50">Skills</div>
      </v-flex>
      <v-container py-3>
        <v-flex py-4 class="headline
        font-weight-medium 
        lime--text 
        text-xs-center"
        >
          Language
        </v-flex>        
        <Progress data-aos="fade-up" />
        <v-flex py-4 class="headline
        font-weight-medium 
        lime--text 
        text-xs-center"
        >
          FrameWork
        </v-flex>        
        <Progress2 data-aos="fade-up" /> 
        <v-flex py-4 class="headline
        font-weight-medium 
        lime--text 
        text-xs-center"
        >
          Other
        </v-flex>        
        <Progress3 data-aos="fade-up" />                
      </v-container>
    </v-layout>
<!-- HISTORY     -->
    <v-layout 
     id="history"
     class="grey darken-1 section"
     py-5 justify-center column>
      <v-flex class="display-2
      font-weight-medium 
      lime--text 
      text-xs-center"
      pb-4
      >
        <div data-aos="fade-up" data-aos-dulation="400" data-aos-delay="50">History</div>
      </v-flex>     
      <v-container>
        <Timeline></Timeline>
      </v-container>
    </v-layout>
<!-- CONTACT -->
    <v-layout
     id="contact"
     class="grey darken-4 section"
     py-5 justify-center column>
      <v-flex class="display-2
      font-weight-medium 
      lime--text 
      text-xs-center"
      pb-4
      >
        <div data-aos="fade-up" data-aos-dulation="400" data-aos-delay="50">Contact me</div>
      </v-flex>
      <Contact2/>
    </v-layout>
<!-- FOOTER     -->
    <Footer/>
  </v-app>
</template>

<script>
import * as easings from 'vuetify/es5/util/easing-patterns'

import ToolBar from './components/ToolBar'
import Footer from './components/Footer'
import Card from './components/Card'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'
import Progress from './components/Progress'
import Progress2 from './components/Progress2'
import Progress3 from './components/Progress3'
import Timeline from './components/Timeline'
import Contact2 from './components/Contact2'

export default {
  name: 'App',
  components: {
    ToolBar,
    Footer,
    Card,
    Card2,
    Card3,
    Card4,
    Progress,
    Progress2,
    Progress3,
    Timeline,
    Contact2, 
  },
  data: () => ({
    direction: 'top',
    fab: false,
    tabs: null,
    transition: 'slide-y-reverse-transition',
    btns: [
      {name: "contact_mail", color: "lime", link:"#contact", title: "CONTACT"},
      {name: "history", color: "lime", link: "#history", title: "HISTORY"},
      {name: "keyboard", color: "lime", link: "#skills", title: "SKILLS"},
      {name: "phonelink", color: "lime", link: "#portfolio", title: "PORTFOLIO"},
      {name: "expand_less", color: "lime", link: "#top", title: "TOP"},
    ]
  }),
  computed:{
    //column xs only
    binding (){
      const binding = {}
      if(this.$vuetify.breakpoint.xsOnly)binding.column = true
      return binding
    },  
  },
}
</script>

<style>
v-app{
  margin:0;
  padding:0;
}
.section {
  min-height:100vh;
}


#portfolio {
  background:url("assets/bg-img.png") center no-repeat;
  background-position: bottom;
}
#skills {
  background:url("assets/bg-img2-1.png") center no-repeat;
  background-position: bottom;
}
#history {
  background:url("assets/bg-img2-2.png") center no-repeat;
  background-position: top;
}
#contact {
  background: url("assets/yomizou.png") center no-repeat;
  background-position:100% 105%;
  background-size: auto 50%;
}
span{
  margin-right: 3px;
}
.inline {
  display: inline-block;
}
.btn {
  width:110px;
}
</style>

