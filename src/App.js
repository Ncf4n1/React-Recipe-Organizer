import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './App.css';

class Recipe extends React.Component {
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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeRecipe = this.changeRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Salsa',
          ingredients: [
            '2 14oz (or 1 26oz) can(s) diced tomatoes',
            '1 small can tomato sauce',
            '1 can El pato duck sauce',
            '1/2 chopped onion',
            'Chopped cilantro',
            'Garlic salt'
          ],
          steps: [
            'Mix tomatoes, tomato sauce, and El pato into medium bowl',
            'Mix in onions, cilantro, and garlic salt into bowl',
            'Serve with tortilla chips'
          ]
        },
        {
          title: 'Banana Bread',
          ingredients: [
            '2 eggs',
            '1/2 cup sugar',
            '1 cup sour cream',
            '1 teaspoon soda',
            '1/4 teaspoon salt',
            '1 cup mashed bananas',
            '2 cups flour',
            '1 teaspoon baking powder',
            'Nuts'
          ],
          steps: [
            'Mix ingredients into baking bowl',
            'Bake at 350 degrees for 50-55 minutes',
            'Mixture makes one medium loaf'
          ]
        },
        {
          title: 'Mini Caramel Rolls',
          ingredients: [
            '1/3 cup packed brown sugar',
            '1/3 cup cubed butter',
            '2 tablespoons light corn syrup',
            '1-1/2 teaspoons 2% milk',
            '1 tube (8oz) refrigerated crescent rolls',
            '2 teaspoons Imperial Sugar / Dixie Crystals Granulated Sugar',
            '1/2 teaspoon ground cinnamon'
          ],
          steps: [
            'Combine brown sugar, butter, corn syrup, and milk into small saucepan',
            'Cook and stir over medium heat until butter melts and sugar is dissolved',
            'Pour mix into greased 9 inch pie plate',
            'Separate crescent dough into four rectangles and gently press to seal',
            'Combine sugar and cinnamon into a small bowl and sprinkle over rectangles',
            'Roll up rectangles jelly-style starting with the long side and pinch seams to seal',
            'Cut each rectangles into nine slices and place cut side down in ready pie plate',
            'Bake at 375 degrees for 15-18 minutes or until golden',
            'Let cool in pie plate for 1 minute before flipping onto serving plate',
            'This recipe yields 12 rolls'
          ]
        },
        {
          title: 'Buttermilk-Pineapple Carrot Cake',
          ingredients: [
            '2 cups all-purpose flour',
            '2 cups sugar',
            '2 teaspoons baking soda',
            '1-1/2 teaspoons ground cinnamon',
            '1 teaspoon baking powder',
            '1/4 teaspoon salt',
            '2 cups finely shredded carrots',
            '1/4 cup buttermilk or sour milk',
            '1/4 cup cooking oil',
            '1 8-1/4oz can crushed pineapple, drained',
            '1 cup chopped walnuts',
            '3 eggs',
            '1/2 cup coconut',
            '1 teaspoon vanilla',
            '1 recipe Buttermilk Glaze',
            '1 recipe Cream Cheese Frosting',
            '1/2 cup chopped walnuts (topping)'
          ],
          steps: [
            'Grease 13x9x2 inch baking pan or grease and flour two 9x1-1/2 inch round baking pans',
            'Combine flour, sugar, baking soda, cinnamon, baking powder, and salt in a large mixing bowl',
            'Add shredded carrots, buttermilk or sour milk, cooking oil, drained pineapple, 1 cup nuts, eggs, coconut, and vanilla',
            'Stir until combined and spread into baking pan(s)',
            'Bake at 350 degrees for 40-45 minutes or until cake springs when touched',
            'Combine 1/2 cup sugar, 1/4 cup buttermilk or sour milk, 1/4 cup butter, and 2 teaspoons light-colored corn syrup in a medium saucepan',
            'Bring mixture to boiling',
            'Cook and stir mixture for 4 minutes',
            'Remove saucepan from heat and stir in vanilla to create Buttermilk Glaze',
            'Pour Buttermilk Glaze over top of cake',
            'Cool layers of cake in pans on wire rack for 15 minutes',
            'Remove cakes and cool on racks',
            'Frost with Cream Cheese Frosting and sprinkle with 1/2 cup of nuts'
          ]
        },
        {
          title: 'Cream Cheese Frosting',
          ingredients: [
            '8oz cream cheese',
            '1/4 cup butter',
            '1 teaspoon vanilla',
            '1 16oz package (4 cups) powdered sugar'
          ],
          steps: [
            'Mix ingredients at room temperature into small bowl',
            'Put in refrigerator overnight to let cool',
            'Spread on your favorite dessert'
          ]
        },
        {
          title: 'Crab Dip',
          ingredients: [
            '1 8oz package softened cream cheese',
            '1/2 cup mayonnaise',
            '1/2 cup sliced green onion',
            '1/2 cup chopped celery',
            '2 tablespoons lemon juice',
            '1 package (8oz) crab meat, chopped',
          ],
          steps: [
            'Mix ingredients together in serving bowl',
            'Chill several hours in refrigerator',
            'Serve and enjoy'
          ]
        }
      ],
      currentRecipe: null
    }
  }
  
  changeRecipe(recipeButton) {
    const recipeTitle = recipeButton.target.id.split('_')[0];
    const recipesByTitle = this.state.recipes.filter((recipe) => recipe.title === recipeTitle);
    if (recipesByTitle.length > 0)
    {
      this.setState({
        currentRecipe: recipesByTitle[0]
      });
    }
  }
  
  addRecipe() {
    
  }
  
  render() {
    let currentRecipe = this.state.currentRecipe;
    return (
      <div id='recipeApp'>
        <div id='recipeSideNav'>
          <h2>Recipe Book</h2>
          <ul id='recipeBookList'>
            {
              this.state.recipes.map((recipe) =>
                <li key={recipe.title}>
                  <button
                    id={recipe.title + '_button'}
                    onClick={this.changeRecipe}
                    className='recipeBookButton'
                  >
                  {recipe.title}
                  </button>
                </li>
              )
            }
          </ul>
        </div>
        <div id='recipeMainContent'>
          {
            currentRecipe ?
            <Recipe
              ingredients={currentRecipe.ingredients}
              steps={currentRecipe.steps}
              title={currentRecipe.title}
            />
            : null
          }
        </div>
      </div>
    )
  }
}

export default App;
