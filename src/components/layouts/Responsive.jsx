import React, { useState } from "react";
import item from "../../assets/images/items/abogados2.webp";

const Responsive = () => {
  const [data] = useState({
    subtitle: "Nuestros Servicios",
    title: "MGB Abogados Penalistas y Asociados",
    desc1:
      "Nos caracteriza, la atención directa con cada uno de los clientes, así como la celeridad y practicidad en las resoluciones de casos que nos llegan. Comprendemos la complejidad que conlleva tener un conflicto con la ley penal como así también la de ser víctima de un delito. Por eso, nos dedicamos especialmente a cada uno de nuestros clientes para darle la mejor atención y lo más rápido posible...",
  });

  return (
    <section className="tf-section section-responsive" id="responsive">
      <div className="container">
        <div className="row reverse">
          <div className="col-xl-7 col-md-12">
            <div className="image-abogados">
              <img src={item} alt="Monteno" />
            </div>
          </div>
          <div className="col-xl-5 col-md-12">
            <div className="block-text mt-61 pt-12">
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.subtitle}
              </h5>
              <h3 className="title" data-aos="fade-up" data-aos-duration="1000">
                {data.title}
              </h3>
              <p
                className="fs-21 mb-33"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc1}
              </p>
              <a
                href="https://calendly.com/escalewebs/consultoria-servicios-webs"
                className="btn-action style-3"
                data-aos="fade-up"
                data-aos-duration="1200"
                target="_blank"
                rel="noreferrer"
              >
                Saber más...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsive;
