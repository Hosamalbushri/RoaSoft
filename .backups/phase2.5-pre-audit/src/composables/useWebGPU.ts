import { ref, onMounted } from 'vue'
import { getWebGPUSupport, isWebGPUSupported } from 'shaders/vue'

export function useWebGPU() {
  const isSupported = ref<boolean>(false)
  const isChecking = ref<boolean>(true)
  const prefersReducedMotion = ref<boolean>(false)
  const shaderActive = ref<boolean>(false)

  onMounted(async () => {
    // 1. Check for reduced motion preference first
    if (typeof window !== 'undefined') {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      prefersReducedMotion.value = motionQuery.matches

      motionQuery.addEventListener('change', (e) => {
        prefersReducedMotion.value = e.matches
        shaderActive.value = isSupported.value && !e.matches
      })
    }

    // 2. If user prefers reduced motion, skip WebGPU initialization immediately
    if (prefersReducedMotion.value) {
      isChecking.value = false
      isSupported.value = false
      shaderActive.value = false
      return
    }

    // 3. Proactive WebGPU check via Shaders API
    try {
      const syncCheck = isWebGPUSupported()
      if (!syncCheck) {
        isSupported.value = false
        shaderActive.value = false
        isChecking.value = false
        return
      }

      const asyncSupport = await getWebGPUSupport()
      isSupported.value = !!asyncSupport.supported
      shaderActive.value = isSupported.value && !prefersReducedMotion.value
    } catch (err) {
      console.warn('[Roa Soft Engine] WebGPU adapter check returned unsupported:', err)
      isSupported.value = false
      shaderActive.value = false
    } finally {
      isChecking.value = false
    }
  })

  const markUnavailable = () => {
    shaderActive.value = false
    isSupported.value = false
  }

  return {
    isSupported,
    isChecking,
    prefersReducedMotion,
    shaderActive,
    markUnavailable,
  }
}

