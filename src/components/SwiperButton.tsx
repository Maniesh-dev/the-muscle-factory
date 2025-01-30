import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useSwiper } from 'swiper/react'

interface Props {
  boxStyles: string,
  btnStyles: string,
}

const SwiperButton = ({boxStyles, btnStyles}: Props) => {
  const swiper = useSwiper()
  return (
    <div className={`${boxStyles}`}>
      <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <MdKeyboardArrowLeft />
      </button>
      <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
        <MdKeyboardArrowRight />
      </button>
    </div>
  )
}

export default SwiperButton