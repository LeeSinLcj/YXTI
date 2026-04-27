import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import './style.css'
import App from './App.vue'
import router from './router'
import { initI18n } from './i18n'

// iOS Safari viewport height fix
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
function setViewportHeight(): void {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

setViewportHeight()
window.addEventListener('resize', setViewportHeight)

initI18n()
const app = createApp(App)
app.use(createHead())

let revealObserver: IntersectionObserver | null = null
const getRevealObserver = () => {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      const intersecting = entries.filter(e => e.isIntersecting)
      
      intersecting.forEach(entry => {
        const el = entry.target as HTMLElement
        el.classList.add('reveal-active')
        revealObserver!.unobserve(el)
      })

      
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })
  }
  return revealObserver
}

app.directive('reveal', {
  mounted(el: HTMLElement) {
    el.classList.add('reveal-init')
    getRevealObserver().observe(el)
  },
  unmounted(el: HTMLElement) {
    if (revealObserver) {
      revealObserver.unobserve(el)
    }
  }
})

app.use(router).mount('#app')


