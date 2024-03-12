import Image, { Props as ImageProps } from '@theme/IdealImage'
import React from 'react'
import styles from './styles.module.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function IdealImage({ img, alt, ...rest }: ImageProps) {
  return (
    <Zoom>
      <Image
        className={styles.idealImage}
        // @ts-expect-error: `shouldAutoDownload` is not in the type definition
        shouldAutoDownload={() => true}
        img={img}
        alt={alt}
        {...rest}
      />
    </Zoom>
  )
}
