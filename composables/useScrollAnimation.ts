// composables/useScrollAnimation.ts
// Scroll animation composable
export const useScrollAnimation = () => {
  const elements = ref<Element[]>([])

  const registerElement = (element: Element) => {
    elements.value.push(element)
  }

  const checkScroll = () => {
    elements.value.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight * 0.85) {
        element.classList.add('animate-fade-in')
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', checkScroll)
    checkScroll() // Initial check
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })

  return {
    registerElement
  }
}