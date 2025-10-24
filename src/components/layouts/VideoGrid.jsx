import React from "react";
import "./video-grid.scss";

const VideoGrid = () => {
  const videos = [
    {
      id: 1,
      title:
        "Entrevista para canal 8 Tucumán. Dr Molina, Garcia Biagosh, Antoniella. Caso Velez.",
      youtubeId: "r_3EMcFImo4",
      channel: "Canal 8 Tucumán",
      duration: "15:30",
    },
    {
      id: 2,
      title:
        "En MGB, discutimos los detalles de esta causa donde defendemos a los acusados.",
      youtubeId: "HwTPUvULR5o",
      channel: "MGB Abogados",
      duration: "12:45",
    },
    {
      id: 3,
      title: "ABUSO SEXUAL EN VÉLEZ: EL LUNES DECLARA LA DENUNCIANTE",
      youtubeId: "r2RF7QGd0Zo",
      channel: "El Ocho",
      duration: "8:20",
    },
    {
      id: 4,
      title:
        "Programa GPS POLICIALES entrevista a Los Dres Ernesto García Biagosh y Antoniella Bataglia",
      youtubeId: "EgVsvNx_vIo",
      channel: "GPS Policiales",
      duration: "22:15",
    },
    {
      id: 5,
      title: "Vélez: el lunes Cámara Gesell a la denunciante",
      youtubeId: "x-3P66cW-ME",
      channel: "A24",
      duration: "6:30",
    },
    {
      id: 6,
      title:
        "Denuncia por presunto abuso sexual: cuál es la situación de los jugadores de Vélez",
      youtubeId: "5xlaikuG7T4",
      channel: "Crónica",
      duration: "18:45",
    },
    {
      id: 7,
      title: "Entrevista al Dr. Jose Maria Molina Caso Jugadores Velez",
      youtubeId: "nwrVIp3Wni8",
      channel: "MGB Abogados",
      duration: "14:20",
    },
    {
      id: 8,
      title: "Sangre Fría - Denuncia contra jugadores de Vélez - 16/03/2024",
      youtubeId: "vho6zv3z3iw",
      channel: "Sangre Fría",
      duration: "25:10",
    },
  ];

  return (
    <div className="video-grid-container">
      <div className="container">
        <div className="video-grid-header">
          <div className="block-text  center">
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
              Entrevistas en televisión
            </h3>
          </div>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <div className="video-thumbnail">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-duration-overlay">{video.duration}</div>
              </div>

              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <div className="video-meta">
                  <span className="video-channel">{video.channel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
