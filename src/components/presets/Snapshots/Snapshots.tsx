// @ts-ignore
import React, { useMemo } from 'react'

import styles from './Snapshots.module.scss'

type SnapshotsProps = {
  [key: string]: any
  images: Array<string>
  imageSize?: string | number
  borderRadius?: string | number
  shift?: number
}

const Snapshots = ({
  images,
  imageSize,
  borderRadius,
  shift,
  ...props
}: SnapshotsProps): JSX.Element => (
  <div className={`mu-snapshots ${styles.Snapshots}`} {...props}>
    {images.map((img, index) => (
      <img
        key={`img-${index}`}
        src={img}
        alt={`img-${index}`}
        style={{
          marginLeft: `-${shift}px`,
          width: imageSize,
          height: imageSize,
          borderRadius,
          zIndex: index + 1
        }}
      />
    ))}
  </div>
)

Snapshots.defaultProps = {
  imageSize: 34,
  borderRadius: 12,
  shift: 8
}

export default Snapshots
