import React, { useState } from "react";
import "./news-slider.scss";

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const news = [
    {
      id: 1,
      title:
        "Día clave para los futbolistas de Vélez denunciados por abuso en Tucumán",
      description:
        "Hoy la víctima es entrevistada en una Cámara Gesell. Los defensores plantean algunas dudas sobre los dichos de la joven.",
      image: require("../../assets/images/items/2.webp"),
      link: "https://www.lagaceta.com.ar/nota/1027807/seguridad/sera-dia-clave-para-futbolistas-velez-denunciados-abuso.html",
    },
    {
      id: 2,
      title:
        "Abuso sexual en Tucumán: los jugadores de Vélez quieren contar su verdad",
      description:
        "Los defensores de los futbolistas buscan demostrar su inocencia. Nuevos detalles. Más pericias.",
      image: require("../../assets/images/items/3.webp"),
      link: "https://www.lagaceta.com.ar/nota/1027525/seguridad/futbolistas-velez-ellos-lo-unico-quieren-contar-verdad.html",
    },
    {
      id: 3,
      title:
        "Los chats reveladores en la denuncia por abuso contra los jugadores de Vélez",
      description:
        "Se filtraron conversaciones entre la denunciante y Sebastián Sosa. El lunes es un día clave: se hará la Cámara Gesell a la víctima y, si el relato es consistente con la acusación inicial, los cuatro futbolistas -el arquero uruguayo, Osorio, Florentín y Cufré- podrían quedar detenidos preventivamente.",
      image: require("../../assets/images/items/4.webp"),
      link: "https://www.tycsports.com/liga-profesional-de-futbol/los-chats-reveladores-en-la-denuncia-por-abuso-y-por-que-los-jugadores-de-velez-pueden-quedar-presos-id570253.html",
    },
    {
      id: 4,
      title:
        "Denuncia por abuso sexual en Tucumán: tres futbolistas de Vélez están más complicados y podrían pedir su detención",
      description:
        "Lo determinó la fiscal a cargo de la investigación por la presunta violación de una periodista de 24 años.",
      image: require("../../assets/images/items/5.webp"),
      link: "https://www.lagaceta.com.ar/nota/988039/seguridad/caso-mohamed-pruebas-contra-acusado.html?utm_source=Whatsapp&utm_medium=Social&utm_campaign=botonmovil",
    },
    {
      id: 6,
      title:
        "Nuevos indicios complican a los futbolistas de Vélez acusados de abuso sexual",
      description:
        "La fiscala Posse se reunió con todas las partes y les explicó el estado de la causa.",
      image: require("../../assets/images/items/6.webp"),
      link: "https://www.lagaceta.com.ar/nota/1027127/seguridad/nuevos-indicios-complican-futbolistas-velez.html",
    },
    {
      id: 7,
      title: "Condenaron al joven que chocó y mató a un taxista",
      description:
        "Mediante un juicio abreviado Gonzalo Nicolás González fue sentenciado a tres años de prisióncondicional y nueve de inhabilitación para conducir. Ofreció una reparación de $90 millones.",
      image: require("../../assets/images/items/7.webp"),
      link: "#",
    },
    {
      id: 8,
      title: "Hay más condenas por violencia de género que por robos",
      description:
        "Especialistas consideran que la persecución penal no alcanza porque siempre llega tarde. Estadísticas que sorprenden. Planteos.",
      image: require("../../assets/images/items/8.webp"),
      link: "https://www.lagaceta.com.ar/nota/1026668/seguridad/hay-mas-condenas-violencia-genero-robos.html#",
    },
    {
      id: 9,
      title:
        "Algunas de las razones por las que se agravó la crisis carcelaria en Tucumán",
      description:
        "La aplicación del nuevo código y la falta de previsión complicaron el panorama. Abogados aportan posibles soluciones. Estadísticas.",
      image: require("../../assets/images/items/9.webp"),
      link: "https://www.lagaceta.com.ar/nota/999577/seguridad/algunas-razones-se-agravo-crisis-carcelaria-tucuman.html",
    },
    {
      id: 10,
      title: "Crimen de Chacabuco 59: Fumero no habló y terminó complicándose",
      description:
        "El ex marido de Picciuto seguirá detenido. Otros tres acusados seguirán con prisión preventiva, pero con la modalidad de arresto domiciliario.",
      image: require("../../assets/images/items/10.webp"),
      link: "https://www.lagaceta.com.ar/nota/995319/seguridad/crimen-chacabuco-59-fumero-no-hablo-termino-complicandose.html",
    },
    {
      id: 11,
      title: "Qué dijo la pareja implicada en el crimen de Chacabuco 59",
      description:
        "Alfredo Rodolfo Socci y Natalia Liberman, pareja que residían provisoriamente en esa propiedad, contaron su historia. ",
      image: require("../../assets/images/items/11.webp"),
      link: "https://www.lagaceta.com.ar/nota/993381/seguridad/exclusivo-la-gaceta-dijo-pareja-implicada-crimen-chacabuco-59.html",
    },
    {
      id: 12,
      title: "Hora de definiciones en el caso del crimen de Chacabuco 59",
      description:
        "El ex marido de Picciuto, que fue detenido ayer, y los dos inquilinos, podrían ser acusados de homicidio en una audiencia que se desarrollará hoy. Cuáles son los indicios que hay en su contra.",
      image: require("../../assets/images/items/12.webp"),
      link: "https://www.lagaceta.com.ar/nota/993291/seguridad/hora-definiciones-caso-crimen-chacabuco-59.html",
    },
    {
      id: 13,
      title: "Caso Mohamed: las pruebas contra el acusado.",
      description:
        "Declaran los peritos que intervinieron en el caso. Las cámaras habrían captado a Luis Carlos Valdez tras el hecho; una piedra sería el arma homicida.",
      image: require("../../assets/images/items/13.webp"),
      link: "https://www.lagaceta.com.ar/nota/988039/seguridad/caso-mohamed-pruebas-contra-acusado.html?utm_source=Whatsapp&utm_medium=Social&utm_campaign=botonmovil",
    },
    {
      id: 14,
      title:
        "Crimen de Manuel Mohamed: un perito reconoció la piedra con la que fue asesinado.",
      description:
        "Aportaron su testimonio diferentes expertos del Equipo Científico de Investigaciones Fiscales.",
      image: require("../../assets/images/items/14.webp"),
      link: "https://www.lagaceta.com.ar/nota/987982/seguridad/crimen-manuel-mohamed-perito-reconocio-piedra-fue-asesinado.html?utm_source=Whatsapp&utm_medium=Social&utm_campaign=botonmovil",
    },
  ];

  const totalSlides = news.length - 2; // Para mostrar siempre 3 elementos

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="news-slider-container">
      <div className="container">
        <div className="news-slider-header">
          <div className="block-text center">
            <h5
              className="sub-title mb-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Casos Públicos
            </h5>
            <h3
              className="title mb-28"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Noticias Relacionadas con Nuestro Estudio
            </h3>
          </div>
        </div>

        <div className="news-slider-wrapper">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="news-slider">
            <div className="news-grid">
              {news.slice(currentSlide, currentSlide + 3).map((article) => (
                <div key={article.id} className="news-card">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-link"
                  >
                    <div className="news-image">
                      <img src={article.image} alt={article.title} />
                    </div>
                    <div className="news-content">
                      <h4 className="news-title">{article.title}</h4>
                      <p className="news-description">{article.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
