import React, { useState } from 'react';
import Gato from './components/gato';
import Button from './components/boton';


function App() {
  const [refresh, setRefresh] = useState(false);
  const [catImages, setCatImages] = useState([]);
  const [empty, setEmpty] = useState(false);

//////////////////
  function handleRefresh() {
    setRefresh(!refresh);
  }
  //////////////
  function handleImageLoaded(imageUrl) {
    setCatImages(catImages.concat(imageUrl));
  }
//////////////
  function handleEmptyClick() {
    setEmpty(true);
    setCatImages([]);
  }
///////////////

  return (
    <div>
      <Button onClick={handleRefresh} text="Añadir gato"  />
      <Button onClick={handleEmptyClick} text="Vaciar manada" />
      <Gato onImageLoaded={handleImageLoaded} key={refresh} />

      <div className="container">
      <div className="row">
        {catImages.map(imageUrl => (
          <div className="col-sm-4">
            <img key={imageUrl} src={imageUrl} alt="Gato" className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;


