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

type ChartItem = {
  date: string
  rate: number
}
type Recent30DaysChartProps = {
  data: ChartItem[]
}
const Recent30DaysChart = ({ data }: Recent30DaysChartProps) => {
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
