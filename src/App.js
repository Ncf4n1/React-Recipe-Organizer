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
  render() {
    const ingredients = this.props.ingredients.map((amount, measurementType, ingredient) => <Ingredient amount={amount} measurementType={measurementType} ingredient={ingredient} />);
    const steps = this.props.steps.map((step) => <li>{step}</li>);
    return (
      <div className='recipe_layout'>
        <h2>{this.props.title}</h2>
        <h3>Ingredients</h3>
        <ul>{ingredient}</ul>
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
      recipes = [
        {
          title: 'Salsa',
          ingredients: [
            {
              amount: '1/2',
              measurementType: 'cup',
              ingredient: 'tomato'
            },
            {
              amount: '1/2',
              measurementType: 'cup',
              ingredient: 'red, green, yellow peppers each'
            },
            {
              amount: '1/4',
              measurementType: 'cup',
              ingredient: 'cilantro'
            }
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
      <div className="recipeApp">
        <h1> Recipes </h1>
        <ul>
          <Recipe ingredients={this.state.recipes[0].ingredients} steps={this.state.recipes[0].steps} title={this.state.recipes[0].title} />
        </ul>
      </div>
    )
  }
}

export default App;
