import { FunctionComponent } from "react";
import Cards from "../../GalleryCards/Cards/Cards";
import classes from "./Content.module.css";

const Content: FunctionComponent<{
  marsImages:
    | {
        id: number;
        img: string;
      }[];
  loading: boolean;
  error: { errorMessage: string } | null;
  imageType: string;
}> = ({ marsImages, error, loading, imageType }): JSX.Element => {
  return (
    <div className={classes["content"]}>
      <h1 className={classes["mars-images-label"]}>
        Mars Images ({imageType})
      </h1>
      {marsImages.length > 0 && <Cards marsImages={marsImages} />}
      {error && !loading && (
        <p className={classes.error}>{error.errorMessage}</p>
      )}
      {loading && !error && <p className={classes.loading}>Loading...</p>}
    </div>
  );
};

export default Content;
