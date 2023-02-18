<template>
  <div ref="about" class="about">
    <button ref="menuButton" class="about__menu-button">
      <!--prettier-ignore-->
      <svg width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_124_12)">
				<rect x="20" width="2.4" height="34" rx="2" fill="white"/>
				<rect x="4" y="18" width="2.4" height="34" rx="1.5" transform="rotate(-90 4 18)" fill="white"/>
				</g>
				<defs>
				<filter id="filter0_d_124_12" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
				<feOffset dy="4"/>
				<feGaussianBlur stdDeviation="2"/>
				<feComposite in2="hardAlpha" operator="out"/>
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_124_12"/>
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_124_12" result="shape"/>
				</filter>
				</defs>
			</svg>
    </button>
    <div ref="aboutContent" class="about__content">
      <p>
        Hi, my name is Kolapo Oni, and I’m a Designer & Developer based in
        Lagos, Nigeria. You can learn more about me and my interests on my
        <a href="" target="_blank" class="c-link">personal website</a>.
      </p>
      <p>
        This project was inspired by my love for music. It shows the song I’m
        currently listening to on my
        <a
          href="https://open.spotify.com/user/22tlod5b4sujuk2jxfja6cjjy"
          target="_blank"
          class="c-link"
        >
          Spotify </a
        >, so whenever you come here, I hope you relive a moment in time, or
        find new sounds to create memories with.
      </p>
      <p>
        Music is an endless and dynamic experience. It’s why I created a
        personal newsletter to extend your experience of this project beyond
        here. The newsletter is a curation of all the things I love from music,
        architecture, design, photography, history, and interesting things I
        find on the internet.
      </p>
      <p>
        When you subscribe below to join my mailing list, you’ll receive a
        beautifully curated newsletter in your inbox once in awhile, which I
        hope you love.
      </p>
      <p>Love from Kolapo 🌺 🌸</p>
      <form
        id="mc-embedded-subscribe-form"
        action="https://gmail.us6.list-manage.com/subscribe/post?u=b2f96832998fed0eaca1b2e39&amp;id=510bd8b63e"
        method="post"
        name="mc-embedded-subscribe-form"
      >
        <input
          id="mce-EMAIL"
          name="EMAIL"
          type="email"
          placeholder="I'll only send nice things, I promise."
          required
        />
        <input
          id="mce-SOURCE"
          name="SOURCE"
          type="text"
          value="personal music site"
        />
        <button class="c-button" type="submit">Subscribe</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.handleAboutViewToggle()
  },
  methods: {
    handleAboutViewToggle() {
      let showMenu = false
      const aboutView = this.$refs.about
      const menuButton = this.$refs.menuButton
      const aboutContent = this.$refs.aboutContent

      const handleMouseHover = () => {
        if (showMenu) return
        aboutView.style.setProperty('--height', '100vh')
        aboutView.style.setProperty('--background-scale', 0.12)
      }

      const handleMouseLeave = () => {
        if (showMenu) return
        aboutView.style.setProperty('--background-scale', 0)

        setTimeout(() => {
          aboutView.style.setProperty('--height', '10rem')
        }, 300)
      }

      const handleMouseClick = () => {
        showMenu = !showMenu
        if (!showMenu) {
          aboutView.scrollTo({ top: 0, behavior: 'smooth' })
          aboutContent.style.visibility = 'hidden'
          aboutContent.style.opacity = 0
          aboutContent.style.setProperty('--translate-y', '15%')
          aboutView.style.setProperty('--background-scale', 0)
          menuButton.style.removeProperty('--rotation')
          aboutView.style.overflow = 'hidden'
          aboutContent.style.pointerEvents = 'none'
        } else {
          aboutContent.style.visibility = 'visible'
          aboutContent.style.opacity = 1
          aboutContent.style.setProperty('--transition-time', '1s')
          aboutContent.style.setProperty('--translate-y', '10%')
          aboutView.style.setProperty('--background-scale', 1)
          menuButton.style.setProperty('--rotation', '-45deg')
          aboutView.style.overflow = 'auto'
          aboutContent.style.pointerEvents = 'auto'
        }
      }

      this.$refs.menuButton.addEventListener('mouseover', handleMouseHover)
      this.$refs.menuButton.addEventListener('mouseleave', handleMouseLeave)
      this.$refs.menuButton.addEventListener('click', handleMouseClick)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/about';
</style>
