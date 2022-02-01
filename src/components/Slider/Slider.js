import React, { useState, useEffect } from "react"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import "./Slider.css"
const Slider = ({ images }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, images])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)

    return () => {
      clearInterval(slider)
    }
  }, [index])
  return (
    <div className="section">
      <div className="section-center">
        {images.map((image, indexImage) => {
          let position = "nextSlide"
          if (indexImage === index) {
            position = "aciveSlide"
          }
          if (
            indexImage === index - 1 ||
            (index === 0 && indexImage === images.length - 1)
          ) {
            position = "lastSlide"
          }
          return (
            <article className={position} key={indexImage}>
              <img src={image} alt="banner_img" className="banner-img" />
            </article>
          )
        })}
        <p className="prev" onClick={() => setIndex(index - 1)}>
          <ArrowBackIosIcon />
        </p>
        <p className="next" onClick={() => setIndex(index + 1)}>
          <ArrowForwardIosIcon />
        </p>
      </div>
    </div>
  )
}

export default Slider
