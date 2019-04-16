import React from 'react'

class Profile extends React.Component {
  state = {
    name: '',
    bio: '',
    messageMeIf: ''
  }
  render() {
    return (
      <div>
        <h1>Welcome back Pocket</h1>
        <img src="https://www.bourbonblog.com/wp-content/uploads/2010/11/brad-pitt.jpg" alt="Brad Pitt" />
        <h3>About You</h3>
        <p>I'm a badass who does badass things. My name is Brad Pitt</p>
        <h3>Hobbies</h3>
        <p>Basketball, baseball, hanging around shirtless (I'm allergic to specific clothing)</p>
        <h3>Message me if:</h3>
        <p>If you want to talk about fight club, or talk about disorders related to wearing clothing</p>
      </div>
    )
  }
}

export default Profile
