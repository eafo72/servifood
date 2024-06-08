"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import { usePathname } from "next/navigation";

//import { useCartStore } from "../store/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const NavbarOptions = ({ categories }) => {
  //const { cart } = useCartStore(); //debe de ir aqui arriba por ser un hook y evitar errores

  
  const pathname = usePathname();

  function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
  return (
    <>
    <div className="menu_wrap" key={pathname}>
        <nav className="main_menu navbar navbar-expand-lg">
        <button
          id="btn_hamburger"
          onClick={() => {openNav()}} 
          className="mobile_menu_btn navbar-toggler"
          type="button"
        >
          <span className="navbar-toggler-icon">
            <i className="fal fa-bars"></i>
          </span>
        </button>

        <motion.div
        initial={{y:-20, opacity:0}}
        animate={{y:0, opacity:1}}
        
        transition={{
          ease: "easeInOut",
          duration: 0.75
        }}       
          className="main_menu_inner collapse navbar-collapse"
          id="main_menu_dropdown"
        >

          <ul className="main_menu_list ul_li">

            {pathname.startsWith("/categories") ? (
              <li className="active dropdown">
                  <a className="nav-link" href="#" id="categories_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                  </a>
                  <div className="megamenu dropdown-menu" aria-labelledby="categories_submenu">
                    <div className="container">
                        <ul className="homepage_list ul_li">
                          
                            <li>
                              <a href={`/categories/Todas/Bodas`}>
                               
                                <span className="item_title">Bodas</span>
                              </a>
                            </li>

                            <li>
                              <a href={`/categories/Todas/XV-años`}>
                                
                                <span className="item_title">XV años</span>
                              </a>
                            </li>

                            <li>
                              <a href={`/categories/Todas/Graduaciones`}>
                                
                                <span className="item_title">Graduaciones</span>
                              </a>
                            </li>
                          
                        </ul>
                    </div>
                  </div>
              </li>
            ) : (
              <li className="dropdown">
                  <a className="nav-link" href="#" id="categories_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                  </a>
                  <div className="megamenu dropdown-menu" aria-labelledby="categories_submenu">
                    <div className="container">
                        <ul className="homepage_list ul_li">
                         
                            <li>
                              <a href={`/categories/Todas/Bodas`}>
                                <span className="item_title">Bodas</span>
                              </a>
                            </li>

                            <li>
                              <a href={`/categories/Todas/XV-años`}>
                                <span className="item_title">XV años</span>
                              </a>
                            </li>

                            <li>
                              <a href={`/categories/Todas/Graduaciones`}>
                                <span className="item_title">Graduaciones</span>
                              </a>
                            </li>
                          
                        </ul>
                    </div>
                  </div>
              </li>
            )}

            

            {pathname === "/contact" ? (
              <li className="active dropdown">
                <Link
                  className="nav-link"
                  href="/contact"
                  
                >
                  Contacto
                </Link>
              </li>
            ) : (
              <li className="dropdown">
                <Link
                  className="nav-link"
                  href="/contact"
                  
                >
                  Contacto
                </Link>
              </li>
            )}
          </ul>
        </motion.div>
      </nav>

      <ul className="header_icons_group ul_li icons_position_normal">
        {/*
                <li>
                  <button type="button" className="main_search_btn" data-bs-toggle="collapse" data-bs-target="#main_search_collapse" aria-expanded="false" aria-controls="main_search_collapse">
                    <i className="search_icon far fa-search"></i>
                    <i className="search_close fal fa-times"></i>
                  </button>
                </li>
                */}
        
      </ul>
    </div>

    <div id="mySidenav" className="sidenav">

      <button className="closebtn" onClick={() => {closeNav()}}  >X</button>

      <Link href="#menu_categorias" data-bs-toggle="collapse" aria-expanded="true">Categorias</Link>
      
      <div id="menu_categorias" className="collapse show">
       
          
            <Link href={`/categories/Todas/Bodas`}  onClick={() => {closeNav()}}  className="submenu" >
              Bodas
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{position:"absolute",right:"25px"}}
              />
            </Link>

            <Link href={`/categories/Todas/XV-años`}  onClick={() => {closeNav()}} className="submenu" >
              XV años
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{position:"absolute",right:"25px"}}
              />
            </Link>

            <Link href={`/categories/Todas/Graduaciones`}  onClick={() => {closeNav()}} className="submenu" >
              Graduaciones
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{position:"absolute",right:"25px"}}
              />
            </Link>
          
      </div>              


      <Link href="/contact" onClick={() => {closeNav()}} >Contacto</Link>

      

    </div>

  </>
  );
};
