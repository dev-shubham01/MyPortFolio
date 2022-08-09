import React from "react";

import "./style.css";

import { WorkData } from "../../data/WorkData";
import { motion } from "framer-motion";

import {
  ContactBtn,
  PageHeader,
  SkillsIntro,
  CTABtn,
  Intro,
  Nav,
  SectionTitle,
  WorkCard,
  AboutText,
  SocialConnect,
  ContactEmail,
  FooterNav,
  SkillsBox,
} from "../../components";

const Home = () => {
  const WCard = WorkData.map((work) => {
    return <WorkCard key={work.id} work={work} />;
  });

  return (
    <>
      <motion.div
        className="page"
        exit={{ x: "-100vw" }}
        transition={{ ease: "easeInOut" }}
      >
        <div className="head-wrap" id="home">
          <Nav />
          <div className="head">
            <PageHeader />
            <SkillsIntro />
          </div>
        </div>
        <div className="container">
          <section className="intro">
            <ContactBtn />
            <Intro />
           
          </section>
          <section className="work" id="work">
            <SectionTitle title="Selected Works :" />
            <div className="projects-wrap">{WCard}</div>
          </section>
          <section className="skills">
            <article>
              <SectionTitle title="My_ Skills" />
            </article>
            <SkillsBox />
          </section>
          <section className="about" id="about">
            <article>
              <SectionTitle title="About Me, Myself and I :" />
            </article>
            <div>
              <AboutText />
              <SocialConnect dim="clamp(20px, 18px + 5vw, 55px)" />
            </div>
          </section>
          <section className="contact" id="connect">
            <article>
              <SectionTitle
                title="Let's Have a Talk !"
                fontSize="clamp(36px, 20px + 7vw, 80px)"
              />
            </article>
            <ContactEmail />
            <footer>
              <SocialConnect dim="25px" size="15px" />
              <div className="footer-content">
                <FooterNav />
              </div>
            </footer>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
