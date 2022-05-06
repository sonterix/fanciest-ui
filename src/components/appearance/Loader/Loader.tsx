import React from 'react'

import { arrayToClasslist, getColorClasses } from '../../../helpers'
import { LoaderProps } from './Loader.type'
import styles from './Loader.module.scss'

const Loader = ({
  layout,
  wrapperMaxWidth,
  wrapperMaxHeight,
  width,
  height,
  color,
  className,
  style,
  ...props
}: LoaderProps): JSX.Element => {
  const classes = arrayToClasslist([styles.Loader, ...getColorClasses(color, styles), className || ''])

  return (
    <div
      {...props}
      className={classes}
      style={{ ...(style || {}), minWidth: wrapperMaxWidth, minHeight: wrapperMaxHeight }}
    >
      {layout === 'ball' && (
        <svg
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="50" cy="23" r="13">
            <animate
              attributeName="cy"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
              keyTimes="0;0.5;1"
              values="23;77;23"
            />
          </circle>
        </svg>
      )}

      {layout === 'spinline' && (
        <svg
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.9166666666666666s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(30 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.8333333333333334s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(60 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.75s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(90 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.6666666666666666s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(120 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5833333333333334s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(150 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(180 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.4166666666666667s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(210 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.3333333333333333s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(240 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.25s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(270 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.16666666666666666s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(300 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.08333333333333333s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(330 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        </svg>
      )}

      {layout === 'spindot' && (
        <svg
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(80,50)">
            <g transform="rotate(0)">
              <circle cx="0" cy="0" r="6" fillOpacity="1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.875s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.875s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(71.21320343559643,71.21320343559643)">
            <g transform="rotate(45)">
              <circle cx="0" cy="0" r="6" fillOpacity="0.875">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.75s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.75s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(50,80)">
            <g transform="rotate(90)">
              <circle cx="0" cy="0" r="6" fillOpacity="0.75">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.625s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.625s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(28.786796564403577,71.21320343559643)">
            <g transform="rotate(135)">
              <circle cx="0" cy="0" r="6" fillOpacity="0.625">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(20,50.00000000000001)">
            <g transform="rotate(180)">
              <circle cx="0" cy="0" r="6" fillOpacity="0.5">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.375s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.375s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(28.78679656440357,28.786796564403577)">
            <g transform="rotate(225)">
              <circle cx="0" cy="0" r="6" fillOpacity="0.375">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.25s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.25s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(49.99999999999999,20)">
            <g transform="rotate(270)">
              <circle cx="0" cy="0" r="6" fillOpacity="0.25">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.125s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.125s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(71.21320343559643,28.78679656440357)">
            <g transform="rotate(315)">
              <circle cx="0" cy="0" r="6" fillOpacity="0.125">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="0s"
                  values="1.5 1.5;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="0s"
                />
              </circle>
            </g>
          </g>
        </svg>
      )}

      {layout === 'rolling' && (
        <svg
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            />
          </circle>
        </svg>
      )}

      {layout === 'dualring' && (
        <svg
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            r="32"
            strokeWidth="8"
            stroke="currentColor"
            strokeDasharray="50.26548245743669 50.26548245743669"
            fill="none"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            />
          </circle>
        </svg>
      )}

      {layout === 'ellipsis' && (
        <svg
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="84" cy="50" r="10">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.25s"
              calcMode="spline"
              keyTimes="0;1"
              values="10;0"
              keySplines="0 0.5 0.5 1"
              begin="0s"
            />
            <animate
              attributeName="fill"
              repeatCount="indefinite"
              dur="1s"
              calcMode="discrete"
              keyTimes="0;0.25;0.5;0.75;1"
              begin="0s"
            />
          </circle>
          <circle cx="16" cy="50" r="10">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="0s"
            />
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="0s"
            />
          </circle>
          <circle cx="50" cy="50" r="10">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.25s"
            />
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.25s"
            />
          </circle>
          <circle cx="84" cy="50" r="10">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.5s"
            />
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.5s"
            />
          </circle>
          <circle cx="16" cy="50" r="10">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.75s"
            />
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.75s"
            />
          </circle>
        </svg>
      )}

      {layout === 'pulse' && (
        <svg
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <rect x="17.5" y="30" width="15" height="40">
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="18;30;30"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.2s"
            />
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="64;40;40"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.2s"
            />
          </rect>
          <rect x="42.5" y="30" width="15" height="40">
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="20.999999999999996;30;30"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.1s"
            />
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="58.00000000000001;40;40"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.1s"
            />
          </rect>
          <rect x="67.5" y="30" width="15" height="40">
            <animate
              attributeName="y"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="20.999999999999996;30;30"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            />
            <animate
              attributeName="height"
              repeatCount="indefinite"
              dur="1s"
              calcMode="spline"
              keyTimes="0;0.5;1"
              values="58.00000000000001;40;40"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            />
          </rect>
        </svg>
      )}

      {layout === 'magnify' && (
        <svg
          style={{ width, height }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(50 50)">
            <g transform="scale(0.8)">
              <g transform="translate(-50 -50)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="-20 -20;20 -20;0 20;-20 -20"
                    keyTimes="0;0.33;0.66;1"
                  />
                  <path
                    fill="none"
                    d="M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406 3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282 12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282 c3.406-3.406 5.282-7.934 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033 49.007 26.158 44.19 26.158z"
                  />
                  <path d="M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352 2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20 44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447 24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571 74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429 74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282 7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      )}
    </div>
  )
}

Loader.defaultProps = {
  layout: 'ball',
  wrapperMaxWidth: 'none',
  wrapperMaxHeight: 'none',
  width: '60px',
  height: '60px',
  color: 'rose'
}

export default Loader
