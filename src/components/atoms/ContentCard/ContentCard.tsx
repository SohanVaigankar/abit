// styles
import classes from "./ContentCard.module.scss";

type ContentCardProps = {
  title: string;
  shares: number;
  offered: number;
  raised: number;
  thumbnail: string;
};

const ContentCard = (props: ContentCardProps) => {
  const { offered, raised, shares, title, thumbnail } = props;

  const stats = [
    {
      label: "Shares",
      value: shares,
    },
    {
      label: "Offered",
      value: `${offered}%`,
    },
    {
      label: "Raised",
      value: `$${raised}`,
    },
  ];

  return (
    <div className={classes.ContentCardContainer}>
      <img
        className={classes.ContentCardThumbnail}
        src={thumbnail}
        alt={title}
      />
      <div className={classes.ContentCardInfo}>
        <h3 className={classes.ContentTitle}>{title}</h3>
        <div className={classes.ContentStats}>
          {stats.map((item, index) => (
            <div className={classes.ContentStatsItem} key={index}>
              <h5 className={classes.ContentStatsItemLabel}>{item.label}</h5>
              <h5 className={classes.ContentStatsItemValue}>{item.value}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
