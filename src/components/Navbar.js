
import Image from 'next/image'
import Link from 'next/link'

//import clienteAxios from "../config/axios";

import logo from "../images/logo/logo-servifood.png";


import { NavbarOptions } from "./navbarOptions"

export async function Navbar() {

   
     
  
  const categories = ["Bodas, XV años, Graduaciones"]
  const slogan = 'Eventos Sociales y Empresariales con paquetes todo incluido, más de 50 opciones de salones.'; 
     

  return (
    <>
  
    <header className="header_section header_1">
        <div className="container width_desktop">
          <div className="header_top">
            <p className="welcome_text">{slogan}</p>
            <ul className="header_icons_list ul_li">
              <li>
                <ul className="social_primary ul_li">
                  <li><a href="https://www.facebook.com/servifood.eventossociales/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                </ul>
              </li>
              <li>
                <a href="mailto:servifoodalimentos@gmail.com"><i className="fas fa-envelope"></i></a>
              </li>
              
            </ul>
          </div>

          
              <Link className="brand_link" href="/" style={{display:"block"}}>
              <Image className="logo_size logo_m logo_position_float" src={logo} alt={logo} />
              </Link>
          

          <div className="header_bottom">

              {/*este div es solo para que deje el espacio del logo*/}
              <div className="brand_logo"></div>

              <NavbarOptions categories= {categories} />
            
          </div>
        </div>

        <div className="main_search_collapse collapse" id="main_search_collapse">
          <div className="main_search_form card">
            <div className="container width_desktop">
              <form action="#">
                <div className="form_item">
                  <input type="search" name="search" placeholder="Search here..."/>
                  <button type="submit" className="submit_btn"><i className="fal fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

                
      </>   
  );
}
