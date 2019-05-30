<template>
  <v-timeline dark dense>
    <v-timeline-item
      v-for="history in histories"
      :key="history.id"
      color="lime"
      large
      hover
      data-aos="zoom-in"
    >
      <template>
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
        { period:'~ 2016', title: '国税調査官時代', move: "fade-right",
         detail: ''},
        { period: '2016 ~ 2017', title: '沖縄県へ転職', move:"fade-left",
         detail: ''},
        { period: 'mid ~ late 2017', title: 'Excel VBAのYoutubeチャンネル開設', move: "fade-right",
         detail: ''},
        { period: 'late 2017', title: 'ブロックチェーンを知る', move: "fade-left",
         detail: ''},
        { period: 'early 2018', title: 'Pythonとの出会い', move: "fade-right", 
         detail: '「Office製品が将来Pythonという言語で実装できるらしい」という話を聞きPythonに興味を持ち、学び始める。'},
        { period: 'mid 2018', title: 'データ分析に興味を持つ', move: "fade-left", 
         detail: '基礎が終わるとデータ分析に興味を持ち、jupyterを使いpandas, numpy, bokeh等で遊ぶ。この頃からプログラマへの転職を考える。同時に英語の重要さに気づき英語学習を習慣にする。'},         
        { period: 'late 2018 ~ 2019', title: 'WEB系の知識全般の学習', move: "fade-right",
         detail: '未経験からデータ分析系のエンジニアになるのは難しいと思い始めWEB系の勉強を始める。Ruby, PHP, HTML&CSS, JS, Vue, etc... を学習。途中でフロントにハマり、UI/UXやマーケティング等範囲が拡大。際限ない事になり始め、絞らなければと思う。'},
        { period: '2019/3 ~', title: '就職活動を始める', move: "fade-left",
         detail: 'ポートフォリオを作成し、未経験からエンジニアになるべく就職活動を始める。'},         
      ],
      mini: false,
      right: null
    }),
  }
</script>

<style>

</style>
