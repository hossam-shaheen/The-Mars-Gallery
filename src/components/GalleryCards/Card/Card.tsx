import { FunctionComponent } from "react";
import classes from "./Card.module.css";

const Card: FunctionComponent<{ marsImage: string }> = ({
  marsImage,
}): JSX.Element => {
  return (
    <div className={classes["card"]}>
      <img src={marsImage} alt="Mars" />
    </div>
  );
};

export default Card;
