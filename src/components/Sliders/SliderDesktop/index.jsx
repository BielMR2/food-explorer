import { useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { OrderItem } from '../../OrderItem';
import { Container } from "./styles";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export function SliderContentDesktop({ content }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 4,
      spacing: 0,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 1700px)": {
        slides: {
          perView: 6,
        },
      },
      "(max-width: 1700px)": {
        slides: {
          perView: 4,
        },
      },
      "(max-width: 1340px)": {
        slides: {
          perView: 3,
        },
      },
      "(max-width: 1000px)": {
        slides: {
          perView: 2,
        },
      },
    },
  });
    return (
        <Container>
            <h1>{content.category}</h1>

            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">            
                    {content.orders.map((order, index) => (
                        <div className="keen-slider__slide" key={index}>
                            <OrderItem order={order} />
                        </div>
                    ))}    
                </div>


                <div className="bars-shadow styleArrows">
                    {loaded && instanceRef.current && (
                    <div className="styleArrows">
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                              }
                        />
                    </div>
                    )}
                </div>
                
            </div>

            
        </Container>
        
    )
}


function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
            <IoIosArrowBack size={30} />
        )}
        {!props.left && (
            <IoIosArrowForward size={30} />
        )}
        
      </svg>
    )
}