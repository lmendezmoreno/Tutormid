import React from 'react'
import TeacherCard from '../../Components/Cards/teacherCards/TeacherCard'
import { TeacherSection } from './Styles'
import Navbar from '../../Components/Groups/Navbar/Navbar'



export default function Home() {
  return (
    <div>
        
        
        <section className='container'>
        {/* Home page */}

         <TeacherSection>
            <h3 className='text-center title-prof'>Profesores profesionales y calificados</h3>
            <p className='text-center text-prof'>Más del 85% de los alumnos han dado una <br/> calificación de 5 estrellas</p>

            <TeacherCard/>
         </TeacherSection>
        </section>
    </div>
  )
}
