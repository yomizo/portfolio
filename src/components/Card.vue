<template>
  <v-flex xs12 sm6 md4 lg3 ma-2>
    <v-card class="custom-card grey darken-4" hover>
        <!-- <v-responsive :aspect-ratio="16/9" class="grey darken-4"> -->
        <v-img
          class="white--text"
          aspect-ratio
          :src="require('../assets/p-img.png')"
        >
        </v-img>
        <v-card-title>
          <div class="mx-auto">
            <span class="subheading lime--text">Portfolio Page</span><br>
            <span class="white--text">イラストレーター Seymour様</span><br>
            <span class="white--text">Semantic ui, Vue.js</span>
          </div>
        </v-card-title>
        <v-card-actions class="mx-auto">
          <v-btn href="https://github.com/yomizo/illustrator_site" target="_blank" flat color="lime"><span><v-icon>fab fa-github</v-icon></span>Github</v-btn>
          <!-- <v-btn flat color="lime">Demo</v-btn> -->
        </v-card-actions>
      <!-- </v-responsive> -->
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    data: () => ({
      carditems:[
        {img: '../assets/p-img.png', title: "Landing Page", user: "イラストレーター「Seymour」様", lang: "Semantic ui, Vue.js"},
        {img: "@/assets/p-img.png", title: "Landing Page", user: "イラストレーター「Seymour」様", lang: "Semantic ui, Vue.js"},
      ]
    })
  }
</script>

<style>
.custom-card{
  border-radius: 4px;
}
</style>
