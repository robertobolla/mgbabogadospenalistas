import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import dataRoadMap from "../assets/fake-data/data-roadmap";
import img from "../assets/images/items/service.webp";
import img2 from "../assets/images/logo_grande.webp";
import Action from "../components/layouts/Action";
import RoadMap from "../components/layouts/RoadMap";
import mundo from "../assets/images/pages/mundo.png";
import satelites from "../assets/images/pages/satelites.png";
import { Helmet } from "react-helmet";

const Landing = () => {
  return (
    <div className="service">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Servicios - MGB Abogados Penalistas</title>
        <link
          rel="canonical"
          href="https://mgbabogadospenalistas.com/service"
        />
      </Helmet>
      <Header />
      <section className="tf-section page-title2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="block-text ">
                <h2 className="sub-title mb-20">Servicios</h2>
                <p className="fs-22 mb-33">
                  MGB & ASOCIADOS se dedica de forma exclusiva al derecho penal,
                  asistiendo a personas físicas y jurídicas, querellantes e
                  imputados (mayores y menores de edad). Trabajamos en toda la
                  Provincia de Tucumán y, en el fuero federal, en todo el país.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 column-right2">
              <img className="about-img" src={img} alt="nosotros" />
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section visions">
        <div className="container">
          <div className="row reverse">
            <div className="col-xl-6 col-md-12">
              <img className="logo-grande" src={img2} alt="logo" />
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="block-text pt-12">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  ¿Que hacemos?
                </h5>
                <h3
                  className="title mb-26"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Derecho Penal
                </h3>
                <p
                  className="fs-20 mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Brindamos servicios jurídicos en cualquiera de las instancias
                  de un proceso penal, tanto en la investigación penal
                  preparatoria o procedimiento de instrucción, como en la
                  acusación o defensa en juicio oral. Asimismo, en la
                  realización de recursos ordinarios ante los tribunales de
                  impugnación o extraordinarios ante los superiores tribunales
                  de la provincia o ante la Corte Suprema de Justicia de la
                  Nación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section services">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="block-text center pt-12">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Nuestro Alcance
                </h5>
                <h3
                  className="title mb-37"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Servicios{" "}
                </h3>
                <p>
                  Nuestros servicios abarcan todos los centros judiciales de la
                  Provincia de Tucumán (Capital, Concepción y Monteros). Como
                  así también todos los tribunales federales de la República
                  Argentina.
                </p>
                <p>
                  El servicio profesional del estudio jurídico abarca cualquiera
                  de los siguientes aspectos:
                </p>
                <p>
                  <b>
                    {" "}
                    Defensa técnica penal en Etapa de Investigación Penal
                    Preparatoria y de Juicio Oral.
                  </b>
                </p>
                <ul data-aos="fade-up" data-aos-duration="1000">
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Asistencia en audiencia de aprehensión, formulación de
                      cargos y medidas de coerción
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Asistencia en audiencia de aplicación de criterio de
                      oportunidad (suspensión de juicio a prueba -probation-,
                      juicio abreviado, etc.)
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Asistencia en audiencia de control de acusación y
                      admisibilidad de la prueba
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Asistencia en audiencia de debate oral y publico
                    </p>
                  </li>
                  <li>
                    <p className="fs-18">
                      <b>Defensa técnica penal en Etapa Recursiva.</b>
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Asistencia en Audiencias de ejecución
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Solicitud de traslados (médicos, comisaria, etc.)
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Solicitud de beneficios (Salidas transitorias, Prisión
                      domiciliaria, Libertad condicional, etc.)
                    </p>
                  </li>
                  <li>
                    <p className="fs-18">
                      <b>Habeas Corpus</b>
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Solicitud de habeas corpus preventivo
                    </p>
                  </li>{" "}
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Solicitud de habeas corpus correctivo
                    </p>
                  </li>
                  <li>
                    <p className="fs-18">
                      <b>Querellas y Actor Civil</b>
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Solicitud de habeas corpus preventivo
                    </p>
                  </li>
                  <li>
                    <p className="fs-18">
                      <b>Peritajes de parte</b>
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <p className="fs-18">
                      Contamos con peritos asociados en diversas ramas:
                      criminalistas, profesionales en medicina, psiquiatría y
                      psicología forense; peritos calígrafos; bioquímicos;
                      contadores públicos; perito en balística y perito en
                      accidentología.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Action />
      <Footer />
    </div>
  );
};

export default Landing;
