
const Camera = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="47"
      viewBox="0 0 44 47"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_883_27127)">
        <path
          d="M9.59996 11.8C9.59996 10.4746 10.6745 9.40005 12 9.40005C13.3254 9.40005 14.4 10.4746 14.4 11.8C14.4 13.1255 13.3254 14.2 12 14.2C10.6745 14.2 9.59996 13.1255 9.59996 11.8Z"
          fill="url(#paint0_linear_883_27127)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.68656 3.4854C8.97894 3.01759 9.49169 2.7334 10.0434 2.7334H13.9566C14.5082 2.7334 15.021 3.01759 15.3134 3.4854L16.1767 4.86673H18.9333C20.2588 4.86673 21.3333 5.94125 21.3333 7.26673V17.1334C21.3333 18.4589 20.2588 19.5334 18.9333 19.5334H5.06663C3.74114 19.5334 2.66663 18.4589 2.66663 17.1334V7.26673C2.66663 5.94125 3.74114 4.86673 5.06663 4.86673H7.82323L8.68656 3.4854ZM12 7.80005C9.79082 7.80005 7.99996 9.59091 7.99996 11.8C7.99996 14.0092 9.79082 15.8 12 15.8C14.2091 15.8 16 14.0092 16 11.8C16 9.59091 14.2091 7.80005 12 7.80005Z"
          fill="url(#paint1_linear_883_27127)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_883_27127"
          x="-0.0000407696"
          y="0.0667317"
          width="29.3333"
          height="27.4665"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.66667" dy="2.66667" />
          <feGaussianBlur stdDeviation="2.66667" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.701961 0 0 0 0 0.101961 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_883_27127"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_883_27127"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_883_27127"
          x1="30.6666"
          y1="11.1334"
          x2="13.9594"
          y2="-7.43014"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB31A" />
          <stop offset="1" stopColor="#FFD86B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_883_27127"
          x1="30.6666"
          y1="11.1334"
          x2="13.9594"
          y2="-7.43014"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB31A" />
          <stop offset="1" stopColor="#FFD86B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Camera;
