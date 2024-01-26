import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { OrderItem } from '../../OrderItem';
import { Container } from "./styles";


export function SliderContentMobile({ content }) {
    const [sliderRef] = useKeenSlider({
        mode: "free",
        slides: {
          perView: 3,
          spacing: 0,
        },
        breakpoints: {
            '(max-width: 650px)': {
                slides: {
                    perView: 3,
                },
            },
            '(max-width: 500px)': {
                slides: {
                    perView: 2,
                },
            },
          },
      })
    return (
        <Container>
            <h1>{content.category}</h1>

            <div ref={sliderRef} className="keen-slider">            
                {content.orders.map((order, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <OrderItem order={order} />
                    </div>
                ))}    
            </div>
        </Container>
        
    )
}