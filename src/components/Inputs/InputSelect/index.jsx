import { InputSelectConfig } from "../../../../configs";
import { Container } from "./styles";

export function InputSelect({ options = InputSelectConfig, title }) {
    return( 
        <Container>
            {title && <p className="roboto_small_regular">{title}</p>}
            <select className="roboto_smaller_regular">
                {options.map((option, index) => (
                    <option key={index} className="roboto_smaller_regular" value={option} >
                        {option}
                    </option>
                ))}
            </select>
        </Container>    
    )
}