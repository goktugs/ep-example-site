import React from "react";

export const MostSaleIcon = (props: { selected: boolean }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2H14V1C14 0.45 13.55 0 13 0H5C4.45 0 4 0.45 4 1V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9V16H5C4.45 16 4 16.45 4 17C4 17.55 4.45 18 5 18H13C13.55 18 14 17.55 14 17C14 16.45 13.55 16 13 16H10V12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z"
        fill={props.selected ? "#EAB74B" : " #8F8FA7"}
      />
    </svg>
  );
};
