import React from 'react'
import { NewCard, ContainerIcon, Card, Title } from './Styled'
/*, NewButton, NewAlert*/
import { BsSearch } from "react-icons/bs";



export default function CardStep() {
  return (
    <NewCard>
      <ContainerIcon>
      <BsSearch />
      </ContainerIcon>
      <Card>
        <Title>
        1. Encuentra a tu profesor
        </Title>
      Utiliza filtros para limitar tu búsqueda y encontrar el que mejor se ajuste a tus necesidades  
      </Card>
    </NewCard>
    
    )
}
