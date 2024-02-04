// components
import { AddContentCard, ContentCard } from "../../atoms";
// utils & static data
import { creatorData } from "../../../utils/staticData";
// styles
import classes from "./ContentList.module.scss";

const contentStats = [
  {
    label: "Shared Videos",
    value: "1",
  },
  {
    label: "Funds Raised",
    value: "$9510",
  },
  {
    label: "Co-owner Community",
    value: "317",
  },
  {
    label: "Co-owner Earnings",
    value: "3808",
  },
];

type ContentListProps = {};

const ContentList = (props: ContentListProps) => {
  const {} = props;
  return (
    <div className={classes.ContentListContainer}>
      <div className={classes.ContentListHeader}>
        <div className={classes.Titles}>
          <h2 className={classes.MainTitle}>Releases</h2>
          <p className={classes.SubTitle}>
            Videos that you upload in collaboration with aBit appear here.
          </p>
        </div>
        <div className={classes.Info}>
          {contentStats.map((item, index) => (
            <div key={index} className={classes.InfoItem}>
              <h3 className={classes.InfoItemValue}>{item.value}</h3>
              <p className={classes.InfoItemLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.ContentList}>
        <AddContentCard />
        {creatorData.content_list.length > 0
          ? creatorData.content_list.map((item, index) => (
              <ContentCard
                key={index}
                offered={item.offered}
                raised={item.raised}
                shares={item.shares}
                title={item.title}
                thumbnail={item.thumbnail}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ContentList;
