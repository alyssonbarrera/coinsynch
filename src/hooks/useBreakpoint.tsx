import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

type BreakpointProps = {
  isAbove768: boolean
  isBelow768: boolean
  isAbove1280: boolean
}

export function useBreakpoint(): BreakpointProps {
  const [isAbove768, setIsAbove768] = useState(false)
  const [isBelow768, setIsBelow768] = useState(false)
  const [isAbove1280, setIsAbove1280] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsAbove768(window.innerWidth >= 768)
      setIsBelow768(window.innerWidth < 768)
      setIsAbove1280(window.innerWidth >= 1280)
    }

    const debouncedHandleResize = debounce(handleResize, 200)

    handleResize()

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return {
    isAbove768,
    isBelow768,
    isAbove1280,
  }
}
