import { useCallback, useEffect, useMemo, useState } from "react";
import Content from "../../components/UI/Content/Content";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import { throttle } from "lodash";
import classes from "./Home.module.css";

const Home = () => {
  const [marsImages, setMarsImages] = useState<
    { id: number; img: string }[] | []
  >([]);

  const [currentMarsImages, setCurrentMarsImages] = useState<
    { id: number; img: string }[] | []
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ errorMessage: string } | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [imageType, setImageType] = useState<string>("curiosity");

  const fetchMarsPhotos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${imageType}/photos?sol=1000&page=${currentPage}&api_key=DEMO_KEY`
      );
      const { photos } = await response.json();

      const marsImages =
        photos.length > 0
          ? photos.map((photo: { id: number; img_src: string }) => {
              return {
                id: photo.id,
                img: photo.img_src,
              };
            })
          : [];
      setCurrentMarsImages(marsImages);
      setMarsImages((prevMarsImages: { id: number; img: string }[]) => [
        ...prevMarsImages,
        ...marsImages,
      ]);
    } catch (error) {
      if (error) {
        setError({
          errorMessage: "Failed to fetch Mars photos",
        });
      }
    }
    setLoading(false);
  }, [currentPage, imageType]);

  useEffect(() => {
    if (currentMarsImages.length === 0 && currentPage === 1) {
      fetchMarsPhotos();
    } else if (currentMarsImages.length > 0 && currentPage !== 1) {
      fetchMarsPhotos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, imageType]);

  const infiniteScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", throttle(infiniteScroll, 1000));

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infiniteScroll]);

  const onSelect = (option: string) => {
    setCurrentPage(1);
    setMarsImages([]);
    setCurrentMarsImages([]);
    setImageType(option);
  };

  return (
    <div className={classes["home"]}>
      <Sidebar onSelect={onSelect} />
      <Content
        imageType={imageType}
        loading={loading}
        error={error}
        marsImages={marsImages}
      />
    </div>
  );
};

export default Home;
