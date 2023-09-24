import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import Main from "./pages/Main";
import Hero from "./pages/Hero";
import AddHero from "./pages/AddHero";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/superhero/:id" element={<Hero />} />
          <Route path="/superhero/:id/edit" element={<AddHero />} />
          <Route path="/create" element={<AddHero />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
