import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

// Qual o nome do componente declarado acima?
// Resposta: O nome do componente é Image.

// Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada.
