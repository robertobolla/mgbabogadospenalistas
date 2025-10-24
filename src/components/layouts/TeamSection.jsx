import React from "react";
import "./team-section.scss";

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: "Jose Maria Molina",
      title: "ABOGADO (SOCIO FUNDADOR)",
      image: require("../../assets/images/team/molina.webp"),
    },
    {
      id: 2,
      name: "Ernesto Garcia Biagosch",
      title: "ABOGADO (SOCIO FUNDADOR)",
      image: require("../../assets/images/team/ernesto.webp"),
    },
    {
      id: 3,
      name: "Ileana Antoniella Bataglia",
      title: "ABOGADA (SOCIA)",
      image: require("../../assets/images/team/bataglia.webp"),
    },
    {
      id: 4,
      name: "Agustina Lasquera",
      title: "ABOGADA",
      image: require("../../assets/images/team/agustina.webp"),
    },
    {
      id: 5,
      name: "Juan Pablo Bello",
      title: "ABOGADO",
      image: require("../../assets/images/team/bello.webp"),
    },
    {
      id: 6,
      name: "Patricio Fresia",
      title: "ABOGADO",
      image: require("../../assets/images/team/fresia.webp"),
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <div className="block-text  center">
            <h5
              className="sub-title mb-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Penalistas
            </h5>
            <h3
              className="title mb-28"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Nuestro Equipo de Expertos
            </h3>
          </div>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div
              key={member.id}
              className="team-card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
