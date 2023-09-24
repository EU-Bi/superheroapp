import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/superhero/${item._id}`}>
      <ImageListItem key={item._id}>
        <img
          width={100}
          height={100}
          srcSet={`http://localhost:4444${item.Images[0]}`}
          src={`http://localhost:4444${item.Images[0]}`}
          alt={item.nickname}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.nickname}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.nickname}`}
            >
              <InfoIcon sx={{ color: "rgba(255, 255, 255, 0.54)" }} />
            </IconButton>
          }
        />
      </ImageListItem>
    </Link>
  );
};

export default Card;
