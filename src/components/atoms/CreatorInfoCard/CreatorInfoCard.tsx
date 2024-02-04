// styles
import classes from "./CreatorInfoCard.module.scss";

type CreatorInfoCardProps = {
  name: string;
  picture: string;
  channel_name: string;
  bio: string;
  type: "fan" | "creator";
};

const CreatorInfoCard = (props: CreatorInfoCardProps) => {
  const { bio, channel_name, name, picture, type } = props;
  return (
    <div className={classes.CardContainer}>
      <img
        className={classes.ProfilePicture}
        src={picture}
        alt={`${name}'s pic`}
      />
      <div className={classes.CardInfo}>
        <div className={classes.NameSection}>
          <h3 className={classes.UserName}>{name.toLocaleUpperCase()}</h3>
          <span className={classes.UserChannel}>{channel_name}</span>
        </div>
        <div className={classes.BioContainer}>
          <label>Bio</label>
          <p className={classes.Bio}>{bio}</p>
        </div>
        <div className={classes.UserTypeTab}>
          <div
            className={`${classes.UserType} ${
              type === "creator" ? classes.Active : ""
            }`}
          >
            Creator
          </div>
          <div
            className={`${classes.UserType} ${
              type === "fan" ? classes.Active : ""
            }`}
          >
            Fan
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorInfoCard;
