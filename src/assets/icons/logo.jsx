import * as React from "react";
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={40}
    viewBox="0 0 128 40"
    {...props}
  >
    <defs>
      <style>
        {
          "\r\n      .cls-1, .cls-2 {\r\n        fill: #0080ff;\r\n      }\r\n\r\n      .cls-1, .cls-3, .cls-6, .cls-7 {\r\n        fill-rule: evenodd;\r\n      }\r\n\r\n      .cls-3 {\r\n        fill: #097ef1;\r\n      }\r\n\r\n      .cls-4 {\r\n        fill: #3299ff;\r\n      }\r\n\r\n      .cls-5 {\r\n        fill: #fff;\r\n      }\r\n\r\n      .cls-6 {\r\n        fill: none;\r\n        stroke: #93b4d4;\r\n        stroke-width: 0.491px;\r\n      }\r\n\r\n      .cls-7 {\r\n        fill: #ff3f3f;\r\n      }\r\n\r\n      .cls-8 {\r\n        fill: #263a5b;\r\n      }\r\n\r\n      .cls-9 {\r\n        fill: #18d26b;\r\n      }\r\n    "
        }
      </style>
    </defs>
    <path
      id="Orbiter"
      className="cls-1"
      d="M50.3,23.152A7.586,7.586,0,0,0,51.6,25.831a5.74,5.74,0,0,0,2.2,1.724,7.507,7.507,0,0,0,3.135.606,6.416,6.416,0,0,0,5.212-2.2,9.536,9.536,0,0,0,1.84-6.278,13.134,13.134,0,0,0-.427-3.471,7.481,7.481,0,0,0-1.306-2.679,5.847,5.847,0,0,0-2.208-1.724,7.446,7.446,0,0,0-3.111-.606A6.407,6.407,0,0,0,51.7,13.4a9.576,9.576,0,0,0-1.828,6.278A13.134,13.134,0,0,0,50.3,23.152Zm3.942-7.746a3.08,3.08,0,0,1,2.683-1.363,3.12,3.12,0,0,1,1.686.431,3.24,3.24,0,0,1,1.116,1.2,6.1,6.1,0,0,1,.629,1.794,11.48,11.48,0,0,1,.2,2.213,7.563,7.563,0,0,1-.95,4.31,3.387,3.387,0,0,1-4.322.909,3.282,3.282,0,0,1-1.128-1.165,5.79,5.79,0,0,1-.653-1.782,11.257,11.257,0,0,1-.214-2.271A7.586,7.586,0,0,1,54.244,15.406Zm20.137,0.78a4.573,4.573,0,0,0-1.4-.256,2.813,2.813,0,0,0-1.615.466,3.189,3.189,0,0,0-1.092,1.328h-0.1l-0.356-1.538h-2.4V27.834H70.51V20.31a2.073,2.073,0,0,1,.748-1.107,2.2,2.2,0,0,1,1.389-.431,4.1,4.1,0,0,1,1.33.256Zm2.565,11.136a8.45,8.45,0,0,0,1.9.547,14.593,14.593,0,0,0,2.778.245,5.752,5.752,0,0,0,4.334-1.631,6.6,6.6,0,0,0,1.579-4.776,7.006,7.006,0,0,0-1.128-4.368,3.908,3.908,0,0,0-3.265-1.433,4.471,4.471,0,0,0-1.734.326,3.477,3.477,0,0,0-1.282.885H80.033V11.527H76.946v15.8ZM84.355,21.8a4.91,4.91,0,0,1-.653,2.854,2.216,2.216,0,0,1-1.912.9,5.971,5.971,0,0,1-.938-0.07,2.862,2.862,0,0,1-.819-0.256V20.146a2.7,2.7,0,0,1,.819-1.246,2.144,2.144,0,0,1,1.389-.431q2.113,0,2.114,3.331h0Zm6.768,6.034h3.087V16.186H91.122V27.834Zm0.059-13.8a2.051,2.051,0,0,0,1.413.454,2.242,2.242,0,0,0,1.46-.454,1.4,1.4,0,0,0,.558-1.13,1.468,1.468,0,0,0-.558-1.153,2.17,2.17,0,0,0-1.46-.478,1.988,1.988,0,0,0-1.413.478,1.522,1.522,0,0,0-.51,1.153A1.45,1.45,0,0,0,91.181,14.031Zm6.02,4.717H98.84v5.871a3.91,3.91,0,0,0,.772,2.714,3.154,3.154,0,0,0,2.411.827,7.256,7.256,0,0,0,1.733-.21,7.913,7.913,0,0,0,1.5-.513l-0.546-2.33a5.568,5.568,0,0,1-.772.28,3.154,3.154,0,0,1-.819.093,0.941,0.941,0,0,1-.938-0.524,4.362,4.362,0,0,1-.249-1.736V18.749h2.9V16.186h-2.9V13.134L98.84,14v2.19H97.2v2.563Zm19.072,6.1a5.087,5.087,0,0,1-2.911.885,2.976,2.976,0,0,1-2.26-.745,3.381,3.381,0,0,1-.769-2.213h7.1q0.119-.606.177-1.165a9.855,9.855,0,0,0,.06-1.048,5.572,5.572,0,0,0-.4-2.26,3.792,3.792,0,0,0-1.069-1.444,4.115,4.115,0,0,0-1.519-.769,6.666,6.666,0,0,0-1.758-.233,5.6,5.6,0,0,0-4.2,1.538,6.374,6.374,0,0,0-1.5,4.613,6.965,6.965,0,0,0,1.33,4.508,5.093,5.093,0,0,0,4.2,1.642,8.62,8.62,0,0,0,2.6-.384,6.082,6.082,0,0,0,1.936-.944Zm-1.865-5.894a2.9,2.9,0,0,1,.389,1.934H110.4a3.486,3.486,0,0,1,.7-1.9,2.165,2.165,0,0,1,1.783-.711A1.748,1.748,0,0,1,114.408,18.958ZM128,16.186a4.569,4.569,0,0,0-1.4-.256,2.809,2.809,0,0,0-1.614.466,3.185,3.185,0,0,0-1.093,1.328H123.8l-0.356-1.538h-2.4V27.834h3.087V20.31a2.066,2.066,0,0,1,.748-1.107,2.2,2.2,0,0,1,1.389-.431,4.1,4.1,0,0,1,1.33.256Z"
    />
    <circle className="cls-2" cx={21.359} cy={19.547} r={14.828} />
    <path
      id="Ellipse_1_copy_4"
      data-name="Ellipse 1 copy 4"
      className="cls-3"
      d="M13.9,12.138a10.65,10.65,0,0,1,14.938,0,10.355,10.355,0,0,1,0,14.765,10.65,10.65,0,0,1-14.937,0A10.355,10.355,0,0,1,13.9,12.138Z"
    />
    <circle
      id="Ellipse_1_copy_3"
      data-name="Ellipse 1 copy 3"
      className="cls-4"
      cx={21.359}
      cy={19.563}
      r={9.953}
    />
    <circle
      id="Ellipse_1_copy_2"
      data-name="Ellipse 1 copy 2"
      className="cls-5"
      cx={21.359}
      cy={19.547}
      r={6.016}
    />
    <path
      id="Ellipse_1_copy"
      data-name="Ellipse 1 copy"
      className="cls-6"
      d="M16.388,0.905A19.607,19.607,0,0,1,40.372,14.592,19.334,19.334,0,0,1,26.525,38.3,19.608,19.608,0,0,1,2.541,24.612,19.335,19.335,0,0,1,16.388.905Z"
    />
    <path
      className="cls-7"
      d="M1.716,13.654a2.318,2.318,0,0,1,2.835,1.619,2.287,2.287,0,0,1-1.637,2.8A2.318,2.318,0,0,1,.079,16.458,2.287,2.287,0,0,1,1.716,13.654Z"
    />
    <circle
      id="Ellipse_2_copy_2"
      data-name="Ellipse 2 copy 2"
      className="cls-8"
      cx={37.313}
      cy={8.406}
      r={1.719}
    />
    <circle
      id="Ellipse_2_copy"
      data-name="Ellipse 2 copy"
      className="cls-9"
      cx={27.297}
      cy={37.719}
      r={2.328}
    />
  </svg>
);
export default Logo;
