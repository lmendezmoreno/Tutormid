import React from 'react';
import {Footercontainer} from './Style'
import { Link } from 'react-router-dom';
import { CgPhone } from "react-icons/cg";
import { MdMailOutline } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";






export default function Footer() {
  return (
    <Footercontainer className="main-footer ">
        <div className='footer-middle '>
            <div className="container">
                <div className="row ">
                    {/* Column 1 */}
                    <div className=" col-md-3 col-sm-6">
                        <Link to='/'  >
                            <img className='mb-4 pt-2' src='./LogoTutormid.png' />
                        </Link>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><Link to='/'> Sobre Nosotros</Link></li>
                            <li className='mb-2'><Link to='/'>Profesores</Link></li>
                            <li><Link to='/'>Politicas de privacidad</Link></li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-3 py-5 col-sm-6">
                        <h4 className='mb-3'>AYUDA</h4>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><Link to='/'>Preguntas Frecuentes</Link></li>
                            <li className='mb-2'><Link to='/'>Convierte en Docente</Link></li>
                            <li><Link to='/'>Blog y Noticias</Link></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col-md-3 py-5 col-sm-6">
                        <h4 className='mb-3'>CONTÁCTANOS</h4>
                        <ul className='list-unstyled'>
                            <li className='mb-2'> <CgPhone style={{marginRight: "8px"}}/>    992 123 097 - 900 678 231</li>
                            <li className='mb-2' ><MdMailOutline style={{marginRight: "8px"}}/>            contacto@tutormid.com</li>
                            <li><HiOutlineClock style={{marginRight: "8px"}} />   Lun - Sab (9 am - 5 pm)</li>
                        </ul>
                    </div>
                    {/* Column 4 - REDES*/}
                    <div className="col-md-3 py-5 col-sm-6 ">
                        <h4 className='mb-3'>SÍGUENOS</h4>
                        <div className='d-flex gap-4'>
                            <Link to=""><BsFacebook color='white' size='1.7rem ' /></Link>
                            <Link to=""><ImYoutube color='white' size='1.7rem'/></Link>
                            <Link to=""><IoLogoWhatsapp color='white' size='1.7rem'/></Link>
                            <Link to=""><AiFillInstagram color='white' size='1.7rem'/></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer botton */}
            <footer className="footer-botton">
                <div className='container'>
                    <div className='row'>
                        <p className="">
                            &copy;{new Date().getFullYear()}   Tutormid all rights reserverd 
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </Footercontainer>    
  )
}
