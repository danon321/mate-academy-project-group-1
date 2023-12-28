import './footer.scss';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__grid footer__container container">
          <span className="item1">Contact the Publisher</span>
          <span className="item2">Explorate</span>
          <span className="item3">Headquarter</span>
          <span className="item4">Connections</span>
          <a className="footer__rows mail" href="mailto:mike@runo.com">
            mike@runo.com
          </a>
          <a className="footer__rows phone" href="tel:+944 450 904 505">
            +944 450 904 505
          </a>
          <a className="footer__rows about" href="#About">
            About
          </a>
          <a className="footer__rows partners" href="#Partners">
            Partners
          </a>
          <a className="footer__rows job" href="#Job Opportunities">
            Job Opportunities
          </a>
          <a className="footer__rows advertise" href="#Advertise">
            Advertise
          </a>
          <a className="footer__rows member" href="#Membership">
            Membership
          </a>
          <p className="footer__rows address">
            191 Middleville Road,
            <br /> NY 1001, Sydney <br /> Australia
          </p>
          <div className="grid--icons">
            <FacebookSharpIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
        </div>
      </footer>
      <div className="footer__bottom">
        <div className="footer__bottom__display">
          <span className="item">2021 | RUNO Publisher Studio</span>
          <span className="item">Subscribe Now</span>
        </div>
      </div>
    </>
  );
};
