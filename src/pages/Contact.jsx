import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet";
import "../components/layouts/map-section.scss";

const Contact = () => {
  return (
    <div className="page-contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contacto - MGB Abogados Penalistas</title>
        <link
          rel="canonical"
          href="https://mgbabogadospenalistas.com/contact"
        />
      </Helmet>
      <Header />
      <section className="tf-section page-title2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="page-title__body rm">
                <div className="block-text pt-12">
                  <h2 className="sub-title mb-20">Contacto</h2>
                  <p className="fs-24 mb-33">
                    Comunicate por cualquiera de nuestros medios de contacto
                    para contratar nuestros servicios o resolver cualquier duda.
                    Te responderemos a la brevedad.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 column-right ">
              <div className="s3 column-top"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Envía un mensaje
                </h5>
                <h3
                  className="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Nos comunicaremos contigo
                  <br /> a la brevedad
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-left">
                <ul>
                  <li data-aos="fade-up">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info">
                      <h5>Jose Maria Molina</h5>
                      <p className="fs-18">381 606 9774</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info">
                      <h5>Ernesto García Biagosch</h5>
                      <p className="fs-18">381 638 4633</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info">
                      <h5>Email</h5>
                      <p className="fs-18">
                        josemariamolina@mgbabogadospenalistas.com
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info">
                      <h5>Email</h5>
                      <p className="fs-18">
                        ernestogarciabiagosh@mgbabogadospenalistas.com
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info">
                      <h5>Dirección</h5>
                      <p className="fs-18">
                        Congreso 603 3A, San Miguel de Tucumán
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <form
                className="contact__form"
                action="https://formsubmit.co/josemariamolina@mgbabogadospenalistas.com"
                method="POST"
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                  <input
                    className="form-control mr-0"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Tu email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="celular"
                    name="celular"
                    type="text"
                    placeholder="Tu celular"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    rows="3"
                    placeholder="Tu mensaje aquí"
                  ></textarea>
                </div>
                <button type="submit" className="btn-action style-2">
                  <span>Enviar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section map-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center mb-40">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Nuestra ubicación
                </h5>
                <h3
                  className="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Encuéntranos aquí
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="map-container"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.123456789!2d-65.2076!3d-26.8083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c3c5c5c5c5c%3A0x1234567890abcdef!2sCongreso%20603%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación MGB Abogados - Congreso 603, San Miguel de Tucumán"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
