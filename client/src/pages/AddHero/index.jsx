import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

const hero = {
  img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  title: "Breakfast",
  author: "@bkristastucchio",
  rows: 2,
  cols: 2,
  featured: true,
};
const AddHero = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [real_name, setRealName] = useState("");
  const [origin_description, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catch_phrase, setCatchPhrase] = useState("");

  const [previewImg, setPreviewImg] = useState([]);

  const inputFileRef = useRef(null);
  const handleChangeFile = async (e) => {
    try {
      const formData = new FormData();
      const files = e.target.files;
      let file;
      for (let i = 0; i < files.length; i++) {
        file = files[i];
        formData.append("image", file);
        const { data } = await axios.post(
          "http://localhost:4444/upload",
          formData
        );
        console.log(data.url);
        setPreviewImg((prev) => [...prev, data.url]);
        formData.delete("image");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const isEditing = Boolean(id);
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:4444/heros/${id}`)
        .then(({ data }) => {
          setNickname(data.nickname);
          setRealName(data.real_name);
          setOriginDescription(data.origin_description);
          setSuperpowers(data.superpowers);
          setPreviewImg(data.Images);
          setCatchPhrase(data.catch_phrase);
        })
        .catch((err) => {
          console.log(err);
          alert("Ошибка получения теста");
        });
    }
  }, []);
  const deletePhoto = () => {
    setPreviewImg([])
  };
  useEffect(() => {
    console.log(previewImg);
  }, [previewImg]);
  const create = async (
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    Images
  ) => {
    const { data } = isEditing
      ? await axios.patch(`http://localhost:4444/heros/${id}`, {
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
          Images,
        })
      : await axios.post("http://localhost:4444/heros", {
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
          Images,
        });
    const _id = isEditing ? id : data._id;
    navigate(`/superhero/${_id}`);
    console.log(id);
  };
  return (
    <>
      <Grid
        sx={{ padding: 10, justifyContent: "center", height: "100%" }}
        container
        spacing={2}
      >
        <Grid item xs={6} md={6}>
          <Button
            onClick={() => inputFileRef.current.click()}
            variant="outlined"
            size="large"
          >
            Загрузить превью
          </Button>
          <Button
            onClick={() => deletePhoto()}
            variant="outlined"
            color="error"
            size="large"
          >
            Очистить фото
          </Button>
          <input
            type="file"
            ref={inputFileRef}
            onChange={handleChangeFile}
            multiple
            hidden
          />
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              margin: 3,
              gap: 3,
            }}
          >
            {previewImg.map((url, i) => (
              <img
                width={100}
                height={100}
                key={i}
                src={`http://localhost:4444${url}`}
                alt="upload"
              />
            ))}
          </Container>
        </Grid>
        <Grid item xs={6} md={6}>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <TextField
                sx={{ width: "100%" }}
                label="Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                variant="outlined"
              />
            </ListItem>
            <ListItem>
              <TextField
                sx={{ width: "100%" }}
                value={real_name}
                onChange={(e) => setRealName(e.target.value)}
                label="Real Name"
                variant="outlined"
              />
            </ListItem>
            <ListItem>
              <TextField
                value={origin_description}
                onChange={(e) => setOriginDescription(e.target.value)}
                sx={{ width: "100%" }}
                label="Origin description"
                variant="outlined"
              />
            </ListItem>
            <ListItem>
              <TextField
                value={superpowers}
                onChange={(e) => setSuperpowers(e.target.value)}
                sx={{ width: "100%" }}
                label="Superpowers"
                variant="outlined"
              />
            </ListItem>
            <ListItem>
              <TextField
                value={catch_phrase}
                onChange={(e) => setCatchPhrase(e.target.value)}
                sx={{ width: "100%" }}
                label="Cath phrase"
                variant="outlined"
              />
            </ListItem>
          </List>
          <Container sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() =>
                create(
                  nickname,
                  real_name,
                  origin_description,
                  superpowers,
                  catch_phrase,
                  previewImg
                )
              }
              variant="contained"
            >
              {isEditing ? "Edit" : "Create"}
            </Button>
            <Link to={"/"}>
              <Button variant="outlined" color="error">
                Reset
              </Button>
            </Link>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default AddHero;
