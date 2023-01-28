<template>
  <div class="home">
    <img class="home__background-img" src="" alt="song cover image" />
    <div class="home__overlay">
      <div class="home__song-cover">
        <img
          ref="songCoverImage"
          :src="song.album.images[0].url"
          alt="song cover image"
        />
      </div>
      <p class="home__song-title">{{ song.name }}</p>
      <p class="home__song-artist">{{ song.artists[0].name }}</p>
      <button class="c-button" @click="toggleAudio()">
        {{ playState }}
      </button>
      <p class="home__credit">
        🎵 This is WHAT I’M CURRENTLY LISTENING TO ON SPOTIFY. MADE WITH LOVE BY
        <a href="">KOLAPO</a> & <a href="">DARASIMI</a> 🌺 🌸
      </p>
    </div>
    <canvas class="home__canvas"></canvas>
    <!-- <canvas class="home__audio-wave"></canvas> -->
  </div>
</template>

<script>
/* global PIXI */
import ColorThief from 'colorthief/dist/color-thief'
import api from '@/utils/api.js'

export default {
  async asyncData() {
    try {
      const { data } = await api.fetchCurrentlyPlaying()

      return {
        song: data,
      }
    } catch (error) {}
  },
  data() {
    return {
      previewIsPlaying: false,
      audioElement: null,
      playState: 'Preview song',
    }
  },
  mounted() {
    if (process.browser) this.initImageDistortionEffect()
    this.initWebAudio()
    this.getDominantImageColor(this.$refs.songCoverImage)
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
    initWebAudio() {
      this.audioElement = new Audio(this.song.preview_url)

      this.audioElement.addEventListener('ended', () => {
        this.playState = 'Play'
      })

      this.audioElement.addEventListener('loaded', () => {})
    },
    toggleAudio() {
      if (this.audioElement.paused) {
        this.audioElement.play()
        this.playState = 'Pause'
      } else {
        this.audioElement.pause()
        this.playState = 'Play'
      }
    },
    getDominantImageColor(sourceImage) {
      sourceImage.crossOrigin = 'Anonymous'

      sourceImage.onload = () => {
        const colorThief = new ColorThief()
        const color = colorThief.getColor(sourceImage)
        console.log(color)
      }
    },
    visualizeAudio() {
      // Set up audio context
      window.AudioContext = window.AudioContext || window.webkitAudioContext
      const audioContext = new AudioContext()

      const drawAudio = (url) => {
        fetch(url)
          .then((response) => response.arrayBuffer())
          .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
          .then((audioBuffer) => draw(normalizeData(filterData(audioBuffer))))
      }

      const filterData = (audioBuffer) => {
        const rawData = audioBuffer.getChannelData(0) // We only need to work with one channel of data
        const samples = 70 // Number of samples we want to have in our final data set
        const blockSize = Math.floor(rawData.length / samples) // the number of samples in each subdivision
        const filteredData = []
        for (let i = 0; i < samples; i++) {
          const blockStart = blockSize * i // the location of the first sample in the block
          let sum = 0
          for (let j = 0; j < blockSize; j++) {
            sum = sum + Math.abs(rawData[blockStart + j]) // find the sum of all the samples in the block
          }
          filteredData.push(sum / blockSize) // divide the sum by the block size to get the average
        }
        return filteredData
      }

      const normalizeData = (filteredData) => {
        const multiplier = Math.pow(Math.max(...filteredData), -1)
        return filteredData.map((n) => n * multiplier)
      }

      const draw = (normalizedData) => {
        // set up the canvas
        const canvas = document.querySelector('.home__audio-wave')
        const dpr = window.devicePixelRatio || 1
        const padding = 20
        canvas.width = canvas.offsetWidth * dpr
        canvas.height = (canvas.offsetHeight + padding * 2) * dpr
        const ctx = canvas.getContext('2d')
        ctx.scale(dpr, dpr)
        ctx.translate(0, canvas.offsetHeight / 2 + padding) // set Y = 0 to be in the middle of the canvas

        // draw the line segments
        const width = canvas.offsetWidth / normalizedData.length
        for (let i = 0; i < normalizedData.length; i++) {
          const x = width * i
          let height = normalizedData[i] * canvas.offsetHeight - padding
          if (height < 0) {
            height = 0
          } else if (height > canvas.offsetHeight / 2) {
            height = height > canvas.offsetHeight / 2
          }
          drawLineSegment(ctx, x, height, width, (i + 1) % 2)
        }
      }

      const drawLineSegment = (ctx, x, height, width, isEven) => {
        ctx.lineWidth = 1 // how thick the line is
        ctx.strokeStyle = '#fff' // what color our line is
        ctx.beginPath()
        height = isEven ? height : -height
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.arc(x + width / 2, height, width / 2, Math.PI, 0, isEven)
        ctx.lineTo(x + width, 0)
        ctx.stroke()
      }

      drawAudio(this.song.preview_url)
    },
    handleProgressVisualizer() {},
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/home';
</style>
