'use client'

import 'keen-slider/keen-slider.min.css'
import styles from './slider.module.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

export default function Slider({sliderImages}){
    const [sliderRef, instanceRef] = useKeenSlider(
        {
          loop: true
        },
        [
          // add plugins here
        ]
      )

    return (
   
        <>
            <div ref={sliderRef} className={`${styles.slider} keen-slider`}>                
                {sliderImages.map((sliderImage,index) => (
                  <div key={index} className={`${styles.slide} keen-slider__slide`}>
                    <div className={styles.slider__img}>
                        <Image 
                        priority 
                        fill  
                        style={{
                          objectFit: 'cover'
                        }}
                        alt='image'
                        src={sliderImage}/>
                    </div>
                  </div>
                ))}                   
            </div>
        </>
    )
}