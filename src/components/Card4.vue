<template>
  <v-flex xs12 sm6 md3 lg3 ma-4>
    <v-card class="custom-card grey darken-4" hover>
        <v-img
          class="white--text"
          aspect-ratio
          :src="require('../assets/wagahee.png')"
          :lazy-src="require('../assets/wagahee.png')"
        />
      <v-card-title>
        <div class="mx-auto">
          <span class="subheading lime--text">悟空語変換</span><br>
          <span class="white--text">青空文庫を悟空語で</span><br>
          <span class="white--text">Python, janome</span>
        </div>
      </v-card-title>
      <v-card-actions class="mx-auto">
        <v-btn href="https://github.com/yomizo/peethon" target="_blank" flat color="lime"><span><v-icon>fab fa-github</v-icon></span>Github</v-btn>
      </v-card-actions>
      <!-- </v-responsive> -->
    </v-card>
  </v-flex>
</template>

<script>

  export default {
    data: () => ({
    }),
  }
</script>

<style>
.custom-card{
  border-radius: 4px;
}

.vuetify-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.vuetify-lazy-image-loaded {
  filter: blur(0);
}
</style>
