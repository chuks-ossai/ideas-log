import React from 'react';
import Header from './components/header/header.component';
import Action from './components/action/action.component';
import Ideas from './components/ideas/ideas.component';
import IdeaForm from './components/idea-form/idea-form.component';
import SelectedIdeaModal from './components/selected-idea-modal/selected-idea-modal.component';
import './App.scss';

class App extends React.Component {
  state = {
    ideas: [],
    selectedIdea: null,
    showModalForm: false
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('ideas');
      const ideas = JSON.parse(json);
      if (ideas) {
        this.setState(() => ({ ideas }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ideas.length !== this.state.ideas.length) {
      const json = JSON.stringify(this.state.ideas);
      localStorage.setItem('ideas', json);
    }
  }
  handleDeleteAll = () => {
    this.setState(() => ({ ideas: [] }));
  };

  handleDeleteOne = option => {
    this.setState(prevState => ({
      ideas: prevState.ideas.filter(idea => idea !== option)
    }));
  };

  handleAddIdea = newIdea => {
    if (!newIdea) {
      return 'Please enter a valid input that describes your idea';
    } else if (this.state.ideas.indexOf(newIdea) != -1) {
      return 'This idea already exists. Check the list and try again';
    }
    this.setState(prevState => ({ ideas: prevState.ideas.concat(newIdea) }));
  };

  selectIdeaToImplement = () => {
    let selected = this.state.ideas[
      Math.floor(Math.random() * this.state.ideas.length)
    ];
    this.setState(() => ({ selectedIdea: selected }));
  };
  handleSelectionConfirmation = () => {
    this.setState(() => ({ selectedIdea: null }));
  };
    handleOpenFormModal = () => {
      this.setState(() => ({showModalForm: true}))
  }
    handleCloseFormModal = () => {
      this.setState((prevState) => ({showModalForm: !prevState.showModalForm}))
  }

  render() {
    const title = 'Idea Logs App';
    const subtitle = 'You can save those beautiful ideas as they come';
    const ideas = this.state.ideas;
    return (
      <div className="App">
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            noIdea={!this.state.ideas.length}
            selectIdeaToImplement={this.selectIdeaToImplement}
          />
          <Ideas
            ideas={ideas}
            handleDeleteAll={this.handleDeleteAll}
            handleDeleteOne={this.handleDeleteOne}
            handleOpenFormModal={this.handleOpenFormModal}
          />
          <IdeaForm
            showModalForm={this.state.showModalForm}
            handleAddIdea={this.handleAddIdea}
            handleOpenFormModal={this.handleOpenFormModal}
            handleCloseFormModal={this.handleCloseFormModal}
          />
          <SelectedIdeaModal
            handleSelectionConfirmation={this.handleSelectionConfirmation}
            selectedIdea={this.state.selectedIdea}
          />
        </div>
      </div>
    );
  }
}

export default App;