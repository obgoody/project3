import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import "../App.css"
class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div>
        <div className="container Profile">
          <h1>On the profile page!</h1>
          <p>Username: {this.state.username}</p>
          <p>Email: {this.state.email}</p>
          <Link to="/">Go home</Link>
        </div>

        <div className="card" >
          <img src="https://cdn.gobankingrates.com/wp-content/uploads/2018/03/00-shutterstock_295152104-848x477.jpg" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">My Sale</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
          </div>
        </div>
      
      </div>
    )
  }
}

export default withAuth(Profile);