<template>
  <v-flex xs12 sm6 md4 lg3 ma-2>
    <v-card class="custom-card grey darken-4" hover>
        <!-- <v-responsive :aspect-ratio="16/9" class="grey darken-4"> -->
        <v-img
          class="white--text"
          aspect-ratio
          :src="require('../assets/mysite.png')"
        >
        </v-img>
        <v-card-title>
          <div class="mx-auto">
            <span class="subheading lime--text">This Page</span><br>
            <span class="white--text">当サイト</span><br>
            <span class="white--text">Vue.js, Vuetify</span>
          </div>
        </v-card-title>
        <v-card-actions class="mx-auto">
          <v-btn href="https://github.com/yomizo/portfolio" target="_blank" flat color="lime"><span><v-icon>fab fa-github</v-icon></span>Github</v-btn>
        </v-card-actions>
      <!-- </v-responsive> -->
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style>
.custom-card{
  border-radius: 4px;
}
</style>
