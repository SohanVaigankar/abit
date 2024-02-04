// components
import { CreatorInfoCard } from "../../atoms";
// utils & static data
import { creatorData } from "../../../utils/staticData";
// style
import classes from "./Band.module.scss";
type BandProps = {
  text: string;
};

const Band = (props: BandProps) => {
  const { text } = props;
  return (
    <div className={classes.BandContainer}>
      <p>{text}</p>
      <div className={classes.CreatorInfoCard}>
        <CreatorInfoCard
          bio={creatorData.bio}
          channel_name={creatorData.channel_name}
          name={`${creatorData.first_name} ${creatorData.last_name}`}
          picture={creatorData.profile_img}
          type="creator"
        />
      </div>
    </div>
  );
};
export default Band;
