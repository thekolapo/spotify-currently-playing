<template>
  <div class="home">
    <template v-if="song">
      <div ref="overlay" class="home__content-overlay">
        <div class="home__song-details">
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
        </div>
        <p class="home__credit">
          Made with love by
          <a href="https://twitter.com/kolapo_" target="_blank">Kolapo</a> &
          <a href="https://twitter.com/theDarasimi" target="_blank">Darasimi</a>
          🌺 🌸
        </p>
        <!--prettier-ignore-->
        <svg ref="wavyLine" class="home__wavy-line" width="1440" height="122" viewBox="0 0 1440 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_26_4)">
        <path pathLength="1" d="M1 101.783C14.1321 101.783 23.498 68.4648 28.9145 57.6692C35.2942 44.9538 38.0278 49.1045 48.5703 55.8585C57.5091 61.5851 60.3418 63.2657 71.034 63.2657C81.887 63.2657 88.1378 65.0526 96.8012 72.1544C99.4871 74.3562 119.616 91.3607 119.76 90.4256C121.836 76.9839 119.2 62.4424 117.613 49.1097C115.769 33.6159 126.785 57.6845 128.845 61.6197C131.852 67.3639 136.514 76.0038 141.398 80.3847C144.507 83.1732 152.692 81.523 156.925 84.3352C170.447 93.319 179.388 125.797 179.388 93.0593C179.388 75.7272 193.19 114.081 196.236 112.977C202.315 110.774 212.151 81.174 218.039 94.3762C223.807 107.309 230.372 85.1125 236.043 84.1706C242.72 83.0617 253.683 93.6676 258.011 88.1212C264.665 79.5959 268.482 79.6703 278.989 85.4875C288.803 90.9209 290.453 54.2963 296.827 72.6483C302.951 90.2782 310.207 111.06 310.207 79.7263C310.207 55.1326 315.535 76.4045 328.045 74.6235C339.747 72.9576 352.752 43.1261 356.455 33.6368C358.188 29.1958 360.573 8.61518 369.669 17.1762C379.796 26.7069 382.264 21.5825 388.169 35.9413C392.996 47.6795 393.31 62.3525 397.088 72.8129C398.765 77.4542 409.704 99.8438 414.927 86.3105C429.823 47.7147 424.446 99.2379 449.284 84.006C461.739 76.3677 462.519 86.1085 467.122 95.8576C468.946 99.7195 467.671 89.2345 467.948 87.2981C468.595 82.7857 473.245 84.006 476.702 84.006C497.983 84.006 518.163 75.7146 539.138 75.1173C548.085 74.8626 555.846 78.5585 564.245 78.0802C572.199 77.6273 587.139 56.4279 592.655 61.6197C596.19 64.9472 596.291 77.1571 600.088 74.1297C604.356 70.7273 601.574 53.6853 601.574 48.4513C601.574 30.7155 610.225 62.4576 619.413 61.9489C630.696 61.3243 625.74 23.9932 643.198 40.8794C654.295 51.6125 655.222 61.6885 663.35 45.4884C666.599 39.0126 690.176 75.047 699.027 77.4218C708.22 79.8882 702.355 35.8383 707.286 53.3894C709.117 59.9043 710.631 73.7839 717.527 77.4218C721.051 79.2813 723.777 68.489 724.96 66.3932C733.165 51.856 736.566 59.9479 745.772 66.064C755.951 72.8268 748.039 29.3081 759.151 44.3361C760.443 46.0832 768.25 62.9282 771.043 61.2905C777.207 57.6776 773.661 38.4523 774.182 32.4845C774.97 23.4512 790.334 21.7003 797.967 18.6577C805.133 15.801 836.062 -5.83403 843.72 3.18479C848.517 8.8343 859.174 54.0478 864.697 54.0478C868.599 54.0478 864.838 45.464 872.13 52.731C879.406 59.9819 882.456 69.8979 888.648 77.751C901.183 93.6499 906.722 50.2997 907.643 44.3361C908.91 36.1241 924.968 79.4197 928.62 58.4922C929.159 55.4033 929.716 39.0285 932.254 37.2581C936.067 34.598 946.608 56.1352 947.945 58.4922C961.097 81.6806 968.08 41.8525 977.677 39.7272C985.631 37.9657 993.472 53.2655 1001.46 47.9574C1010.69 41.8243 1013.08 18.596 1028.22 21.9498C1043.64 25.3648 1056.83 35.2596 1071.33 40.8794C1098.71 51.4884 1082.68 9.55021 1092.8 1.70334C1094.67 0.255083 1108.79 32.3583 1109.98 34.789C1115.24 45.4986 1121.59 55.674 1127.16 66.2286C1132.38 76.1227 1138.14 51.6809 1142.69 51.4142C1159.91 50.4046 1164.21 79.4149 1184.97 78.0802C1201.87 76.9937 1210.69 52.0871 1228.25 51.4142C1236.61 51.0935 1252.01 73.8468 1252.03 73.8005C1258.6 61.3057 1259.11 21.3293 1265.25 57.34C1270.49 88.0993 1273.22 49.5676 1282.42 40.8794C1293.27 30.6347 1300.01 64.6149 1305.55 59.6444C1307.31 58.0639 1315.77 19.2304 1320.41 34.9536C1323.8 46.4193 1325.35 64.1139 1341.23 54.3771C1355.02 45.9171 1372.32 44.885 1386.48 34.2952C1393.87 28.7735 1401.37 9.85796 1406.63 27.711C1411.71 44.9214 1409.85 33.2574 1410.27 22.4436C1410.65 12.5373 1422.66 41.6719 1424.47 45.4884C1428.1 53.113 1436.78 53.8771 1440 60.3029" stroke="white" stroke-linecap="round"/>
        </g>
        <defs>
        <filter id="filter0_d_26_4" x="-3.5" y="0.500443" width="1448" height="121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_4"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_4" result="shape"/>
        </filter>
        </defs>
      </svg>
      </div>
      <div class="home__blur-overlay" />
      <canvas class="home__canvas"></canvas>
      <about />
    </template>
    <loader ref="loader" />
  </div>
