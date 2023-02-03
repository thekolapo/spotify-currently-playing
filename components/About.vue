<template>
  <div ref="about" class="about">
    <button ref="menuButton" class="about__menu-button">
      <!--prettier-ignore-->
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_124_12)">
				<rect x="20" width="3" height="34" rx="1.5" fill="white"/>
				<rect x="4" y="18" width="3" height="34" rx="1.5" transform="rotate(-90 4 18)" fill="white"/>
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
        Hi, my name is Kolapo Oni. I'm a Designer & Developer based in Lagos,
        Nigeria. You can check out this link to see my portfolio webiste. This
        webiste is pretty much what I'm currently listening to on Spotify.
      </p>
      <p>
        Besides this webiste representing what a place to see the music I'm
        currently listening to. One of the reason I also create dit is for my
        perisnal newsletter where I'll be sending out new songs/artists I
        discover as well as my other interests mainly centered around
        architecture, interior design, design, film and nice things I discover
        on the internet.
      </p>
      <p>
        I already have this thread on twitter where I post mainlky nice webistes
        I discover and a few other interesting things. I also have this thread
        where I post the bautiful pictures I take as photogrpahy for me is also
        a form of self expresion. You can alkso checkout my VSCO
      </p>
      <form action="">
        <input
          type="email"
          required
          placeholder="I'll only send nice things. I promise."
        />
        <button type="submit">Subscribe</button>
      </form>
      <p>
        Music is nostalgic, You can relive a moment through music. That’s the
        power of music. 🌺 🌸
      </p>
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
      const aboutView = document.querySelector('.about')
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
          aboutView.style.setProperty('--height', '10vh')
        }, 300)
      }

      const handleMouseClick = () => {
        showMenu = !showMenu
        if (!showMenu) {
          aboutContent.style.visibility = 'hidden'
          aboutContent.style.opacity = 0
          aboutContent.style.setProperty('--translate-y', '15%')
          aboutView.style.setProperty('--background-scale', 0)
          menuButton.style.removeProperty('--rotation')
        } else {
          aboutContent.style.visibility = 'visible'
          aboutContent.style.opacity = 1
          aboutContent.style.setProperty('--transition-time', '1s')
          aboutContent.style.setProperty('--translate-y', '10%')
          aboutView.style.setProperty('--background-scale', 1)
          menuButton.style.setProperty('--rotation', '-45deg')
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
.about {
  --background-scale: 0;
  --height: 10vh;
  position: absolute;
  top: 0;
  width: 100%;
  height: var(--height);
  left: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  // overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(28, 28, 28, 0.7);
    // background-image: url('@/assets/images/noise.png');
    backdrop-filter: blur(20px);
    z-index: 3;
    transform: scaleY(var(--background-scale));
    transform-origin: bottom;
    transition: 0.4s $ease-out-expo;
  }

  &__content {
    --transition-time: 1s;
    --translate-y: 15%;
    color: rgb(219, 219, 219);
    z-index: 4;
    // padding: 6rem 30rem;
    font-size: 2rem;
    line-height: 3.2rem;
    // max-width: 80rem;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    font-weight: 300;
    opacity: 0;
    transform: translateY(var(--translate-y));
    transition: opacity var(--transition-time) linear 0.3s,
      transform calc(var(--transition-time) - 0.2s) $ease-out-expo 0.3s;

    &::-webkit-scrollbar {
      display: none;
    }

    p,
    form {
      margin-bottom: 4rem;
    }

    form {
      width: fit-content;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.6);

      input {
        background: transparent;
        outline: none;
        border: none;
        width: 30rem;
        color: white;
      }

      button {
        text-transform: uppercase;
        background: transparent;
        outline: none;
        border: none;
        color: var(--accent-color);
        // font-weight: 500;
      }
    }
  }

  &__menu-button {
    --rotation: 0deg;
    background-color: transparent;
    border: none;
    outline: none;
    margin: 5rem 5rem 0 auto;
    transform: rotate(var(--rotation)) scale(1);
    transition: 0.6s $ease-out-expo;
    z-index: 4;

    &:hover {
      --rotation: -45deg;
      --background-scale: 1;
    }
  }
}
</style>
