// components
import { Band, ContentList } from "../../molecules";

// utils & static data
import { creatorData } from "../../../utils/staticData";

// styles
import classes from "./CreatorPageContent.module.scss";

type CreatorPageContentProps = {
  bannerImg: string;
};

const CreatorPageContent = (props: CreatorPageContentProps) => {
  const { bannerImg } = props;
  return (
    <div className={classes.CreatorPageContentContainer}>
      <img className={classes.BannerImg} src={bannerImg} alt="banner" />
      <Band text={creatorData.band_data} />
      <ContentList />
    </div>
  );
};

export default CreatorPageContent;
