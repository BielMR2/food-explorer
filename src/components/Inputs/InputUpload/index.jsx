import { PiUploadSimple } from "react-icons/pi";

import { Container } from "./styles"

export function InputUpload({ setFile, title }) {
    return(
        <Container>
            {title && <p className="roboto_small_regular">{title}</p>}
            <label htmlFor="image">
                <input
                    id="image" 
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}    
                />

                <PiUploadSimple size={24} />
                <h1 className="poppins_100_medium">Selecione Imagem</h1>
            </label>   
        </Container>    
    )
}