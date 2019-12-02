import React from 'react';
import {Modal,FormLabel,FormGroup,FormControl,Button} from 'react-bootstrap';


export class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", ingredients: "", steps: ""};
    this.handleRecipeTitleChange = this.handleRecipeTitleChange.bind(this);
    this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(this);
    this.handleRecipeStepsChange = this.handleRecipeStepsChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  
  handleRecipeTitleChange(e) {
    this.setState({title: e.target.value});
  }
  
  handleRecipeIngredientsChange(e) {
    this.setState({ingredients: e.target.value});
  }
  
  handleRecipeStepsChange(e) {
    this.setState({steps: e.target.value});
  }
  
  handleEdit(e) {
    e.preventDefault();
    const onEdit = this.props.onEdit;
    const currentlyEditing = this.props.currentlyEditing;
    const regExp = /\s*,\s*/;
    var title = this.state.title;
    var ingredients = this.state.ingredients.split(regExp);
    var steps = this.state.steps.split(regExp);
    onEdit(title, ingredients, steps, currentlyEditing);
    this.setState({title: "", ingredients: "", steps: ""});
  }
  
  handleCancel() {
    const onEditModal = this.props.onEditModal;
    this.setState({title: this.props.recipe.title, ingredients: this.props.recipe.ingredients.join(","), steps: this.props.recipe.steps.join(",")});
    onEditModal();
  }
  
  render() {
    const onShow = this.props.onShow;
    var regex1 = /^\S/;
    var regex2 = /^[^,\s]/;
	  var regex3 = /[^,\s]$/;
    const validRecipe = regex1.test(this.state.title) && regex2.test(this.state.ingredients) && regex3.test(this.state.ingredients) && regex2.test(this.state.steps) && regex3.test(this.state.steps);
    return(
      <Modal show={onShow} onHide={this.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId="formControlsTitle">
            <FormLabel>Recipe Title</FormLabel>
            <FormControl type="text" required onChange={this.handleRecipeTitleChange} value={this.state.title} placeholder="Enter Title" />
          </FormGroup>
          <FormGroup controlId="formControlsIngredients">
            <FormLabel>Recipe Ingredients</FormLabel>
            <FormControl componentClass="textarea" type="text" required onChange={this.handleRecipeIngredientsChange} value={this.state.ingredients} placeholder="Enter Ingredients(separate by commas)" />
          </FormGroup>
          <FormGroup controlId="formControlsSteps">
            <FormLabel>Recipe Steps</FormLabel>
            <FormControl componentClass="textarea" type="text" required onChange={this.handleRecipeStepsChange} value={this.state.steps} placeholder="Enter Steps(separate by commas)" />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!validRecipe} bsStyle="success" onClick={this.handleEdit}>Save Recipe</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};