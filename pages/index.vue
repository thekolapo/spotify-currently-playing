<template>
  <div class="home">
    <img class="home__background-img" src="" alt="song cover image" />
    <div class="home__overlay">
      <div class="home__song-cover">
        <img :src="song.album.images[0].url" alt="song cover image" />
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
  async asyncData() {
    try {
      const { data } = await api.fetchLastPlayedSong()
      return {
        song: data,
      }
    } catch (error) {}
  },
  data() {
    return {}
  },
  mounted() {
    if (process.browser) this.initImageDistortionEffect()
  },
  methods: {
    initImageDistortionEffect() {
      let app, image

      const setImageScale = () => {
        image.width = window.innerWidth
        image.height = window.innerHeight
        image.position.set(app.screen.width / 2, app.screen.height / 2)
        image.anchor.set(0.5)

        let scale = 1
        if (image.texture.height < image.texture.width) {
          scale = app.screen.height / image.texture.height
        } else scale = app.screen.width / image.texture.width
        image.scale.set(scale)
      }

      const initPixi = () => {
        app = new PIXI.Application({
          view: document.querySelector('.home__canvas'),
          width: window.innerWidth,
          height: window.innerHeight,
          transparent: true,
        })

        /* eslint new-cap: ["error", { "newIsCap": false }] */
        const coverImageurl = this.song.album.images[0].url
        image = new PIXI.Sprite.from(coverImageurl)

        PIXI.Loader.shared
          .add('song cover image', coverImageurl)
          .load(setImageScale)

        app.stage.addChild(image)

        const displacementSprite = new PIXI.Sprite.from(
          require('@/assets/images/displacement-image.jpeg')
        )

        const displacementFilter = new PIXI.filters.DisplacementFilter(
          displacementSprite
        )

        displacementFilter.scale.set(60)

        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

        app.stage.addChild(displacementSprite)

        app.stage.filters = [displacementFilter]

        app.ticker.add((delta) => {
          displacementSprite.x += 6
          displacementSprite.y += 4
        })
      }

      initPixi()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/home';
</style>
