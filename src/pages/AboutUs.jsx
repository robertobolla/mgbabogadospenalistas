import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import img from "../assets/images/items/equipo.webp";
import About from "../components/layouts/About";
import TeamSection from "../components/layouts/TeamSection";
import ButtonWhatsapp from "../components/button/ButtonWhatsapp";
import { Helmet } from "react-helmet";
import Action from "../components/layouts/Action";
const AboutUs = () => {
  return (
    <div className="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Home - MGB Abogados Penalistas</title>
        <link rel="canonical" href="https://mgbabogadospenalistas.com/about" />
      </Helmet>
      <Header />
      <section className="tf-section page-title">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="block-text ">
                <h2 className="sub-title mb-20">Sobre Nosotros</h2>
                <p className="fs-22 mb-33">
                  Contamos con un staff de abogados de nivel seleccionado y
                  probada seriedad, dedicado totalmente a buscar soluciones en
                  los asuntos que nos confían nuestros clientes.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 column-right">
              <img className="about-img" src={img} alt="nosotros" />
            </div>
          </div>
        </div>
      </section>
      <TeamSection /> <Action />
      <Footer />
    </div>
  );
};

export default AboutUs;
