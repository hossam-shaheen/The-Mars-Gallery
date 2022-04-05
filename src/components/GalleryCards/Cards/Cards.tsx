import { FunctionComponent } from "react";
import Card from "../Card/Card";
import classes from "./Cards.module.css";

const Cards: FunctionComponent<{
  marsImages: {
    id: number;
    img: string;
  }[];
  imageType: string;
}> = ({ marsImages, imageType }): JSX.Element => {
  return (
    <ul className={classes["cards"]}>
      {marsImages?.length > 0 &&
        marsImages.map((marsImage: { id: number; img: string }) => {
          return (
            <Card
              key={marsImage.id}
              marsImage={marsImage.img}
              imageType={imageType}
            />
          );
        })}
    </ul>
  );
};

export default Cards;
