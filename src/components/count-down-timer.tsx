'use client'

import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

type CountdownTimerProps = React.ComponentProps<'span'> & {
  /**
   * 목표 시점 (ISO 형식 또는 `dayjs`에서 지원하는 형식)
   */
  targetTime: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetTime,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = useState(dayjs.duration(0))

  useEffect(() => {
    const target = dayjs(targetTime)
    const updateTimer = () => {
      const now = dayjs()
      const diff = target.diff(now)
      if (diff <= 0) {
        setTimeLeft(dayjs.duration(0))
        return
      }
      setTimeLeft(dayjs.duration(diff))
    }

    updateTimer()
    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [targetTime])

  return (
    <span {...props}>
      {timeLeft.hours().toString().padStart(2, '0')}:
      {timeLeft.minutes().toString().padStart(2, '0')}:
      {timeLeft.seconds().toString().padStart(2, '0')}
    </span>
  )
}

export default CountdownTimer
