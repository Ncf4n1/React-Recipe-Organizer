import React from 'react';
import '../App.css';

export class Recipe extends React.Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, key) => <li key={key}>{ingredient} </li>);
    const steps = this.props.steps.map((step, key) => <li key={key}>{step}</li>);
    return (
      <div id='recipeLayout'>
        <h2>{this.props.title}</h2>
        <h3>Ingredients</h3>
        <div id='ingredientsList'>
          <ul>{ingredients}</ul>
        </div>
        <h3>Steps</h3>
        <div id='stepsList'>
          <ol>{steps}</ol>
        </div>
      </div>
    )
  }
}