</template>

<script>
/* global PIXI */
import ColorThief from 'colorthief'
import api from '@/utils/api.js'
import About from '~/components/About.vue'
import Loader from '~/components/Loader.vue'

export default {
  components: { About, Loader },
  data() {
    return {
      previewIsPlaying: false,
      audioElement: null,
      playState: 'Preview Song',
      songProgressAnimFrame: '',
      song: null,
    }
  },
  mounted() {
    this.fetchCurrentlyPlayingSong()
  },
  methods: {
    async fetchCurrentlyPlayingSong() {
      try {
        const { data } = await api.fetchCurrentlyPlaying()
        this.song = data

        this.$nextTick(() => {
          this.setAccentColor()
          this.initWebAudio()
          this.initImageDistortionEffect()
        })
      } catch (error) {}
    },
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

        // hide loader view
        this.$refs.loader.hideLoader()
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
          .add(this.song.name, coverImageurl)
          .load(setImageScale)

        setImageScale()

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
      // this.audioElement.muted = true

      this.audioElement.addEventListener('ended', () => {
        this.playState = 'Play'
        cancelAnimationFrame(this.songProgressAnimFrame)
      })

      this.audioElement.addEventListener('loaded', () => {})
    },
    toggleAudio() {
      if (this.audioElement.paused) {
        this.audioElement.play()
        this.playState = 'Pause'
        this.handleProgressVisualizer()
      } else {
        this.audioElement.pause()
        this.playState = 'Play'
        cancelAnimationFrame(this.songProgressAnimFrame)
      }
    },
    setAccentColor() {
      const sourceImage = this.$refs.songCoverImage

      const rgbToHex = (r, g, b) =>
        `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

      const colorIsLight = (color) => {
        const r = color[0]
        const g = color[1]
        const b = color[2]
        const brightness = (r * 299 + g * 587 + b * 114) / 1000
        return brightness > 155
      }

      sourceImage.crossOrigin = 'Anonymous'
      sourceImage.onload = () => {
        let selectedColor
        const colorThief = new ColorThief()
        const rgbColorPalette = colorThief.getPalette(sourceImage)

        let breakLoop = false
        rgbColorPalette.forEach((color) => {
          if (breakLoop) return

          if (colorIsLight(color)) {
            selectedColor = rgbToHex(color[0], color[1], color[2])
            breakLoop = true
          }
        })

        if (selectedColor)
          document.documentElement.style.setProperty(
            '--accent-color',
            `${selectedColor}`
          )
      }
    },
    handleProgressVisualizer() {
      let timer = this.audioElement.currentTime
      let progress

      const animate = () => {
        if (this.audioElement.currentTime - timer >= 0.1) {
          progress = 1 - this.audioElement.currentTime / 30
          this.$refs.wavyLine.style.setProperty('--stroke-dashoffset', progress)
          timer = this.audioElement.currentTime

          if (progress <= 0.01) {
            setTimeout(() => {
              timer = 0
              progress = 1
            }, 1000)
          }
        }

        this.songProgressAnimFrame = requestAnimationFrame(animate)
      }

      animate()
    },
    visualizeAudio() {
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/home';
</style>
