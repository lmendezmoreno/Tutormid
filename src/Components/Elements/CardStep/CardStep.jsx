import React from 'react'
import { NewCard, ContainerIcon } from './Styled'
/*, NewButton, NewAlert*/
import { BsSearch } from "react-icons/bs";



export default function CardStep() {
  return (
    <NewCard>
      <ContainerIcon>
      <BsSearch />
      </ContainerIcon>
      <div>
      1. Encuentra a tu profesor  
      </div>
    </NewCard>
    
    )
}
