
import "bootstrap/dist/css/bootstrap.min.css";
import ImportJSFiles from "./importJsFiles";

import "../css/animate.css";
import "../css/fontawesome.css";
import "../css/jquery-ui.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
import "../css/style.css";
import "../css/image-gallery.css";

//import clienteAxios from "../config/axios";

import { Toaster, toast } from 'sonner';

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTopButton } from "../components/BackToTopButton";



export const metadata = {
  title: 'Servifood',
  description: 'Empresa dedicada al servicio de banquetes',
  keywords: 'Banquetes, Catering, Bodas, XV años, Cumpleaños, Aniversarios, Graduaciones',
  author: "Alex Flores", 
  alternates: {
    canonical: "https://servifood.vercel.app",
  },
};

export default function RootLayout({ children }) {
   
  return (
    <html lang="es">
      <body>
        <ImportJSFiles />
        <BackToTopButton />
        <Navbar/>
        <Toaster richColors position="top-right"/>
        {children}
        <Footer /> 
      </body>
    </html>
  );
}

