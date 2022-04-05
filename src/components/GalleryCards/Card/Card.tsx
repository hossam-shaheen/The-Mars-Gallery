import { FunctionComponent } from "react";
import classes from "./Card.module.css";

const Card: FunctionComponent<{ marsImage: string; imageType: string }> = ({
  marsImage,
  imageType,
}): JSX.Element => {
  return (
    <div className={classes["card"]}>
      <img src={marsImage} alt={`Mars-${imageType}`} />
    </div>
  );
};

export default Card;
