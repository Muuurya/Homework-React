import React, { Component } from "react";
import "./App.css";
export default class extends Component {
  state = {
    count: 0,
    distance: 1,
    users: {
      firstName: "John",
      lastName: "Doe",
      addres: "London",
    },
    user: {
      firstname: "John",
      lastname: "Doe",
      addres: {
        country: {
          title: "England",
          city: {
            title: "London",
            street: "Baker street",
          },
        },
      },
    },
  };
  addCount = () => {
    this.setState({
      count: this.state.count + this.state.distance,
    });
  };
  addDistance = () => {
    this.setState({
      distance: this.state.distance + 1,
    });
  };
  change = () => {
    this.state.users.addres = "Tashkent";
    this.setState({
      addres: this.state.users.addres,
    });
  };
  change2 = () => {
    this.state.user.addres.country.city.street = "Broadway";
    this.setState({
      street: this.state.user.addres.country.city.street,
    });
  };

  render() {
    return (
      <div className="box">
        {/* Bittadan kommentariyadan chiqarib ko'rishingiz mumkin,bittasi kommentariyadan chiqib turganida qolganlari komentariyada turishi kerak */}
        <h1 className="head1">{this.state.count}</h1>
        <button className="btn1" onClick={this.addCount}>
          Step
        </button>
        <h1 className="head2">{this.state.distance}</h1>
        <button className="btn2" onClick={this.addDistance}>
          Distance
        </button>
        {/* <h1 className="head3">{this.state.users.addres}</h1>
        <button className="btn3" onClick={this.change}>
          Change
        </button> */}
        {/* <h1>{this.state.user.addres.country.city.street}</h1>
        <button onClick={this.change2}>Change</button> */}
      </div>
    );
  }
}
