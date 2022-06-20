import React from 'react';

class UserProfile extends React.Component {
  render() {
    const {name, email, avatar} = this.props.user;
    return (
      <ul>
        <img src={avatar} alt="User avatar."/>
        <li>{name}</li>
        <li>{email}</li>
      </ul>
    )
  }
}

export default UserProfile;
