import { useEffect, useState } from 'react'

const useCountdown = (initialCount: number) => {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    if (count <= 0) return

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [count])

  return count
}

export default useCountdown
