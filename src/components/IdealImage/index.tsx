import React from 'react';
import Image from '@theme/IdealImage';
import styles from './styles.module.css'

export default function IdealImage({ img, alt }) {
  return (
    <Image className={styles.idealImage} shouldAutoDownload={() => true} img={img} alt={alt} />
  );
}
