import { ref, onMounted } from 'vue'

interface GPUAdapter {
  requestDevice(descriptor?: unknown): Promise<unknown>
}

interface GPU {
  requestAdapter(options?: { powerPreference?: string }): Promise<GPUAdapter | null>
}

interface NavigatorWithGPU {
  gpu?: GPU
}

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

    // 2. If user prefers reduced motion, skip WebGPU initialization entirely
    if (prefersReducedMotion.value) {
      isChecking.value = false
      isSupported.value = false
      shaderActive.value = false
      return
    }

    // 3. Native WebGPU check (zero dependency on the 2.7MB Shaders bundle)
    const nav = (typeof navigator !== 'undefined' ? (navigator as unknown as NavigatorWithGPU) : null)
    if (!nav || !nav.gpu) {
      isSupported.value = false
      shaderActive.value = false
      isChecking.value = false
      return
    }

    try {
      const adapter = await nav.gpu.requestAdapter({ powerPreference: 'high-performance' })
      if (!adapter) {
        isSupported.value = false
        shaderActive.value = false
      } else {
        isSupported.value = true
        shaderActive.value = !prefersReducedMotion.value
      }
    } catch (err) {
      console.warn('[Roa Soft Engine] WebGPU adapter probe failed:', err)
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
