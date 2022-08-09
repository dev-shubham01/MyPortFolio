import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        Myself Shubham Pandey and I'm in final year of my college pursuing IT
        engineering degree. Also a web developer. Two things I can't live
        without Coffee and Coding <br />
        "I write code, love code, live code."
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I am a Programming enthusiast and Web developer.
        <br />
        <br />
        Currently pursuing my B.Tech in IT from Indian Institute Of Information
        Technology Vadodara
        <br />
        <br />
        In my spare time I like to watch anime and sometimes play FPS games as well😉
        <br />
        <br/>
        Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME.
        </a>{" "}
      </p>
    </>
  );
};
