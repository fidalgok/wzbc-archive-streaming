import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  height: 4.2rem;
  width: 4.2rem;
  fill: #e6e8ec;

  .primary {
    fill: ${props => props.primary || 'var(--color-primary-5)'};
  }
  .primary-stroke {
    stroke: ${props => props.stroke || 'var(--color-primary-5)'};
  }
  .secondary {
    fill: ${props => props.secondary || 'var(--color-neutral-2)'};
  }
`;

export const WaveForm = props => (
  <SVG
    {...props}
    className={props.className || ''}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 27.79"
  >
    <path
      className="secondary"
      d="M2.34,10.74h0a.16.16,0,0,1,.16.15v6a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.16-.16v-6A.16.16,0,0,1,2.34,10.74Z"
    />
    <path
      className="secondary"
      d="M3.2,9.54h0a.16.16,0,0,1,.16.15V18.1a.16.16,0,0,1-.16.15h0A.16.16,0,0,1,3,18.1V9.69A.16.16,0,0,1,3.2,9.54Z"
    />
    <path
      className="secondary"
      d="M4.06,8.79h0a.16.16,0,0,1,.16.15v9.91a.16.16,0,0,1-.16.15h0a.16.16,0,0,1-.16-.15V8.94A.16.16,0,0,1,4.06,8.79Z"
    />
    <path
      className="secondary"
      d="M4.92,6.76h0a.16.16,0,0,1,.16.15v14a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.16-.16v-14A.16.16,0,0,1,4.92,6.76Z"
    />
    <path
      className="secondary"
      d="M5.78,8.71h0a.16.16,0,0,1,.16.16V18.92a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.16-.16V8.87A.16.16,0,0,1,5.78,8.71Z"
    />
    <path
      className="secondary"
      d="M6.64,9.54h0a.16.16,0,0,1,.16.15V18.1a.16.16,0,0,1-.16.15h0a.16.16,0,0,1-.16-.15V9.69A.16.16,0,0,1,6.64,9.54Z"
    />
    <path
      className="secondary"
      d="M7.5,10.74h0a.16.16,0,0,1,.16.15v6a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.16-.16v-6A.16.16,0,0,1,7.5,10.74Z"
    />
    <path
      className="secondary"
      d="M8.36,11.79h0a.16.16,0,0,1,.16.16v3.89a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.16-.16V12A.16.16,0,0,1,8.36,11.79Z"
    />
    <path
      className="secondary"
      d="M9.22,10.74h0a.16.16,0,0,1,.16.15v6a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.16-.16v-6A.16.16,0,0,1,9.22,10.74Z"
    />
    <path
      className="secondary"
      d="M10.08,8.18h0a.16.16,0,0,1,.16.16V19.45a.16.16,0,0,1-.16.15h0a.16.16,0,0,1-.16-.15V8.34A.16.16,0,0,1,10.08,8.18Z"
    />
    <path
      className="secondary"
      d="M10.94,5.1h0a.16.16,0,0,1,.16.16V22.53a.16.16,0,0,1-.16.15h0a.16.16,0,0,1-.16-.15V5.26A.16.16,0,0,1,10.94,5.1Z"
    />
    <path
      className="secondary"
      d="M11.8,6.31h0a.16.16,0,0,1,.16.15V21.33a.16.16,0,0,1-.16.15h0a.16.16,0,0,1-.16-.15V6.46A.16.16,0,0,1,11.8,6.31Z"
    />
    <path
      className="secondary"
      d="M12.66,8.18h0a.16.16,0,0,1,.16.16V19.45a.16.16,0,0,1-.16.15h0a.15.15,0,0,1-.15-.15V8.34A.16.16,0,0,1,12.66,8.18Z"
    />
    <path
      className="secondary"
      d="M13.52,9.54h0a.16.16,0,0,1,.16.15V18.1a.16.16,0,0,1-.16.15h0a.16.16,0,0,1-.16-.15V9.69A.16.16,0,0,1,13.52,9.54Z"
    />
    <path
      className="secondary"
      d="M14.38,10.74h0a.16.16,0,0,1,.16.15v6a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.16-.16v-6A.16.16,0,0,1,14.38,10.74Z"
    />
    <path
      className="secondary"
      d="M15.24,11.79h0a.16.16,0,0,1,.16.16v3.89a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.15-.16V12A.16.16,0,0,1,15.24,11.79Z"
    />
    <path
      className="secondary"
      d="M16.1,10.74h0a.16.16,0,0,1,.16.15v6a.16.16,0,0,1-.16.16h0a.16.16,0,0,1-.16-.16v-6A.16.16,0,0,1,16.1,10.74Z"
    />
    <path
      className="secondary"
      d="M17,9.54h0a.16.16,0,0,1,.16.15V18.1a.16.16,0,0,1-.16.15h0a.15.15,0,0,1-.15-.15V9.69A.15.15,0,0,1,17,9.54Z"
    />
    <path
      className="secondary"
      d="M17.82,8.18h0a.16.16,0,0,1,.16.16V19.45a.16.16,0,0,1-.16.15h0a.15.15,0,0,1-.15-.15V8.34A.15.15,0,0,1,17.82,8.18Z"
    />
    <path
      className="secondary"
      d="M18.68,9.54h0a.16.16,0,0,1,.16.15V18.1a.16.16,0,0,1-.16.15h0a.15.15,0,0,1-.15-.15V9.69A.15.15,0,0,1,18.68,9.54Z"
    />
    <rect
      className="secondary"
      x="19.39"
      y="11.79"
      width="0.31"
      height="4.21"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="20.3"
      y="10.74"
      width="0.31"
      height="6.31"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="21.16"
      y="9.54"
      width="0.31"
      height="8.71"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="22.02"
      y="8.79"
      width="0.31"
      height="10.22"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="22.88"
      y="6.76"
      width="0.31"
      height="14.27"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="23.74"
      y="8.71"
      width="0.31"
      height="10.37"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="24.6"
      y="9.54"
      width="0.31"
      height="8.71"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="25.46"
      y="10.74"
      width="0.31"
      height="6.31"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="26.32"
      y="11.79"
      width="0.31"
      height="4.21"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="27.18"
      y="10.74"
      width="0.31"
      height="6.31"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="28.04"
      y="8.18"
      width="0.31"
      height="11.42"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="28.9"
      y="5.1"
      width="0.31"
      height="17.58"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="29.76"
      y="6.31"
      width="0.31"
      height="15.18"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="30.62"
      y="8.18"
      width="0.31"
      height="11.42"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="31.48"
      y="9.54"
      width="0.31"
      height="8.71"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="32.34"
      y="10.74"
      width="0.31"
      height="6.31"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="33.2"
      y="11.79"
      width="0.31"
      height="4.21"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="34.06"
      y="10.74"
      width="0.31"
      height="6.31"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="34.92"
      y="9.54"
      width="0.31"
      height="8.71"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="35.78"
      y="8.18"
      width="0.31"
      height="11.42"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="36.65"
      y="9.54"
      width="0.31"
      height="8.71"
      rx="0.16"
    />
    <rect
      className="secondary"
      x="37.5"
      y="11.79"
      width="0.31"
      height="4.21"
      rx="0.16"
    />
    <line
      className="primary-stroke"
      x1="23.04"
      y1="1.87"
      x2="23.04"
      y2="25.91"
    />
  </SVG>
);
export const Play = props => (
  <SVG
    {...props}
    className={props.className || ''}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 27.79"
  >
    <path className="secondary" d="M10.59,1.89v24l18.82-12Z" />
  </SVG>
);
export const Record = props => (
  <SVG
    {...props}
    className={props.className || ''}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 27.79"
  >
    <circle className="secondary" cx="20" cy="13.89" r="12" />
    <circle className="primary" cx="20" cy="13.89" r="10.91" />
  </SVG>
);
export const Pause = props => (
  <SVG
    {...props}
    className={props.className || ''}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 27.79"
  >
    <path
      className="secondary"
      d="M15.71,25.89H10.58A2.58,2.58,0,0,1,8,23.32V4.47a2.6,2.6,0,0,1,2.58-2.58h5.13a2.59,2.59,0,0,1,2.58,2.58V23.33A2.58,2.58,0,0,1,15.71,25.89ZM32,23.33V4.47a2.58,2.58,0,0,0-2.57-2.58H24.29a2.6,2.6,0,0,0-2.58,2.58V23.33a2.58,2.58,0,0,0,2.58,2.56h5.14A2.56,2.56,0,0,0,32,23.33Z"
    />
  </SVG>
);

export const Rewind = ({ className, ...props }) => (
  <SVG
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      className="secondary"
      d="M22 5a1 1 0 0 0-1.5-.86l-12 7a1 1 0 0 0 0 1.72l12 7A1 1 0 0 0 22 19V5z"
    />
    <path
      className="primary"
      d="M15 5a1 1 0 0 0-1.5-.86l-12 7a1 1 0 0 0 0 1.72l12 7A1 1 0 0 0 15 19V5z"
    />
  </SVG>
);
export const FastForward = ({ className, ...props }) => (
  <SVG
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      className="secondary"
      d="M1 5a1 1 0 0 1 1.5-.86l12 7a1 1 0 0 1 0 1.72l-12 7A1 1 0 0 1 1 19V5z"
    />
    <path
      className="primary"
      d="M9 5a1 1 0 0 1 1.5-.86l12 7a1 1 0 0 1 0 1.72l-12 7A1 1 0 0 1 9 19V5z"
    />
  </SVG>
);
