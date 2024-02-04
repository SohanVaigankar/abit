// styles
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterHeroSection}>
        <a href="#">
          <h2>aBit</h2>
        </a>
        <p>Changing The Way In Which</p>
        <p>Creators And Fans Interact.</p>
      </div>
      <ul className={classes.FooterLinks}>
        <li>Home</li>
        <li>Are You a Creator</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Footer;
