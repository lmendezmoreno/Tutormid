import React from 'react'
import { Container, ColumnText, Title, SubTitle } from './Styles'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Banner() {
  return (
    <>
        <Container>
           <Row>
                <Col>
                    <ColumnText> 
                        <Title>Encuentra tu <br /> profesor particular</Title>
                        <SubTitle>En línea o presencial, comienza y agenda tus 
                        lecciones de manera grupal o individual en el  
                        horario que más se adpate a tí</SubTitle>
                      
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Buscar Docente"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Buscar
                            </Button>
                        </InputGroup>
                    </ColumnText>
                </Col>
                <Col><img src="src/assets/img-banner.svg" alt="img-banner" /></Col>
           </Row>
        </Container>
    </>
  )
}
