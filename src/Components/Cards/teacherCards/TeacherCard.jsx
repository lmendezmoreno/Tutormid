import React from 'react'
import {StyledCard} from './Style'
import Badge from 'react-bootstrap/Badge';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function TeacherCard() {
  return (
    <div>
      <div className='row'>
      <StyledCard className='col-4'>
        <Card.Img variant="top" src="/Rectangle 974.png" />        
        <h5>Lisa Sotelo Flores</h5>
        <p>Matemáticas</p>
        <p>Tutora de matemáticas para niños y adolescentes</p>
        <div className="d-flex">
        <Badge bg="info" pill width="3rem">$15.00 / h</Badge>
        <p>5.0</p>
        </div>
    </StyledCard>
              {/* CARD 2 */}
    <StyledCard className='col-4'>
      <Card.Img variant="top" src="/Rectangle 976.png" /> 
        <h5>Lisa Sotelo Flores</h5>
        <p>Musica-Piano</p>
        <p>Instructora de piano con más de 5 años de experien...</p>
        <div className="d-flex space-between">
        <Badge bg="info" pill width="3rem">$15.00 / h</Badge>
        <p>5.0</p>
        </div>
    </StyledCard>
            {/* CARD 3 */}
    <StyledCard className='col-4'>
        <Card.Img variant="top" src="/Rectangle 978.png" /> 
        <h5>Lisa Sotelo Flores</h5>
        <p>Fisica - Química</p>
        <p>Magister en ciencias aplicadas y Titulada en Fisi...</p>
        <div className="d-flex">
        <Badge bg="info" pill width="3rem">$15.00 / h</Badge>
        <p>5.0</p>
        </div>
    </StyledCard>


      </div>
    </div>
    

  );
}

export default TeacherCard;
