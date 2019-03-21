<template>
  <v-flex xs12 sm6 md4 lg3 ma-2>
    <v-card class="custom-card grey darken-4" hover>
        <!-- <v-responsive :aspect-ratio="16/9" class="grey darken-4"> -->
        <v-img
          class="white--text"
          aspect-ratio
          :src="require('../assets/isara_mosha.png')"
        >
        </v-img>
        <v-card-title>
          <div class="mx-auto">
            <span class="subheading lime--text">Landing Page</span><br>
            <span class="white--text">模写コーディング</span><br>
            <span class="white--text">Pug, Sass, gulp</span>
          </div>
        </v-card-title>
        <v-card-actions class="mx-auto">
          <v-btn href="https://github.com/yomizo/mosha_isara" target="_blank" flat color="lime"><span><v-icon>fab fa-github</v-icon></span>Github</v-btn>
          <v-btn flat color="lime">Demo</v-btn>
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
