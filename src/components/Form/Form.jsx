import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './Form.styled';

class ContactForm extends Component {
  static proppTypes = {
    onSubmit: PropTypes.func.isRequired,
    contactNameList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };
  DEFAULT_STATE = {
    name: '',
    number: '',
  };

  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { contactNameList, onSubmit } = this.props;
    const { name } = this.state;
    const findIsIncludeName = !contactNameList.filter(
      contactName => contactName.toLowerCase() === name.toLowerCase()
    ).length;

    if (findIsIncludeName) {
      onSubmit({
        contact: this.state,
      });
    } else {
      alert(`${name} is already in contacts`);
    }

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...this.DEFAULT_STATE });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          id=""
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleNameChange}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
