import React, { Component } from 'react';

class PersonalData extends Component {
  render () {
    const { handleChanges, removeNumbers, state} = this.props;

    return (
      <fieldset>
        <input type="name" placeholder="Nome" maxLength={40} required name='username' onChange={handleChanges} value={state.username} />
        <input type="email" placeholder="Email" maxLength={50} required name='userEmail' onChange={handleChanges} value={state.userEmail}/>
        <input type="text" placeholder="CPF" maxLength={11} required name='userCPF' onChange={handleChanges} value={state.userCPF}/>
        <input type="text" placeholder="Endereço" maxLength={200} required name='userAdress' onChange={handleChanges} value={state.userAdress}/>
        <input type="text" placeholder="Cidade" maxLength={28} required name='userCity' onChange={handleChanges} onBlur={removeNumbers} value={state.userCity}/>
        <select required name='userState' onChange={handleChanges} value={state.userState}>Estado
          <option value="AC">"AC"</option>
          <option value="AL">"AL"</option>
          <option value="AP">"AP"</option>
          <option value="AM">"AM"</option>
          <option value="BA">"BA"</option>
          <option value="CE">"CE"</option>
          <option value="DF">"DF"</option>
          <option value="ES">"ES"</option>
          <option value="GO">"GO"</option>
          <option value="MA">"MA"</option>
          <option value="MT">"MT"</option>
          <option value="MS">"MS"</option>
          <option value="MG">"MG"</option>
          <option value="PA">"PA"</option>
          <option value="PB">"PB"</option>
          <option value="PR">"PR"</option>
          <option value="PE">"PE"</option>
          <option value="PI">"PI"</option>
          <option value="RJ">"RJ"</option>
          <option value="RN">"RN"</option>
          <option value="RS">"RS"</option>
          <option value="RO">"RO"</option>
          <option value="RR">"RR"</option>
          <option value="SC">"SC"</option>
          <option value="SP">"SP"</option>
          <option value="SE">"SE"</option>
          <option value="TO">"TO"</option>
        </select>

        <div className='radio-container'>
          <p>Tipo:</p>
          <label htmlFor='radio-house'>Casa
            <input type='radio' id='radio-house' name='houseType' value='house' onChange={handleChanges}></input>
          </label>
          <label htmlFor='radio-apartment'>Apartamento
            <input type='radio' id='radio-apartment' name='houseType' value='apartment' onChange={handleChanges}></input>
          </label>
        </div>
      </fieldset>
    )
  }
}

export default PersonalData;
