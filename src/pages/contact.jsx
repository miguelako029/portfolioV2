import React from "react";
import { Container, Typography, Box, Tooltip } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
  Email,
  Send,
} from "@mui/icons-material";
import socialLinks from "../components/data/contactLinks.json";

const iconComponents = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  LinkedIn: LinkedIn,
  GitHub: GitHub,
  Email: Email,
};

const Contact = () => {
  const { mode, backgroundColor, fontHero, fontColor } = useColorMode();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInUp = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
    },
    config: { duration: 1000 },
  });

  return (
    <Box
      className="pageSection"
      id="contact"
      sx={{
        background: backgroundColor,
        color: fontColor,
        minheight: "110vh",
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        transition: "background-color 0.7s ease",
      }}
    >
      <Container
        style={{ textAlign: "center" }}
        className="contactContainer"
        sx={{ color: fontColor }}
      >
        <div ref={ref}>
          <animated.div style={fadeInUp}>
            <label variant="h1" className="conTitle">
              {socialLinks.title}
            </label>
            <div style={{ paddingTop: "20px" }}>
              {socialLinks.socialLinks.map((link) => {
                const IconComponent = iconComponents[link.icon];
                return link.tooltip ? (
                  <Tooltip title={link.tooltip} placement="top" key={link.name}>
                    <a href={link.url} target="blank">
                      <IconComponent
                        id="contactIcon"
                        sx={{ color: fontColor }}
                      />
                    </a>
                  </Tooltip>
                ) : (
                  <a href={link.url} target="blank" key={link.name}>
                    <IconComponent id="contactIcon" sx={{ color: fontColor }} />
                  </a>
                );
              })}
              <p className="copyright">
                &copy; {new Date().getFullYear()} Miguel Milanez. All rights
                reserved.
              </p>
            </div>
          </animated.div>
        </div>
      </Container>
    </Box>
  );
};

export default Contact;
