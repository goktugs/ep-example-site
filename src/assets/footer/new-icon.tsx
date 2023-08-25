import React from "react";

export const NewIcon = (props: { selected: boolean }) => {
  console.log(props);
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5056 3.55999C11.8696 2.52999 11.1427 1.56999 10.325 0.709989C10.007 0.369989 9.47091 0.689989 9.56177 1.16999C9.7344 2.10999 9.91612 3.34999 9.91612 4.45999C9.91612 6.51999 8.68952 8.18999 6.81783 8.18999C5.41861 8.18999 4.27379 7.25999 3.77407 5.92999C3.68321 5.72999 3.64686 5.60999 3.59235 5.38999C3.4924 4.96999 2.99268 4.83999 2.77462 5.20999C2.61107 5.47999 2.45661 5.74999 2.31124 6.03999C1.23002 8.07999 0.612183 10.46 0.612183 13C0.612183 17.42 3.86492 21 7.88088 21C11.8968 21 15.1496 17.42 15.1496 13C15.1496 9.50999 14.1683 6.26999 12.5056 3.55999ZM7.61739 18C6.0001 18 4.69174 16.6 4.69174 14.86C4.69174 13.24 5.64576 12.1 7.24487 11.74C8.58049 11.44 9.95246 10.81 10.9065 9.81999C11.1609 9.55999 11.5788 9.67999 11.6515 10.05C11.8605 11.07 11.9695 12.13 11.9695 13.2C11.9786 15.85 10.0251 18 7.61739 18Z"
        fill={props.selected ? "#EAB74B" : " #8F8FA7"}
      />
    </svg>
  );
};
