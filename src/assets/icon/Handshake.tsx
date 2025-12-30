
const Handshake = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="48"
      viewBox="0 0 52 52"
      fill="none"
      className={className}
    >
      <path
        fill="#E5CFFB"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5471 0.599735C18.5459 0.0869799 24.0461 -0.443875 31.9786 0.599735C39.9111 1.64335 44.9571 6.05789 46.6388 11.3799C48.3204 16.7019 48.1984 27.1094 47.5788 32.3158C47.07 38.5475 43.4427 45.924 34.7683 47.2091C26.0939 48.4941 15.4335 48.1514 11.1572 46.6287C6.88095 45.1059 1.21772 41.8638 0.477232 32.7825C-0.263252 23.7012 -0.752563 11.5131 3.86834 6.57115C7.07241 2.76432 12.5484 1.11249 15.5471 0.599735Z"
      />
      <g filter="url(#filter0_d_883_27083)">
        <path
          d="M16.2282 17.1645L21.7714 13.0865C23.3137 11.9688 25.3145 11.6894 27.0854 12.3603L35.9432 15.6C36.5073 15.8186 37.1081 15.9323 37.7148 15.9354H39.2005C39.6003 15.9354 40 16.2702 40 16.6617V27.2197C40 27.6105 39.6576 28.0012 39.2005 28.0012H37.257C36.9712 28.0012 36.6861 28.1133 36.5142 28.2814L36.1144 28.6161C36.0005 28.7282 35.8286 28.6721 35.7713 28.5608L25.4284 16.3816C25.1426 16.0461 24.6856 15.9901 24.3431 16.2142L19.6001 18.7837C18.6287 19.2865 17.5427 19.3425 16.514 18.951C15.9996 18.7276 15.7145 18.1134 15.9423 17.6106C15.9996 17.3872 16.1143 17.2759 16.2282 17.1645Z"
          fill="url(#paint0_linear_883_27083)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_883_27083"
          x="4"
          y="8"
          width="48"
          height="40"
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
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.713726 0 0 0 0 0.333333 0 0 0 0 0.854902 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_883_27083"
          />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_883_27083" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_883_27083"
          x1="56"
          y1="24"
          x2="32.96"
          y2="-6.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A1C71" />
          <stop offset="1" stopColor="#B655DA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Handshake;
