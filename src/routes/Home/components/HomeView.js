import React from 'react'
import { Button } from 'antd';


class  HomeView extends React.Component{

  render(){
    return(
      <div className="HomepageDiv">
      <h1>Polling System</h1>
      <br />
      <Button type="primary">Login</Button>
      <Button type="primary" className="SignUpButton">Signup</Button>
      </div>
    );
  }
}

export default HomeView
