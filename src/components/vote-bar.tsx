import React from 'react'

type VoteBarProps = {
  votesFor: number
  votesAgainst: number
}

const VoteBar: React.FC<VoteBarProps> = ({ votesFor, votesAgainst }) => {
  const totalVotes = votesFor + votesAgainst
  const forPercentage = (votesFor / totalVotes) * 100
  const againstPercentage = (votesAgainst / totalVotes) * 100

  return (
    <div className="relative">
      <div className="w-full h-12 bg-[#C0554F] rounded-full overflow-hidden">
        <div
          className="bg-[#3A40D8] h-full"
          style={{ width: `${forPercentage}%` }}
        />
        <div
          className="bg-red-500 h-full"
          style={{ width: `${againstPercentage}%` }}
        />
      </div>
      <div
        className="absolute -top-24  font-bold text-white"
        style={{
          left: `calc(${forPercentage}% + 8px)`,
          transform: 'translateX(-50%)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
        >
          <path
            d="M16.1562 9.2366C16.9107 9.53238 16.9107 10.6001 16.1562 10.8959L2.34423 16.3107L2.34424 3.82178L16.1562 9.2366Z"
            fill="url(#paint0_linear_1331_5509)"
          />
          <path
            d="M1.72022 20.7431L1.72021 2.43311"
            stroke="#F1B414"
            strokeWidth="1.80219"
          />
          <ellipse
            cx="1.73531"
            cy="1.59016"
            rx="1.61324"
            ry="1.59016"
            fill="url(#paint1_linear_1331_5509)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1331_5509"
              x1="2.29632"
              y1="3.85708"
              x2="11.8549"
              y2="11.6191"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9254" />
              <stop offset="1" stopColor="#F15533" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1331_5509"
              x1="0.854694"
              y1="0.138799"
              x2="2.56305"
              y2="3.0497"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC327" />
              <stop offset="0.186508" stopColor="#FFD874" />
              <stop offset="1" stopColor="#F1B414" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default VoteBar
