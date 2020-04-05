import React from 'react';
import './idea-form.component.scss'
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default class IdeaForm extends React.Component {
    state = {
      error: ''
    };
    
  handleFormSubmit = (e) => {
      e.preventDefault();
      
    let newIdea = e.target.elements[0].value.trim();
    const error = this.props.handleAddIdea(newIdea);
    if (error) {
      this.setState(() => ({ error }));
    } else {
      e.target.elements[0].value = '';
      this.setState(() => ({ error: '' }));
      this.props.handleCloseFormModal();
    }
  }
  render() {
    return (
      <Modal
        isOpen={!!this.props.showModalForm}
        contentLabel="Add Idea form"
        onRequestClose={this.props.handleCloseFormModal}
        closeTimeoutMS={200}
        className="idea-form-modal"
      >
        <h3>Add Idea</h3>
        <div className="IdeaForm">
          {this.state.error ? <p className="error-msg">{this.state.error}</p> : null}
          <form className="form" onSubmit={this.handleFormSubmit}>
            <input type="text" name="idea" />
            <button>Add New Idea</button>
          </form>
        </div>
      </Modal>
    );
  }
}