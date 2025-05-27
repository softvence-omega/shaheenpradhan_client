const User = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="47"
      viewBox="0 0 44 47"
      fill="none"
      className={`${className}`}
    >
      <g filter="url(#filter0_d_1123_5864)">
        <path
          d="M16.627 4C21.4784 4 25.412 7.9328 25.4121 12.7842C25.4121 15.9375 23.7492 18.7015 21.2539 20.251C22.05 20.5647 22.8052 20.9588 23.5127 21.4199C20.4683 22.4424 18.2744 25.3172 18.2744 28.7061C18.2745 31.1566 19.4227 33.3377 21.209 34.7451H6.74512C5.22904 34.7451 4 33.5161 4 32C4 26.6609 7.31327 22.095 11.9961 20.248C9.50336 18.698 7.84277 15.9355 7.84277 12.7842C7.84285 7.93292 11.7757 4.0002 16.627 4ZM25.9609 22.667C29.2963 22.667 32 25.3707 32 28.7061C32 32.0413 29.2962 34.7451 25.9609 34.7451C22.6256 34.7451 19.9219 32.0414 19.9219 28.7061C19.9219 25.3707 22.6256 22.667 25.9609 22.667Z"
          fill="url(#paint0_linear_1123_5864)"
        />
      </g>
      <path
        d="M27.9295 26.2823C28.3583 25.8535 29.0536 25.8535 29.4824 26.2823C29.8886 26.6885 29.91 27.3339 29.5465 27.7653L29.4824 27.8352L26.1883 31.1293C25.782 31.5355 25.1367 31.5569 24.7053 31.1934L24.6354 31.1293L22.9884 29.4822C22.5595 29.0534 22.5595 28.3582 22.9884 27.9294C23.3946 27.5231 24.04 27.5017 24.4714 27.8652L24.5412 27.9294L25.4118 28.7997L27.9295 26.2823Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1123_5864"
          x="0"
          y="0"
          width="44"
          height="46.7451"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            values="0 0 0 0 1 0 0 0 0 0.701961 0 0 0 0 0.101961 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1123_5864"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1123_5864"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1123_5864"
          x1="46"
          y1="19.3726"
          x2="15.3889"
          y2="-8.50542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB31A" />
          <stop offset="1" stop-color="#FFD86B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default User;
