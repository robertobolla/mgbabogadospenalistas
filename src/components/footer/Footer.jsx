import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/fake-data/logo";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer__body">
              <Link to="/">
                <img
                  className="logoEscale"
                  src={logo}
                  alt="ESCALE"
                  data-aos="slide-up"
                  data-aos-duration="3200"
                />
              </Link>

              <p className="desc fs-18" data-aos="fade-in">
                Entendemos que cada caso es único y requiere una estrategia de
                defensa personalizada. Trabajamos estrechamente con nuestros
                clientes para entender sus necesidades y objetivos legales.
                Nuestros abogados desarrollan estrategias de defensa a medida
                para cada caso para lograr la mejor solución posible.
              </p>
              <ul className="social">
                <li data-aos="slide-up" data-aos-duration="1200">
                  <a
                    href="https://api.whatsapp.com/send?phone=543816069774&text=Hola%2C%20vengo%20de%20mgbabogadospenalistas.online%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%3A%20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li data-aos="slide-up" data-aos-duration="1200">
                  <a
                    href="https://www.instagram.com/mgb.abogadospenalistas?igsh=eWltcmJmN25vYno5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_bottom">
              <p className="fs-16">
                Copyright © 2025 MGB Abogados Penalistas & Asociados. Diseñado
                por{" "}
                <a
                  href="https://escalewebs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#6f6aff", textDecoration: "none" }}
                >
                  ESCALE
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </>
  );
};

export default Footer;
