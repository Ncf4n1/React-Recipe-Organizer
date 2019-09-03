import React from 'react';
import './App.css';

class Recipe extends React.Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient) => <li>{ingredient} </li>);
    const steps = this.props.steps.map((step) => <li>{step}</li>);
    return (
      <div id='recipeLayout'>
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
        },
        {
          title: 'Toast',
          ingredients: [
            'Bread',
            'Toaster'
          ],
          steps: [
            'Put bread in toast',
            'Run toaster',
            'Eat'
          ]
        }
      ]
    }
  }
  
  changeRecipe(recipe) {
  }
  
  render() {
    return (
      <div id='recipeApp'>
        <div id='recipeSideNav'>
          <h2>Recipe Book</h2>
          <ul id='recipeBookList'>
            {
              this.state.recipes.map((recipe) =>
                <li>
                  <button onClick='changeRecipe' className='recipeBookButton'>
                  {recipe.title}
                  </button>
                </li>
              )
            }
          </ul>
        </div>
        <div id='recipeMainContent'>
          <h1> Recipes </h1>
          <ul>
            <Recipe
              ingredients={this.state.recipes[0].ingredients}
              steps={this.state.recipes[0].steps}
              title={this.state.recipes[0].title}
            />
            </ul>
        </div>
      </div>
    )
  }
}

export default App;
