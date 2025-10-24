import React from "react";
import Header from "../components/header/Header";
import Responsive from "../components/layouts/Responsive";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import { LanguageProvider } from "../context/languageContext";
import VideoGrid from "../components/layouts/VideoGrid";
import NewsSlider from "../components/layouts/NewsSlider";
import { Helmet } from "react-helmet";
import Action from "../components/layouts/Action";

const Home = () => {
  return (
    <div className="home-3">
      <LanguageProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Home - MGB Abogados Penalistas</title>
          <link rel="canonical" href="https://mgbabogadospenalistas.com/" />
        </Helmet>
        <Header />
        <Slider />
        <Responsive />
        <VideoGrid />
        <NewsSlider />
        <Action />
        <Footer />
      </LanguageProvider>
    </div>
  );
};

export default Home;
