import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const hero = {
  img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  title: "Breakfast",
  author: "@bkristastucchio",
  rows: 2,
  cols: 2,
  featured: true,
};
const Hero = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  const [currentImg, setCurrentImg] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4444/heros/${id}`)
      .then((res) => {
        setData(res.data);
        setCurrentImg(res.data.Images[0]);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка получения теста");
      });
  }, []);
  const deleteHero = (id) => {
    axios.delete(`http://localhost:4444/heros/${id}`).then(() => {
      navigate("/");
    });
  };
  if (!data) {
    return (
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    );
  } else {
    return (
      <>
        <Grid
          sx={{ padding: 10, justifyContent: "center", height: "100%" }}
          container
          spacing={2}
        >
          <Grid item xs={6} md={6}>
            <img
              src={`http://localhost:4444${currentImg}`}
              width={"100%"}
              height={600}
              alt=""
            />
            <Stack direction={"row"} spacing={2}>
              {data.Images.map((img) => (
                <Avatar
                  onClick={() => setCurrentImg(img)}
                  sx={{ width: 80, height: 80, margin: 10 }}
                  alt={hero.title}
                  src={`http://localhost:4444${img}`}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemText primary="Nickname" secondary={data.nickname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Real Name" secondary={data.real_name} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Origin description"
                  secondary={data.origin_description}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Superpowers"
                  secondary={data.superpowers}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Cath phrase"
                  secondary={data.catch_phrase}
                />
              </ListItem>
              <Container
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Link to={`/superhero/${id}/edit`}>
                  <Button variant="contained">Edit</Button>
                </Link>

                <Button onClick={() => deleteHero(id)} color="error" variant="contained">
                  Delete
                </Button>
              </Container>
            </List>
          </Grid>
        </Grid>
      </>
    );
  }
};

export default Hero;
