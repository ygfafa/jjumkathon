'use client'

import dayjs from 'dayjs'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  YAxis,
} from 'recharts'

const generateExchangeRateData = () => {
  const data = []
  const baseDate = new Date()
  for (let i = 0; i < 30; i++) {
    const date = new Date(baseDate)
    date.setDate(baseDate.getDate() - (29 - i)) // 30일 전부터 오늘까지
    const rate = Math.random() * (1300 - 1100) + 1100 // 1100 ~ 1300 사이의 랜덤값
    data.push({
      date: date.toISOString().split('T')[0], // YYYY-MM-DD 형식
      rate: parseFloat(rate.toFixed(2)), // 소수점 둘째 자리까지
    })
  }
  return data
}

const data = generateExchangeRateData()

const CustomTooltip = (data: TooltipProps<number, string>) => {
  if (data.active && data.payload && data.payload.length) {
    return (
      <div className="px-12 py-6 bg-gray-900 text-white rounded-8 text-10">
        <div>
          {dayjs(data.payload[0].payload.date as string).format('YYYY.MM.DD')}{' '}
          기준
        </div>
        <div>{Number(data.payload[0].payload.rate).toLocaleString()}원</div>
      </div>
    )
  }
  return null
}

const Recent30DaysChart = () => {
  return (
    <div className="w-full h-[200px] border-t border-dashed">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C2DBFF" stopOpacity={1} />
              <stop
                offset="100%"
                stopColor="rgba(255, 255, 255, 0)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <YAxis domain={[0, (max: number) => max + 500]} width={0} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Area
            dataKey="rate"
            stroke="#007bff"
            fill="url(#bg)" // 그라디언트 적용
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Recent30DaysChart
