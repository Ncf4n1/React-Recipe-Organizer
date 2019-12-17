import React from 'react';
import {Modal,FormLabel,FormGroup,FormControl,Button} from 'react-bootstrap';

// Component that allows the user to update information for an existing recipe
export class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          title: '',
          ingredients: '',
          steps: ''
    };
    
    this.handleRecipeTitleChange = this.handleRecipeTitleChange.bind(this);
    this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(this);
    this.handleRecipeStepsChange = this.handleRecipeStepsChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  
  // Helper functions that updates state information for user added info
  handleRecipeTitleChange(e) {
    this.setState({title: e.target.value});
  }
  
  handleRecipeIngredientsChange(e) {
    this.setState({ingredients: e.target.value});
  }
  
  handleRecipeStepsChange(e) {
    this.setState({steps: e.target.value});
  }
  
  // Function that handles the user submitting updated info for a recipe
  handleEdit(e) {
    e.preventDefault();
    const onEdit = this.props.onEdit;
    const currentlyEditing = this.props.currentlyEditing;
    const regExp = /\s*,\s*/;
    let title = this.state.title;
    let ingredients = this.state.ingredients.split(regExp);
    let steps = this.state.steps.split(regExp);
    onEdit(title, ingredients, steps, currentlyEditing);
    this.setState({title: '', ingredients: '', steps: ''});
  }
  
  // Helper function that allows the user to exit the popup box
  handleCancel() {
    const onEditModal = this.props.onEditModal;
    this.setState({title: this.props.recipe.title, ingredients: this.props.recipe.ingredients.join(','), steps: this.props.recipe.steps.join(',')});
    onEditModal();
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
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId='editModalTitle'>
            <FormLabel>Recipe Title</FormLabel>
            <FormControl type='text' required onChange={this.handleRecipeTitleChange} value={this.state.title} placeholder='Enter Title' />
          </FormGroup>
          <FormGroup controlId='editModalIngredients'>
            <FormLabel>Recipe Ingredients</FormLabel>
            <FormControl componentClass='textarea' type='text' required onChange={this.handleRecipeIngredientsChange} value={this.state.ingredients} placeholder='Enter Ingredients(separate by commas)' />
          </FormGroup>
          <FormGroup controlId='editModalSteps'>
            <FormLabel>Recipe Steps</FormLabel>
            <FormControl componentClass='textarea' type='text' required onChange={this.handleRecipeStepsChange} value={this.state.steps} placeholder='Enter Steps(separate by commas)' />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!validRecipe} bsStyle='success' onClick={this.handleEdit}>Save Recipe</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};