<template>
  <div class="home">
    <img class="home__background-img" src="" alt="song cover image" />
    <div class="home__overlay">
      <div class="home__song-cover">
        <img :src="this.song.album.images[0].url" alt="song cover image" />
      </div>
      <p class="home__song-title">{{ song.name }}</p>
      <p class="home__song-artist">{{ song.artists[0].name }}</p>
      <button class="c-button">Preview song</button>
      <p class="home__credit">
        🎵 This is WHAT I’M CURRENTLY LISTENING TO ON SPOTIFY . MADE WITH LOVE
        BY <a href="">KOLAPO</a> & <a href="">DARASIMI</a> 🌺 🌸
      </p>
    </div>
    <canvas class="home__canvas"></canvas>
  </div>
</template>

<script>
/* global PIXI */
import api from '@/utils/api.js'

export default {
  data() {
    return {
      songTitle: null,
    }
  },
  async asyncData() {
    try {
      const { data } = await api.fetchLastPlayedSong()
      console.log(data.album)
      return {
        song: data,
      }
    } catch (error) {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/home';
</style>
