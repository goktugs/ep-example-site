import React from "react";

export const TrFlagIcon = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_460"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" rx="10" fill="#25262B" />
      </mask>
      <g mask="url(#mask0_1_460)">
        <path
          d="M10 22.5C16.9036 22.5 22.5 16.9036 22.5 10C22.5 3.09644 16.9036 -2.5 10 -2.5C3.09644 -2.5 -2.5 3.09644 -2.5 10C-2.5 16.9036 3.09644 22.5 10 22.5Z"
          fill="#D80027"
        />
      </g>
      <path
        d="M12.3127 8.1723L13.1332 9.30297L14.462 8.87211L13.6402 10.0018L14.4606 11.1324L13.1323 10.6999L12.3105 11.8296L12.3114 10.4327L10.983 10.0002L12.3119 9.56933L12.3127 8.1723Z"
        fill="#F0F0F0"
      />
      <path
        d="M10.073 12.8262C8.51223 12.8262 7.24691 11.5609 7.24691 10.0001C7.24691 8.43932 8.51223 7.17401 10.073 7.17401C10.5596 7.17401 11.0175 7.29709 11.4173 7.5137C10.7902 6.90034 9.93246 6.52182 8.98605 6.52182C7.06504 6.52182 5.50781 8.07909 5.50781 10.0001C5.50781 11.921 7.06508 13.4783 8.98605 13.4783C9.93254 13.4783 10.7902 13.0997 11.4173 12.4864C11.0175 12.7031 10.5596 12.8262 10.073 12.8262Z"
        fill="#F0F0F0"
      />
    </svg>
  );
};