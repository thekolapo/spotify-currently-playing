<template>
  <div ref="loader" class="loader">
    <p class="loader__content">
      <span ref="quote" class="loader__quote">{{ selectedQuote.quote }}</span>
      <span
        v-if="selectedQuote.author"
        ref="author"
        :data-content="`~ ${selectedQuote.author}`"
        class="loader__author"
      />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        {
          quote: 'A country without music is a dead nation. 🌼 🌸',
          author: 'Osita Osadebe',
        },
        {
          quote:
            'Music is nostalgic, you can relive a moment through music. That’s the power of music. 🌺 🌸',
          author: 'Kolapo Oni',
        },
        {
          quote:
            'One good thing about music, when it hits you, you feel no pain. 🌺 🌼',
          author: 'Bob Marley',
        },
        {
          quote: 'Where words fail, music speaks. 🌸 🌻',
          author: 'Hans Christian Andersen',
        },
        {
          quote:
            'Music for me has been my breath, my backbone since I was a little kid. Anything that comes to my life, hard time or good time, I always find comfort in music. 🌼 🌺 ',
          author: 'Angelique Kidjo',
        },
        // {
        //   quote:
        //     'Music is our universal language floating through space and time connecting all of humanity.',
        // },
        // {
        //   quote:
        //     'Erasing all cultural & language barriers so for one sacred moment we can all be united by the power of music.',
        // },
      ],
      selectedQuote: '',
      showLoader: true,
    }
  },
  mounted() {
    this.selectedQuote =
      this.quotes[Math.floor(Math.random() * this.quotes.length)]
    // this.animateLoaderText()
  },
  methods: {
    animateLoaderText() {
      setTimeout(() => {
        this.$refs.quote.style.setProperty('--translate-y', 0)
        this.$refs.quote.style.opacity = 1
        this.$refs.author.style.setProperty('--translate-y', 0)
      }, 10)
    },
    hideLoader() {
      setTimeout(() => {
        this.$refs.loader.style.opacity = 0
      }, 2500)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/loader';
</style>
