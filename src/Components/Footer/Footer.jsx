import "./Footer.scss";
import FooterImage from "../img/FooterImage.png";
import FooterImg from "../img/WhiteGray.png";


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img
          className="footer__div"
          src={FooterImg}
          alt="img"
          width={359}
          height={332}
        />

        <div className="footer__big">
          <h3 className="footer__title">Luxury & Fancy Chair</h3>
          <p className="footer__text">
            All the Lorem Ipsum generators on the Internet tend to predefined
            chunks this the first true generator on the Internet.
          </p>

          <hr className="footer__line" />
        </div>

        <div className="footer__info">
          <div className="footer__schedule">
            <span className="footer__number">20K+</span>
            <span className="footer__graph">People Visiting this year</span>
            <span className="footer__number">15</span>
            <span className="footer__graph">Years Experience</span>
          </div>

          <div className="footer__chart">
            <img src={FooterImage} alt="img" width={116} height={36} />
            <span className="chart__hr"></span>
            <div>
              <h4 className="chart__heading">Trust Members</h4>
              <p className="chart__text">
                More than 50k peoples integrate with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;