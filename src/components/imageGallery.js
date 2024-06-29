import React, { useRef, useState, useEffect } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "../styles/imageGallery.css";

// Import your images
import image1 from "../assets/images/harana.jpg";
import image2 from "../assets/images/campAllen.jpg";
import image3 from "../assets/images/vital1.jpg";
import image4 from "../assets/images/hotJobs.jpg";
import image5 from "../assets/images/batterDelish.jpg";
import image6 from "../assets/images/soEggcited.jpg";
import image7 from "../assets/images/ateMars.jpg";
import image8 from "../assets/images/jersey.jpg";
import image9 from "../assets/images/deck.jpg";

const images = [
  {
    url: image1,
    category: "web",
    link: "https://harana.ph/",
    text: "HARANA",
  },
  {
    url: image2,
    category: "web",
    link: "https://web.archive.org/web/20190627224039/http://campallen.ph/",
    text: "CAMPALLEN",
  },
  {
    url: image3,
    category: "web",
    link: "https://vital1.com.ph/",
    text: "VITAL 1 PURIFIED WATER",
  },
  {
    url: image4,
    category: "web",
    link: "https://web.archive.org/web/20190316135414/https://www.hotjobsphilippines.com/jobs",
    text: "HOTJOBS PHILIPPINES",
  },

  { url: image5, category: "logo", text: "BATTER DELISH" },
  { url: image6, category: "logo", text: "SO EGGCITED" },
  { url: image7, category: "logo", text: "ATE MARS DISWASHING LIQUID" },
  { url: image8, category: "photoshop", text: "JERSEY DESIGN" },
  { url: image9, category: "photoshop", text: "DECKS" },
  // { url: image1, category: "web", text: "JERSEY DESIGN" },
];

// const images = [image1, image2, image3, image4, image5, image6];

const ImageGallery = () => {
  const splideRef = useRef(null);
  const [perPage, setPerPage] = useState(5);
  const {
    mode,
    backgroundColor,
    fontColor,
    BorderColor,
    backgroundColorModal,
    fontModal,
  } = useColorMode();

  // Calculate the unique categories when the component mounts or when images change
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(images.map((image) => image.category)),
    ];
    setPerPage(uniqueCategories.length);
  }, [images]);

  const splideOptions = {
    type: "slide",
    perPage: perPage, // Use the dynamic perPage value
    focus: "right",
    gap: "0px",
    pagination: false,
  };

  const handleScroll = (direction) => {
    if (splideRef.current) {
      const splide = splideRef.current.splide;
      const currentPosition = splide.index;

      if (direction === "left" && currentPosition > 0) {
        splide.go("-1");
      } else if (direction === "right" && currentPosition < splide.length - 5) {
        splide.go("+1");
      } else if (
        direction === "right" &&
        currentPosition === splide.length - 5
      ) {
        // Display a message when the last image is reached
        console.log("Last image reached!");
      }
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <>
      <div
        className="btnContainer animated animatedFadeInUp fadeInUp"
        sx={{ marginBottom: "100px" }}
      >
        <div>test</div>
      </div>
      <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <div style={{ maxWidth: "100%", padding: "0px 10px" }}>
          <Splide options={splideOptions} ref={splideRef}>
            {filteredImages.map((image, index) => (
              <SplideSlide key={index}>
                <img
                  src={image.url}
                  alt={image.category}
                  width={"70%"}
                  className="imgSplide"
                />
                <a
                  target="_blank"
                  // className="overlay"
                  href={image.link}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "block",
                    zIndex: 1,
                  }}
                ></a>
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
    </>
  );
};

export default ImageGallery;
