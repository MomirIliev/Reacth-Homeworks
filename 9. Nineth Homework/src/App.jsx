import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import axios from "axios";
import { API_URL } from "./utils/constants";
import "./css/App.css";
import { GalleryContext, AlbumsContext } from "./utils/GalleryContext";
import { Albums } from "./components/Albums";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [albums, setAlbums] = useState([]);

  // useEffect(() => {
  //   console.log(albums);
  // }, [albums]);

  useEffect(() => {
    axios(`${API_URL}/photos`)
      .then((res) => setPhotos(res.data))
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    axios(`${API_URL}/albums`)
      .then((res) => setAlbums(res.data))
      .catch((error) => alert(error));
  }, []);

  // function openPhoto(url){
  //   setSelectedImage(url);
  //   console.log(url)
  // }

  // function closePhoto(){
  //   setSelectedImage("");
  // }

  return (
    <div id="app">
      <Nav />
      <GalleryContext.Provider
        value={{ selectedImage, setSelectedImage, photos, setPhotos }}
      >
        <AlbumsContext.Provider value={{ albums, setAlbums }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gallery"
              element={
                <Gallery
                  listOfPhotos={photos}
                  // setImage={openPhoto}
                  // selektiranaSlika={selectedImage}
                  // removePhoto={closePhoto}
                />
              }
            />
            <Route path="/albums" element={<Albums />} />
          </Routes>
        </AlbumsContext.Provider>
      </GalleryContext.Provider>
    </div>
  );
}
