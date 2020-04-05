import React from 'react';
import Modal from 'react-modal';
import CustomButton from '../custom-button/custom-button.component'
import './selected-idea-modal.component.scss'
Modal.setAppElement('#root');

const SelectedIdeaModal = props => (
  <Modal
    isOpen={!!props.selectedIdea}
    contentLabel="Selected Idea Modal"
    onRequestClose={props.handleSelectionConfirmation}
    closeTimeoutMS={200}
    className="selected-idea-modal"
  >
    <h3 className="title">Selected Idea</h3>
    <div className="body">{props.selectedIdea}</div>
    <CustomButton handleButtonClick={props.handleSelectionConfirmation}>
       OKAY Got It
    </CustomButton>
    {/* <button onClick={() => props.handleSelectionConfirmation()}>OKAY</button> */}
  </Modal>
);

export default SelectedIdeaModal;