type IconProps = {
  size?: number;
  color?: string;
};

function Icon({ size, color = "#000042" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 270 270"
    >
      <path
        fill={color}
        d="M182 150.867v-9.807l-5.482 1.308-1.774-1.308 2.58-1.634-11.931.98-3.709 3.433-5.804-8.826-4.353-5.394 2.741-12.421-7.256-2.288-11.286-9.807-9.997-11.277L121.698 85l-2.902 3.105 2.902 1.798-.967 2.942-1.935 4.576.806 4.74h-1.612l-2.419-3.922h-6.127l-1.128 3.922-2.258 2.288-9.19-2.288H90.74L88 106.574l3.225 5.721L88 118.342l.806 2.125-.806 1.307 6.288-1.961 5.805.654 2.257 4.086 1.935-.818 2.418 1.471 5.16-3.432 3.708 1.144 3.225 1.635.806 3.595 5.16 1.471 19.187-.49 3.063 14.71L140.724 161 182 150.867z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10"
        d="M213.75 185.625H56.25m157.5 0c6.213 0 11.25-5.037 11.25-11.25V73.125c0-6.213-5.037-11.25-11.25-11.25H180m33.75 123.75h14.062c7.768 0 14.063 6.295 14.063 14.062 0 7.767-6.295 14.063-14.063 14.063H135m-78.75-28.125c-6.213 0-11.25-5.037-11.25-11.25V73.125c0-6.213 5.037-11.25 11.25-11.25H135m-78.75 123.75H42.187c-7.766 0-14.062 6.295-14.062 14.062 0 7.767 6.296 14.063 14.063 14.063H78.75"
      ></path>
    </svg>
  );
}

export default Icon;
