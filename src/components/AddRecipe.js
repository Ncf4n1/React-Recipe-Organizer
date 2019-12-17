import React from 'react';
import {Modal,FormLabel,FormGroup,FormControl,Button} from 'react-bootstrap';

// Component that displays and handles the user adding a new recipe for the book
export class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          title: "",
          ingredients: "",
          steps: ""
    };
    
    this.handleRecipeTitleChange = this.handleRecipeTitleChange.bind(this);
    this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(this);
    this.handleRecipeStepsChange = this.handleRecipeStepsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleCancel = this.handleCancel.bind(this);
  }
  
  // Helper functions that simply update the state for this new recipe
  handleRecipeTitleChange(e) {
    this.setState({title: e.target.value});
  }
  handleRecipeIngredientsChange(e) {
    this.setState({ingredients: e.target.value});
  }
  handleRecipeStepsChange(e) {
    this.setState({steps: e.target.value});
  }
  
  // Function that takes in the user's added info for a new recipe and creates new recipe item
  handleSubmit(e) {
    e.preventDefault();
    const onAdd = this.props.onAdd;
    const regExp = /\s*,\s*/;
    let newTitle = this.state.title;
    let newIngredients = this.state.ingredients.split(regExp);
    let newSteps = this.state.steps.split(regExp);
    let newRecipe = {title: newTitle, ingredients: newIngredients, steps: newSteps};
    onAdd(newRecipe);
    this.setState({title: "", ingredients: "", steps: ""});
  }
  
  // Function that handles the user selecting the cancel button
  handleCancel() {
    const onAddModal = this.props.onAddModal;
    this.setState({title: "", ingredients: "", steps: ""});
    onAddModal();
  }
  
  render() {
    const onShow = this.props.onShow;
    const regex1 = /^\S/;
    const regex2 = /^[^,\s]/;
	  const regex3 = /[^,\s]$/;
    const validRecipe = regex1.test(this.state.title) && regex2.test(this.state.ingredients) && regex3.test(this.state.ingredients) && regex2.test(this.state.steps) && regex3.test(this.state.steps);
    return(
      <Modal show={onShow} onHide={this.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId="addModalName">
            <FormLabel>Recipe Title</FormLabel>
            <FormControl type="text" required onChange={this.handleRecipeTitleChange} value={this.state.title} placeholder="Enter Title" />
          </FormGroup>
          <FormGroup controlId="addModalIngredients">
            <FormLabel>Recipe Ingredients</FormLabel>
            <FormControl type="text" required onChange={this.handleRecipeIngredientsChange} value={this.state.ingredients} placeholder="Enter Ingredients(separate by commas)" />
          </FormGroup>
          <FormGroup controlId="addModalSteps">
            <FormLabel>Recipe Steps</FormLabel>
            <FormControl type="text" required onChange={this.handleRecipeStepsChange} value={this.state.steps} placeholder="Enter Steps(separate by commas)" />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!validRecipe} onClick={this.handleSubmit}>Save Recipe</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};