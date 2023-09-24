import { ImageList, Pagination } from "@mui/material";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchHeros } from "../../redux/slices/hero";
import { Hourglass } from "react-loader-spinner";

const Main = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { heros } = useSelector((state) => state.hero);
  useEffect(() => {
    dispatch(fetchHeros(page));
  }, [page]);
  if (!heros) {
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["#306cce", "#72a1ed"]}
    />;
  } else {
    return (
      <>
        <ImageList sx={{ width: "100%", height: "100%" }}>
          {heros.items.map((item) => (
            <Card item={item} />
          ))}
        </ImageList>
        <Pagination
          sx={{ margin: 5 }}
          page={page}
          count={heros.pages}
          onChange={(e,value)=>setPage(value)}
          variant="outlined"
        />
      </>
    );
  }
};

export default Main;
