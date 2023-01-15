<template>
  <div class="home">
    <img
      class="home__background-img"
      src="@/assets/images/song-cover.jpeg"
      alt="song cover image"
    />
    <div class="home__overlay">
      <div class="home__song-cover">
        <img src="@/assets/images/song-cover.jpeg" alt="song cover image" />
      </div>
      <p class="home__song-title">EVERYDAY</p>
      <p class="home__song-artist">wizkid</p>
      <button class="c-button">Play song</button>
      <p class="home__credit">
        🎵 This is WHAT I’M CURRENTLY LISTENING TO ON SPOTIFY . MADE WITH LOVE
        BY <a href="">KOLAPO</a> & <a href="">DARASIMI</a> 🌺 🌸
      </p>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api.js'

export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    async fetchLastPlayedSong() {
      try {
        const song = await api.fetchLastPlayedSong()
        console.log(song)
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100vh;

  &__background-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // object-position: top;
  }

  &__overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(105, 43, 214, 0.3);
    backdrop-filter: blur(15px);
    background-image: url('@/assets/images/noise.png');
    background-repeat: repeat;
    color: white;

    padding: 0 3rem;
  }

  &__song-cover {
    $size: 35rem;
    max-width: $size;
    max-height: $size;
    width: 100%;
    filter: drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.4));
    background-color: rgba(105, 43, 214, 1);
    border-radius: 10px;
    overflow: hidden;
  }

  &__song-title {
    font-size: 2.6rem;
    margin-top: 2.8rem;
    color: #f598fa;
  }

  &__song-artist {
    font-size: 1.8rem;
    margin: 1.2rem 0 2.2rem;
  }

  &__credit {
    position: absolute;
    bottom: 2.6rem;
    padding: inherit;

    a {
      color: #f598fa;
      text-decoration: none;
    }
  }
}
</style>
