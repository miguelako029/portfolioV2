import React from "react";
import { Element } from "react-scroll";
import "../styles/style.css";

const Section = ({ id, children }) => (
  <Element name={id} className="section">
    {children}
  </Element>
);

export default Section;
