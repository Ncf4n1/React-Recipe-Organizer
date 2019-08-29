import React from 'react';
import './App.css';

class Ingredient extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.ingredient}</p>
      </div>
    )
  }
}

class Recipe extends React.Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient) => <Ingredient ingredient={ingredient} />);
    const steps = this.props.steps.map((step) => <li>{step}</li>);
    return (
      <div className='recipe_layout'>
        <h2>{this.props.title}</h2>
        <h3>Ingredients</h3>
        <ul>{ingredients}</ul>
        <h3>Steps</h3>
        <ol>{steps}</ol>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [
        {
          title: 'Salsa',
          ingredients: [
            '1/2 cup tomato',
            '1/2 cup green, yellow, red peppers each',
            '1/4 cup cilantro'
          ],
          steps: [
            'Cut up tomato into medium bowl',
            'Cut up peppers into bowl',
            'Dice cilantro and add to bowl',
            'Mix and serve with your favorite chips'
          ]
        }
      ]
    }
  }
  
  render() {
    return (
      <div className='recipeApp'>
        <h1> Recipes </h1>
        <ul>
          <Recipe ingredients={this.state.recipes[0].ingredients} steps={this.state.recipes[0].steps} title={this.state.recipes[0].title} />
        </ul>
      </div>
    )
  }
}

export default App;
