<template>
  <v-flex xs12 sm6 md3 lg3 ma-4>
    <v-card class="custom-card grey darken-4" hover>
        <!-- <v-responsive :aspect-ratio="16/9" class="grey darken-4"> -->
        <v-img
          class="white--text"
          aspect-ratio
          :src="require('../assets/respects.jpg')"
        >
        </v-img>
        <v-card-title>
          <div class="mx-auto">
            <span class="subheading lime--text">開発記録</span><br>
            <span class="white--text">Wantedly内の記事</span><br>
            <!-- <span class="white--text"></span> -->
          </div>
        </v-card-title>
        <v-card-actions class="mx-auto">
          <v-btn href="https://www.wantedly.com/users/100781197/post_articles/169707" target="_blank" flat color="lime">記事へのリンク</v-btn>
          <!-- <v-btn flat color="lime">Demo</v-btn> -->
        </v-card-actions>
      <!-- </v-responsive> -->
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    data: () => ({
      // carditems:[
      // ]
    })
  }
</script>

<style>
.custom-card{
  border-radius: 4px;
}
</style>
