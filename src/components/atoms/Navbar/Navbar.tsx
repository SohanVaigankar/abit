// styles
import classes from "./Navbar.module.scss";

// assets
import bellIcon from "../../../assets/icons/bell_icon.png";
import expandIcon from "../../../assets/icons/expand_arrow_down.png";
import walletIcon from "../../../assets/icons/wallet_icon.png";

type Navbarprops = {
  profileImg: string;
};

const Navbar = (props: Navbarprops) => {
  const { profileImg } = props;
  return (
    <nav className={classes.Navbar}>
      <div className={classes.Logo}>
        <a href="#">aBit</a>
      </div>
      <div className={classes.NavLinks}>
        <button className={classes.NewVideoBtn}>Share New Video</button>
        <a href="#">
          <img src={walletIcon} alt="earnings" />
        </a>
        <a href="#">
          <img src={bellIcon} alt="notifications" />
        </a>
        <a className={classes.Profile}>
          <img src={profileImg} alt="profile" />
        </a>
        <a className={classes.ExpandMenu}>
          <img src={expandIcon} alt="expand menu" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
