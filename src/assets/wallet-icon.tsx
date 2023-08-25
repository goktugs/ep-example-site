import React from "react";

export const WalletIcon = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      {...props}
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_473)">
        <path
          d="M7.5 12V6C7.5 5.175 8.1675 4.5 9 4.5H15.75V3.75C15.75 2.925 15.075 2.25 14.25 2.25H3.75C2.9175 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V13.5H9C8.1675 13.5 7.5 12.825 7.5 12ZM9.75 6C9.3375 6 9 6.3375 9 6.75V11.25C9 11.6625 9.3375 12 9.75 12H16.5V6H9.75ZM12 10.125C11.3775 10.125 10.875 9.6225 10.875 9C10.875 8.3775 11.3775 7.875 12 7.875C12.6225 7.875 13.125 8.3775 13.125 9C13.125 9.6225 12.6225 10.125 12 10.125Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_473">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
