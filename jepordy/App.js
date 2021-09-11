import React, { Component } from "react";

/*
Make some html elements like a div where you will display the question, category and points. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).
Make another div in your HTML where you display the answer
Add an on click, that has a function that will toggle whether or not you can see the answer.
Add other elements to your page to make it make sense and look good (see attached image)
Make a div that has an h2 and two buttons
Inside the h2 keep score, start at 0
Make one button add the points to the score and the other to subtract points from the score (just add or subtract 1 point - using the points value from jService is Hungry for More)
Add a little style and color to your app
 */

class Questions extends Component {
  state = {
    question: "",
    answer: "",
    value: "",
    id: "",
    category: "",
    my_score: 0,
  };
  getRandomQuestion = () => {
    fetch("http://jservice.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        let c = data[0];
        console.log(c);

        if (c) {
          this.setState({
            question: c.question,
            answer: c.answer,
            value: c.value,
            // id: c.id,
            category: c.category,
          });
        }
      });
  };

  componentDidMount() {
    console.log("component mounted!");
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  add() {
    this.setState({
      my_score: this.state.my_score + this.state.value,
    });
    console.log(this.state.my_score);
  }
  sub() {
    this.setState({
      my_score: this.state.my_score - this.state.value,
    });
    console.log(this.state.my_score);
  }
  reset() {
    window.location.reload();
  }
  render() {
    return (
      <div>
        {/* Make a button labeled “Random Trivia Question” or “Get Question” 
        or something descriptive. */}

        {/* On click, have this button that will make a GET request 
        (using fetch) to get random trivia data. Let’s start you off with a win
         by giving you the URL: http://jservice.io/api/random */}
        <p>Question: {this.state.question}</p>
        <button onClick={this.getRandomQuestion}> Get Question</button>
        <button onClick={() => this.add()}>Add points</button>
        <button onClick={() => this.sub()}>Sub points</button>
        <button onClick={() => this.reset()}>Reset game</button>
      </div>
    );
  }
}
export default Questions;
