import Image from 'next/image'

//import clienteAxios from "../config/axios";

import logo_footer from "../images/logo/logo-servifood.png";
import Link from 'next/link'

export async function Footer() {

  
  
  return (
    <>
      <footer className="footer_section footer_style_6">
        <div className="footer_widget_area">
          <div className="container width_desktop">
            <div className="row">
              <div className="col col-lg-4 col-md-5 col-sm-6">
                <div className="footer_widget footer_about">
                  <div className="brand_logo">
                    <Link className="brand_link" href="/">
                      <Image
                        style={{ height: "100px", width: "100px" }}
                        src={logo_footer}
                        alt={logo_footer}
                      />
                    </Link>
                  </div>
                  <p>
                    Calle 26 #296 entre 19 y 21 Plaza Maya
                    <br />
                    Col.Miguel Alemán,
                    <br />
                    Mérida, Yucatán
                  </p>

                 
                </div>
              </div>

              <div className="col col-lg-2 col-md-3 col-sm-6">
                <div className="footer_widget fooetr_useful_links">
                  <h3 className="footer_widget_title text-white">Categorías</h3>
                  <ul className="ul_li_block">
                    
                      <li>
                          <Link href={`/categories/Todas/Bodas`} style={{textDecoration:"none"}}>
                            Bodas
                          </Link>
                      </li>
                      <li>
                          <Link href={`/categories/Todas/XV años`} style={{textDecoration:"none"}}>
                            XV años
                          </Link>
                      </li>
                      <li>
                          <Link href={`/categories/Todas/Graduaciones`} style={{textDecoration:"none"}}>
                            Graduaciones
                          </Link>
                      </li>
                  </ul>
                </div>
              </div>

              <div className="col col-lg-3 col-md-4 col-sm-6">
                <div className="footer_widget footer_twitter">
                  <h3 className="footer_widget_title text-white">Síguenos</h3>
                  <ul className="social_round ul_li">
                    <li>
                      <a
                        className="bg_facebook"
                        href="https://www.facebook.com/servifood.eventossociales/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    {/*
                    <li><a className="bg_tumblr" href="#!"><i className="fab fa-tumblr"></i></a></li>
                    <li><a className="bg_twitter" href="#!"><i className="fab fa-twitter"></i></a></li>
                    <li><a className="bg_youtube" href="#!"><i className="fab fa-youtube"></i></a></li>
                    */}
                  </ul>
                </div>
              </div>

              <div className="col col-lg-3 col-md-4 col-sm-6">
                <div className="row">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title text-white">
                      Contáctanos
                    </h3>
                    <ul className="footer_contact_info ul_li_block">
                      <li>
                        <p>
                          Email:{" "}
                          <a href="mailto:servifoodalimentos@gmail.com">
                          servifoodalimentos@gmail.com
                          </a>
                        </p>
                      </li>
                      <li>
                        <p>
                          Teléfono: 9993 10 71 38
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="footer_widget fooetr_useful_links">
                    <br />
                    <h3 className="footer_widget_title text-white">
                      Información
                    </h3>
                    <ul className="ul_li_block">
                      <li>
                        <Link href="/nop">Aviso de privacidad</Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container width_desktop">
            <p className="copyright_text text-center">© Todos los derechos reservados Servifood Alimentos</p>
          </div>
        </div>
      </footer>
    </>
  );
}
