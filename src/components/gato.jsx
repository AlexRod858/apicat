import React, { useState } from 'react';

class Gato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    };
  }

  componentDidMount() {
    this.fetchCatImage();
  }

   fetchCatImage() {
     fetch ('https://api.thecatapi.com/v1/images/search')
      .then(response =>response.json())
      .then(data => {
        const imageUrl = data[0].url;
        this.setState({ imageUrl });
        this.props.onImageLoaded(imageUrl); // Llama a la función que recibe el array de imágenes
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }} className="container">
        <div className="container">
        <h1>GATOS</h1>
        <img className=" img-thumbnail" style={{ maxWidth: '200px', maxHeight: '200px' }} src={this.state.imageUrl} alt="Imagen de un gato" />
      </div>
      </div>
      
    );
    
  }
}

export default Gato;