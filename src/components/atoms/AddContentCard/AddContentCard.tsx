// styles
import classes from "./AddContentCard.module.scss";
import AddIcon from "../../../assets/icons/add_icon.png";
const AddContentCard = () => {
  return (
    <div className={classes.AddContentCard}>
      <img src={AddIcon} alt="Add Content" />
      <p className={classes.SupportText}>
        You haven’t uploaded any videos with aBit yet. Add now!
      </p>
    </div>
  );
};

export default AddContentCard;
