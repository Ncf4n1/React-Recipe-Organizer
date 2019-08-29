import React from 'react';
import './App.css';

class Ingredient extends React.Component {
  render() {
    return (
      <div className=''>
        <p>{this.props.amount} {this.props.measurementType} {this.props.ingredient}</p>
      </div>
    )
  }
}

class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      ingredients: [],
      steps: []
    };
  }
  
  render() {
    return (
      <div className='ingredients'>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="recipeApp">
      </div>
    )
  }
}

export default App;
