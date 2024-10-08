import React from 'react'
import { Text, View, type TextProps } from '@tamagui/core'
import type { ViewProps } from 'tamagui'

export function Logo({
  size = 1,
  animate,
  ...props
}: ViewProps & { size?: number; animate?: boolean }) {
  const scaleDownBy = 0.12 * size

  return (
    <View
      pos="relative"
      x={5 * size}
      mt={0 * size}
      mb={-6 * size}
      transformOrigin="left top"
      {...props}
    >
      <svg
        width={707 * scaleDownBy * 0.5}
        height={738 * scaleDownBy * 0.5}
        viewBox="0 0 707 738"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Group Copy</title>
        <defs>
          <filter
            x="-76.4%"
            y="-66.4%"
            width="252.7%"
            height="232.9%"
            filterUnits="objectBoundingBox"
            id="filter-1"
          >
            <feGaussianBlur stdDeviation="18" in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter
            x="-8.7%"
            y="-30.5%"
            width="117.5%"
            height="160.9%"
            filterUnits="objectBoundingBox"
            id="filter-2"
          >
            <feGaussianBlur stdDeviation="13" in="SourceGraphic"></feGaussianBlur>
          </filter>
          <filter
            x="-18.6%"
            y="-17.6%"
            width="137.3%"
            height="135.2%"
            filterUnits="objectBoundingBox"
            id="filter-3"
          >
            <feGaussianBlur stdDeviation="32" in="SourceGraphic"></feGaussianBlur>
          </filter>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Artboard" transform="translate(-250, -219)">
            <g id="Group-Copy" transform="translate(271, 271)">
              <circle id="Oval" fill="#F5CA05" cx="295" cy="295" r="295"></circle>
              <circle id="Oval" fill="#FFFFFF" cx="311" cy="230" r="110"></circle>
              <path
                d="M299.32294,286 L339.7951,281.25 C342.598367,279.138889 344,276.324074 344,272.805556 C344,269.287037 342.247958,267 338.743875,265.944444 L329.282851,265.944444 L321.398664,178.333333 C320.347439,173.055556 318.244989,172 312.988864,172 C307.732739,172 305.63029,173.583333 304.053452,175.166667 C302.476615,176.75 302.476615,182.555556 301.951002,183.611111 C301.42539,184.666667 291.438753,188.361111 287.759465,189.944444 C284.080178,191.527778 284.080178,201.555556 287.759465,203.666667 C291.438753,205.777778 298.271715,202.083333 301.42539,204.722222 L307.207127,267.527778 C299.339925,268.871363 294.784617,270.102844 293.541203,271.222222 C291.676081,272.901289 290.91314,274.388889 291.438753,279.666667 C291.789161,283.185185 294.417223,285.296296 299.32294,286 Z"
                id="Path-7"
                fill="#000000"
              ></path>
              <ellipse
                id="Oval"
                fill="#FFFFFF"
                opacity="0.453031994"
                filter="url(#filter-1)"
                transform="translate(200.0089, 137.737) rotate(46) translate(-200.0089, -137.737)"
                cx="200.008945"
                cy="137.73703"
                rx="35.3577818"
                ry="40.6350626"
              ></ellipse>
              <path
                d="M521,138 C482.503431,98.2196247 448.723549,71.1799277 419.660355,56.880909 C376.065564,35.432381 347.543959,28.4841486 295.097041,26.8563104 C242.650124,25.2284722 225.598176,37.942459 183.728994,56.880909 C155.816206,69.5065424 119.573208,92.6834255 75,126.411558 C102.798028,89.5392443 133.411045,63.0262947 166.839053,46.8727095 C216.981065,22.6423316 259.733728,10 295.097041,10 C330.460355,10 373.740828,20.0085949 428.633136,46.8727095 C465.228008,64.7821192 496.016963,95.1578827 521,138 Z"
                id="Path-8"
                fill="#FFFFFF"
                opacity="0.773065476"
                filter="url(#filter-2)"
              ></path>
              <path
                d="M361.057245,44 C431.694309,123.939704 467.935264,174.984191 469.780109,197.133462 C472.547375,230.357369 482.654123,254.819372 459.752272,321.224371 C436.85042,387.629371 415.418677,407.823985 383.224042,440.562863 C361.760952,462.388781 259.019605,478.230174 75,488.087041 C207.883501,556.029014 286.171,590 309.862498,590 C333.553996,590 368.739389,581.727273 415.418677,565.181818 C481.196175,535.021945 525.881624,499.994866 549.475024,460.10058 C584.865123,400.259152 591.955643,340.867492 589.586372,292.181818 C587.2171,243.496144 582.366118,196.314838 555.280613,172.31528 C537.223611,156.315576 472.482488,113.543815 361.057245,44 Z"
                id="Path-9"
                fill="#000000"
                opacity="0.0963076637"
                filter="url(#filter-3)"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </View>
  )
}
