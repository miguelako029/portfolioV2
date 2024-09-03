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
import image1 from "../assets/images/haranaSq.jpg";
import image2 from "../assets/images/campAllenSq.jpg";
import image3 from "../assets/images/vital1Sq.jpg";
import image4 from "../assets/images/hotJobsSq.jpg";
// import image5 from "../assets/images/batterDelish.jpg";
// import image6 from "../assets/images/soEggcited.jpg";
// import image7 from "../assets/images/ateMars.jpg";
import image8 from "../assets/images/LogoSq.gif";
import image9 from "../assets/images/marketing.jpg";

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

  // { url: image5, category: "logo", text: "BATTER DELISH" },
  // { url: image6, category: "logo", text: "SO EGGCITED" },
  // { url: image7, category: "logo", text: "ATE MARS DISWASHING LIQUID" },
  { url: image8, category: "photoshop", text: "JERSEY DESIGN" },
  // {
  //   url: image9,
  //   category: "photoshop",
  //   link: "https://www.facebook.com/profile.php?id=61559000390679",
  //   text: "DECKS",
  // },
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
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "20px",
    // pagination: false,
    // arrows: true,
  };

  const handleScroll = (direction) => {
    if (splideRef.current) {
      const splide = splideRef.current.splide;
      const currentPosition = splide.index;

      if (direction === "left" && currentPosition > 0) {
        splide.go("-1");
      } else if (direction === "right" && currentPosition < splide.length - 1) {
        splide.go("+1");
      } else if (
        direction === "right" &&
        currentPosition === splide.length - 1
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
        className=" animated animatedFadeInUp fadeInUp ExpContent"
        sx={{ marginBottom: "100px" }}
      >
        <div className="pageTitle">Turning Ideas into Reality</div>

        {/* <div style={{ maxWidth: "100vw", overflowX: "hidden" }}> */}
        <div className="splides">
          <Splide options={splideOptions} ref={splideRef}>
            {filteredImages.map((image, index) => (
              <SplideSlide key={index}>
                <div style={{ width: "100%" }}>
                  <img
                    src={image.url}
                    alt={image.category}
                    width={"95%"}
                    height={"30%"}
                    className="imgSplide"
                  />
                  <a
                    target="_blank"
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
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <div className="scrollerArrow">
            <Button
              sx={{
                background: mode === "dark" ? "#253238" : "#fff",
                color: fontColor,
                border: "1.5px solid",
                borderRadius: "30px",
                marginRight: "10px",
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
                borderRadius: "30px",
                transition: "background-color 0.7s ease",
              }}
              onClick={() => handleScroll("right")}
            >
              <EastIcon />
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ImageGallery;
