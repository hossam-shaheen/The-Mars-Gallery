import { FunctionComponent } from "react";
import Card from "../Card/Card";
import classes from "./Cards.module.css";

const Cards: FunctionComponent<{
  marsImages: {
    id: number;
    img: string;
  }[];
}> = ({ marsImages }): JSX.Element => {
  return (
    <ul className={classes["cards"]}>
      {marsImages?.length > 0 &&
        marsImages.map((marsImage: { id: number; img: string }) => {
          return <Card key={marsImage.id} marsImage={marsImage.img} />;
        })}
    </ul>
  );
};

export default Cards;
