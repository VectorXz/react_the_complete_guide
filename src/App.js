import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent';

class App extends Component {
  state = {
    word: "",
    length: 0
  }

  countTextHandler = (event) => {
    console.log(event.target.value.length);
    this.setState({
      word: event.target.value,
      length: event.target.value.length
    })
  }

  removeTextHandler = (index) => {
    let word = [...this.state.word]
    console.log(word, index)
    word.splice(index, 1)
    console.log(word)
    this.setState({
      word: word.join('')
    })
  }
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.countTextHandler} value={this.state.word} />
        <p>{this.state.length}</p>
        <ValidationComponent length={this.state.length} />
        {this.state.word.split("").map((letter, index) => {
          //console.log(this.state.word.split(""))
          return <CharComponent val={letter} click={() => {this.removeTextHandler(index)}} />
        })}
      </div>
    );
  }
}

export default App;
