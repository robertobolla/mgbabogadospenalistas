import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Slider = () => {
  const { t } = useTranslation();

  return (
    <section className="tf-section hero-slider">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-md-12 col-12">
            <div className="block-text up pt-24">
              <h6 className="sub-title mb-6" data-aos="fade-up">
                Estudio Jurídico
              </h6>
              <h2 className="title mb-26" data-aos="fade-up">
                SOMOS EXPERTOS EN DERECHO PENAL
                <br></br>
              </h2>
              <p className="desc mb-43" data-aos="fade-up">
                Ofrecemos servicios de representación legal en todas las etapas
                del proceso penal, desde la investigación inicial hasta la
                apelación y revisión de la sentencia.
              </p>
              <Link
                to="/contact"
                className="btn-action style-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Contactanos
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-md-12 col-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
