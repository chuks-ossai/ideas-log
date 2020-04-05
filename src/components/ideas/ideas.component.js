import React from 'react';
import Idea from '../idea/idea.component';
import CustomButton from '../custom-button/custom-button.component'
import './ideas.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Ideas = props => (
  <div className="Ideas">
    <div className="top">
      <p>
        <b>No. of Ideas:</b> {props.ideas.length}
      </p>
      <div className="action-buttons">
        <CustomButton handleButtonClick={props.handleOpenFormModal}>
          <FontAwesomeIcon icon={faPlus} title="Add New Idea" /> &nbsp;
          Add New
        </CustomButton>
        {props.ideas.length > 1 && (
          <CustomButton handleButtonClick={props.handleDeleteAll}>
            Remove All
          </CustomButton>
        )}
      </div>
    </div>
    {props.ideas.length ? (
      props.ideas.map(idea => (
        <Idea key={idea} idea={idea} handleDeleteOne={props.handleDeleteOne} />
      ))
    ) : (
      <p className="no-data">No ideas entered yet!!!</p>
    )}
  </div>
);

export default Ideas;