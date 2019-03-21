<template>
  <v-timeline dark>
    <v-timeline-item
      v-for="history in histories"
      :key="history.id"
      color="lime"
      large
      hover
      :data-aos="history.move"
    >
      <template v-slot:opposite>
        <span class="white--text">{{history.period}}</span>
      </template>
      <v-card class="elevation-5">
        <v-card-title class="subheading lime--text">{{history.title}}</v-card-title>
        <v-card-text>
          {{history.detail}}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>

  export default {
    data: () => ({
      histories: [
        { period:'2010 ~ 2016', title: '国税調査官時代', move: "fade-right",
         detail: '豊島にて５年間、法人担当の調査を行う。松戸にて審理担当を１年経験' },
        { period: '2016 ~ 2017', title: '沖縄県へ転職', move:"fade-left",
         detail: '入札、契約担当。残業生活（帰宅22時〜23時）を変えるため、ExcelVBAを学ぶ。半年後に定時で帰れる様になる。'  },
        { period: 'mid ~ late 2017', title: 'Excel VBAのYoutubeチャンネル開設', move: "fade-right",
         detail: 'ExcelVBAの情報をYoutubeで発信するため、Adobe CC の勉強を始める。悪戦苦闘しながらも６つのソフトを使いこなし、半年かけてようやく動画を投稿できるように。'},
        { period: 'late 2017', title: 'ブロックチェーンを知る', move: "fade-left",
         detail: '「ブロックチェーン革命」という本を購入し。激動の時代が来る予感。'},
        { period: 'mid 2018', title: 'Pythonとの出会い', move: "fade-right",
         detail: '「Office製品が将来Pythonという言語で実装できるらしい」という話を聞きPythonに興味を持ち、学び始める。基礎が終わるとデータ分析に興味を持ち、jupyterを使いpandas, numpy等を学ぶ。この頃からプログラマへの転職を考える。'},
        { period: 'mid 2018 ~ 2019', title: 'WEB系の知識全般の学習', move: "fade-left",
         detail: 'Ruby, PHP, HTML&CSS, JS, Vue, etc... を学習。'},
      ],
      mini: false,
      right: null
    }),
  }
</script>

<style>

</style>
