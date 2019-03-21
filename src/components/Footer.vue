<template>
  <v-footer
    dark
    height="auto"
    class="footer"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey darken-4">
          <div><strong class="subheading">Hobby: </strong></div>
          <div>プログラミング, 卓球, NBA鑑賞, DIY</div>
        <v-spacer></v-spacer>
<!-- RIGHT_SIDE_BTN -->
        <v-btn
          v-for="icon in icons"
          :key="icon.id"
          class="mx-3"
          dark
          icon
          :href="icon.src"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.class }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-4 justify-center">
        &copy;{{info.year}} — <strong class="lime--text">{{info.name}}</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {class:'fab fa-github', src:'https://github.com/yomizo'},
        {class:'fab fa-youtube', src:'https://www.youtube.com/channel/UCoxJYz8UgYdMgyYsELu7Cpg'},
        {class:'fab fa-twitter', src:'https://twitter.com/MYomizo'},
      ],
      info: {
        year: "2019",
        name: "PEM![Please employ me!]"
      },
    })
  }
</script>

<style>
.footer {
  min-height: 20vh;
}
</style>
