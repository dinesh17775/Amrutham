import React from "react";
import HeaderPage from "../components/HeaderPage";
import Asserts from "../components/Asserts";
import AyurvedaInfo from "../components/AyurvedaInfo";
import AyurvedaProducts from "../components/AyurvedaProducts";
import Booking from "../components/Booking";
import Approach from "../components/Approach";
import Reviews from "../components/Reviews";
import ExpertProfiles from "../components/ExpertProfiles";
import Footer from "../components/Footer";
import AppDownloadLinks from "../components/AppDownloadLinks";

function Home() {
  return (
    <>
      <header>
        <HeaderPage />
      </header>
      <section>
        <Asserts />
      </section>
      <main>
        <AyurvedaInfo />
      </main>
      <section>
        <AyurvedaProducts />
      </section>
      <section>
        <Booking />
      </section>
      <section>
        <Approach />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <ExpertProfiles />
      </section>
      <section>
        <AppDownloadLinks />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
