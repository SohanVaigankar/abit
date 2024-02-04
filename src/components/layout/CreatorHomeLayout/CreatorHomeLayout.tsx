// components
import { Navbar, Footer } from "../../atoms";
import { CreatorPageContent } from "../../organisms";

// utils & static data
import { creatorData } from "../../../utils/staticData";

// styles
import classes from "./CreatorHomeLayout.module.scss";

const CreatorHomeLayout = () => {
  return (
    <div className={classes.Layout}>
      <Navbar profileImg={creatorData.profile_img} />
      <CreatorPageContent bannerImg={creatorData.banner_img} />
      <Footer />
    </div>
  );
};

export default CreatorHomeLayout;
