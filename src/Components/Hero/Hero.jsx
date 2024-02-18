import "./Hero.scss";
import React from "react";
import Image1 from "../img/BrownChair.png";
import Image2 from "../img/BlackCircleChair.png";
import Image3 from "../img/WithColour.png";
import Image4 from "../img/PurpleChair.png";
import Image5 from "../img/SocialMedias.png";
import Image6 from "../img/icon.png";

const todolist = [
  {
    id: 1,
    img: Image1,
    text: "Comfort Lounge Chair",
  },
  {
    id: 2,
    img: Image2,
    text: "Comfort Launge Chairs",
  },
  {
    id: 3,
    img: Image4,
    text: "Comfort Launge Chairs",
  },
];

function Hero() {
  const [Image, setImage] = React.useState(Image3);

  const ImageChange = (img) => {
    setImage(img);
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__social">
          <img
            className="hero__medias"
            src={Image5}
            alt="img"
            width={22}
            height={144}
          />

          <div className="hero__info">
            <p className="hero__text">100% Quality Guranty</p>

            <h1 className="hero__heading">
              Find Classy Furnitures For Your Comfort
            </h1>

            <p className="hero__paragraph">
              All the Lorem Ipsum generators on the Internet tend to predefined
              chunks this the first true generator on the Internet.
            </p>

            <p className="hero__text">Start From</p>
            <h2 className="hero__title">102.99 USD</h2>

            <button
              className="hero__button"
            >
              Buy Now
            </button>

            <div className="popular">
              <p className="popular__text">Popular shades</p>
              <p className="popular__color"></p>
              <p className="popular__color"></p>
              <p className="popular__color"></p>
              <p className="popular__color"></p>
            </div>
          </div>

          <img
            className="image__quality"
            src={Image}
            alt="Chairs' Picture"
            width={562}
            height={562}
          />

          <div className="changing">
            {todolist.map((item) => (
              <li key={item.id} className="changing__item">
                <button
                  className="changing__btn"
                  onClick={() => ImageChange(item.img)}
                >
                  <img
                    className="changing__image"
                    src={item.img}
                    alt="img"
                    width={81}
                    height={81}
                  />
                </button>
                <p className="changing__paragraph">{item.text}</p>
              </li>
            ))}

            <img
              className="hero__icon"
              src={Image6}
              alt="icon"
              width={34}
              height={34}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
