import React, { useRef, useState, useEffect } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "@mui/material";
import { useColorMode } from "../assets/script/DarkModeContext"; // Update the path

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "../styles/imageGallery.css";

// Import your images
import image1 from "../assets/images/ateMars.jpg";
import image2 from "../assets/images/batterDelish.jpg";
import image3 from "../assets/images/ateMars.jpg";
import image4 from "../assets/images/ateMars.jpg";
import image5 from "../assets/images/ateMars.jpg";
import image6 from "../assets/images/ateMars.jpg";

const images = [
  {
    url: image1,
    category: "web",
    link: "https://harana.ph/",
    text: "HARANA",
  },
  {
    url: image2,
    category: "logo",
    link: "https://web.archive.org/web/20190627224039/http://campallen.ph/",
    text: "CAMPALLEN",
  },
  {
    url: image2,
    category: "logo",
    link: "https://vital1.com.ph/",
    text: "VITAL 1 PURIFIED WATER",
  },
  {
    url: image2,
    category: "logo",
    link: "https://web.archive.org/web/20190316135414/https://www.hotjobsphilippines.com/jobs",
    text: "HOTJOBS PHILIPPINES",
  },
  // {
  //   url: image2,
  //   category: "logo",
  //   link: "https://web.archive.org/web/20190627224039/http://campallen.ph/",
  //   text: "CAMPALLEN",
  // },
  // {
  //   url: image2,
  //   category: "logo",
  //   link: "https://vital1.com.ph/",
  //   text: "VITAL 1 PURIFIED WATER",
  // },
  // {
  //   url: image2,
  //   category: "logo",
  //   link: "https://web.archive.org/web/20190316135414/https://www.hotjobsphilippines.com/jobs",
  //   text: "HOTJOBS PHILIPPINES",
  // },
  { url: image1, category: "web", text: "BATTER DELISH" },
  { url: image1, category: "web", text: "SO EGGCITED" },
  { url: image1, category: "web", text: "ATE MARS DISWASHING LIQUID" },
  { url: image1, category: "web", text: "JERSEY DESIGN" },
  { url: image1, category: "web", text: "JERSEY DESIGN" },
  { url: image1, category: "web", text: "JERSEY DESIGN" },
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
    focus: "left",
    gap: "12px",
    pagination: false,
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
        <div>
          <Button
            // className="btnStyle"
            sx={{
              background: backgroundColor,
              color: fontColor,
              border: "1.5px solid",
              margin: "0px 5px 30px 5px",
            }}
            onClick={() => handleCategoryChange("all")}
          >
            All
          </Button>
          <Button
            sx={{
              background: backgroundColor,
              color: fontColor,
              border: "1.5px solid",
              margin: "0px 5px 30px 5px",
            }}
            className="btnStyle"
            onClick={() => handleCategoryChange("web")}
          >
            Web
          </Button>
          <Button
            sx={{
              background: backgroundColor,
              color: fontColor,
              border: "1.5px solid",
              margin: "0px 5px 30px 5px",
            }}
            className="btnStyle"
            onClick={() => handleCategoryChange("logo")}
          >
            Logo
          </Button>
          <Button
            sx={{
              background: backgroundColor,
              color: fontColor,
              border: "1.5px solid",
              margin: "0px 5px 30px 5px",
            }}
            className="btnStyle"
            onClick={() => handleCategoryChange("photoshop")}
          >
            Photoshop
          </Button>
        </div>
      </div>
      <div style={{ maxWidth: "80vw", overflowX: "hidden" }}>
        <div style={{ maxWidth: "100%", padding: "0px 10px" }}>
          <Splide options={splideOptions} ref={splideRef}>
            {filteredImages.map((image, index) => (
              <SplideSlide key={index}>
                <img
                  src={image.url}
                  alt={image.category}
                  width={"90%"}
                  className="imgSplide"
                />
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
