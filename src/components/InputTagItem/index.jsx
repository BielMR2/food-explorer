import { useEffect, useState } from "react";

import { TagItem } from "../TagItem";

import { Container } from "./styles";

export function InputTagItem({ tags, setTags, title }) {
    const [newTag, setNewTag] = useState('')

    function handleAddTag(value) {
        if(!value){
            return alert("Você não pode enviar uma tag vazia")
        }

        const CheckIfTagAlreadyExists = tags.some(tag => {
            return value === tag
        })
        if(CheckIfTagAlreadyExists){
            setNewTag('')
            return alert("Essa tag já existe")
        }

        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }


    return(
        <Container>
            {title && <p className="roboto_small_regular">{title}</p>}
            <div className="tags">
            {
                tags.map((tag, index) => (
                    <TagItem 
                        key={String(index)}
                        value={tag} 
                        onClick={() => handleRemoveTag(tag)}    
                    />
                ))                
            }

            <TagItem
                isNew
                placeholder="Novo marcador" 
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={() => handleAddTag(newTag)} 
                onKeyPress={e => (e.key) == "Enter" && handleAddTag(newTag)}
            />
            </div>
            
        </Container>    
    )
}