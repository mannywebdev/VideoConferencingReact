import React from "react";

export const Mic = (width: string, height: string, color: string, style: string): JSX.Element => {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 28">
      <path fill={color} d="M14 2a4.5 4.5 0 0 0-4.5 4.5v8a4.5 4.5 0 1 0 9 0v-8A4.5 4.5 0 0 0 14 2Zm-3 4.5a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0v-8Zm-3.5 7.25a.75.75 0 1 0-1.5 0v.75a8 8 0 0 0 7.25 7.965v2.785a.75.75 0 0 0 1.5 0v-2.785A8 8 0 0 0 22 14.5v-.75a.75.75 0 1 0-1.5 0v.75a6.5 6.5 0 1 1-13 0v-.75Z" />
    </svg>
  );
};

export const MicOff = (width: string, height: string, color: string, style: string): JSX.Element => {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 28">
      <path fill={color} d="M9.5 10.56L2.22 3.28a.75.75 0 1 1 1.06-1.06l22.5 22.5a.75.75 0 0 1-1.06 1.06l-5.35-5.35a7.969 7.969 0 0 1-4.62 2.035v2.785a.75.75 0 0 1-1.5 0v-2.785A8 8 0 0 1 6 14.5v-.75a.75.75 0 0 1 1.5 0v.75a6.5 6.5 0 0 0 10.807 4.868L16.89 17.95A4.5 4.5 0 0 1 9.5 14.5v-3.94Zm6.322 6.323L11 12.061V14.5a3 3 0 0 0 4.822 2.383ZM9.503 6.322L11 7.818V6.5a3 3 0 1 1 6 0v7.318l1.437 1.437c.041-.245.063-.498.063-.755v-8a4.5 4.5 0 0 0-8.997-.178Zm10.55 10.55l1.138 1.137c.518-1.06.809-2.25.809-3.51v-.748a.75.75 0 1 0-1.5 0v.749c0 .837-.158 1.637-.446 2.372Z" />
    </svg>
  );
};

export const Video = (width: string, height: string, color: string, style: string): JSX.Element => {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 28">
      <path fill={color} d="M5.25 5.5A3.25 3.25 0 0 0 2 8.75v10.5a3.25 3.25 0 0 0 3.25 3.25h10.502a3.25 3.25 0 0 0 3.25-3.25v-1.58l4.541 3.112a1.25 1.25 0 0 0 1.957-1.03V8.247a1.25 1.25 0 0 0-1.956-1.03l-4.542 3.11V8.75a3.25 3.25 0 0 0-3.25-3.25H5.25Zm13.752 10.352v-3.707L24 8.723v10.554l-4.998-3.425Zm-1.5-7.102v10.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75V8.75C3.5 7.784 4.284 7 5.25 7h10.502c.967 0 1.75.784 1.75 1.75Z" />
    </svg>
  );
};

export const VideoOff = (width: string, height: string, color: string, style: string): JSX.Element => {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 28">
      <path fill={color} d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.3 2.302A3.251 3.251 0 0 0 2 8.75v10.5a3.25 3.25 0 0 0 3.25 3.25h10.502a3.251 3.251 0 0 0 3.168-2.52l5.8 5.8a.75.75 0 0 0 1.06-1.06L3.28 2.22Zm14.222 16.343v.687a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75V8.75C3.5 7.784 4.284 7 5.25 7h.69l11.562 11.563ZM8.682 5.5l1.5 1.5h5.57c.967 0 1.75.784 1.75 1.75v5.57l1.5 1.5v-3.675l5-3.419v10.55l-4.9-3.355l5.08 5.08c.674.036 1.32-.49 1.32-1.25V8.252a1.25 1.25 0 0 0-1.956-1.031l-4.544 3.107V8.75a3.25 3.25 0 0 0-3.25-3.25h-7.07Z" />
    </svg>
  );
};

export const NewMeet = (width: string, height: string, color: string, style: string): JSX.Element => {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
      <path fill={color} d="M18 15h-4v-4h-2v4H8v2h4v4h2v-4h4v-2z" />
      <path fill={color} d="M21 26H4a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2h17a2.002 2.002 0 0 1 2 2v4.057l5.419-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.581.814L23 19.944V24a2.002 2.002 0 0 1-2 2ZM4 8v16.001L21 24v-6a1 1 0 0 1 1.581-.814L28 21.056V10.944l-5.419 3.87A1 1 0 0 1 21 14V8Z" />
    </svg>
  );
};

export const Keyboard = (width: string, height: string, color: string, style: string): JSX.Element => {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <path fill={color} d="M19 10h-2V8h2m0 5h-2v-2h2m-3-1h-2V8h2m0 5h-2v-2h2m0 6H8v-2h8m-9-5H5V8h2m0 5H5v-2h2m1 0h2v2H8m0-5h2v2H8m3 1h2v2h-2m0-5h2v2h-2m9-5H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
    </svg>
  );
};

export const LeftArrow = (width: string, height: string, color: string, style: string): JSX.Element => {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1024 1024">
      <path fill={color} d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z" />
    </svg>
  );
};

export const RightArrow = (width: string, height: string, color: string, style: string): JSX.Element => {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 1024 1024">
      <path fill={color} d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z" />
    </svg>
  );
};
