import React, { Component } from 'react';

class ProfissionalData extends Component {
  render () {
    const { handleChanges } = this.props;

    return (
      <fieldset>
        <textarea cols="30" rows="10" maxLength={1000} placeholder='Resumo do currículo:' required onChange={handleChanges}></textarea>
        <textarea cols="30" rows="10" maxLength={40} placeholder='Cargo:' required onMouseEnter={() => alert('Preencha com cuidado está informação!')} onChange={handleChanges}></textarea>
        <input type='text' max={500} placeholder='Descrição do cargo' required onChange={handleChanges}></input>
      </fieldset>
    )
  }
}

export default ProfissionalData;
