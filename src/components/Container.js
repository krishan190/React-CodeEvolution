import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbaf_HakkHpS1xo5u1MBTEZ23AnOn5TLE",
  authDomain: "kk-survery.firebaseapp.com",
  databaseURL: "https://kk-survery-default-rtdb.firebaseio.com",
  projectId: "kk-survery",
  storageBucket: "kk-survery.appspot.com",
  messagingSenderId: "280748354701",
  appId: "1:280748354701:web:10b8662aacd2ca9c9546c4",
};

if (firebase.apps.length < 0) {
  firebase.initializeApp(firebaseConfig);
}

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      questions: {
        q1: null,
        q2: null,
        q3: null,
        other: null,
      },
      isSubmitted: false,
    };
  }

  detailsSubmitHandler = (e) => {
    const name = e.target.name.value;
    const email = e.target.email.value;

    this.setState({ name, email });
    e.preventDefault();
    const database = firebase.database();
    database.ref("survey/" + this.state.id).set({
      name: this.state.name,
      email: this.state.email,
      questions: this.state.questions,
    });
  };

  questionSubmitHandler = (e) => {
    const questions = {};

    questions.q1 = e.target.q1.value;
    questions.q2 = e.target.q2.value;
    questions.q3 = e.target.q3.value;
    questions.other = e.target.other.value;

    this.setState({ questions });
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">kkTech Survey</h1>
          </div>
        </div>
        {this.state.name === null && this.state.email === null ? (
          <Details submit={this.detailsSubmitHandler} />
        ) : (
          <Question submit={this.questionSubmitHandler} />
        )}
      </>
    );
  }
}

export default Container;
