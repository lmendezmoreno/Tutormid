import React from 'react'
import Button from '../../Components/Elements/Button/Button'
import { Container } from './Style'
export default function NotFounf() {
  return (
    <Container>
        NotFound
        <Button text='Prueba' icon = "upload-file"/> <br />
        <Button text='Prueba' icon = "upload-file" color='outline'/>
        <Button text='Prueba' color='info' icon='beer'/>
    </Container>
  )
}
