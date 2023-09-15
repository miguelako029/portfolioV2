import React, { useRef } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "../styles/imageGallery.css";

// Import your images
import image1 from "../assets/images/logo192.png";
import image2 from "../assets/images/logo192.png";
import image3 from "../assets/images/logo192.png";
import image4 from "../assets/images/logo192.png";
import image5 from "../assets/images/logo192.png";
import image6 from "../assets/images/logo192.png";

const images = [image1, image2, image3, image4, image5, image6];

const ImageGallery = () => {
  const splideRef = useRef(null); // Create a ref for Splide

  const {
    mode,
    backgroundColor,
    fontColor,
    BorderColor,
    backgroundColorModal,
    fontModal,
  } = useColorMode();

  const splideOptions = {
    type: "loop",
    perPage: 5, // Display 3 images at a time
    focus: "center",
    gap: "16px", // Adjust the gap between slides as needed
    pagination: false, // Hide the pagination bullets
  };

  const handleScroll = (direction) => {
    if (splideRef.current) {
      if (direction === "left") {
        splideRef.current.splide.go("-1");
      } else {
        splideRef.current.splide.go("+1");
      }
    }
  };

  return (
    <div style={{ maxWidth: "90vw", overflowX: "hidden" }}>
      {/* Set the maximum width of the container */}
      <div style={{ maxWidth: "100%", padding: "0 20px" }}>
        <Splide
          options={splideOptions}
          className="splide"
          ref={splideRef} // Attach the ref to the Splide component
        >
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div style={{ textAlign: "right", marginTop: "16px" }}>
        <Button
          sx={{
            background: backgroundColor,
            color: fontColor,
            border: "1.5px solid",
            transition: "background-color 0.7s ease",
          }}
          onClick={() => handleScroll("left")}
        >
          <WestIcon />
        </Button>{" "}
        <Button
          sx={{
            background: backgroundColor,
            color: fontColor,
            border: "1.5px solid",
            transition: "background-color 0.7s ease",
          }}
          onClick={() => handleScroll("right")}
        >
          <EastIcon />
        </Button>
      </div>
    </div>
  );
};

export default ImageGallery;
