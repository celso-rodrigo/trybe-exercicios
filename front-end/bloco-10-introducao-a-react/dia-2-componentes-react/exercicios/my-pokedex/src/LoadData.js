import React from "react";

class LoadData extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.data;

    return (
        <div className="poke-container">
            <div className="poke-img-container">
            <img src={image} alt="Pokémon sprite." />
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{type}</h3>
            <h4>Average Weight:</h4>
            <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
          </div>
        </div>
    )
  }
}

export default LoadData;
