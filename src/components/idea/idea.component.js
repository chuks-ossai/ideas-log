import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './idea.component.scss';


const Idea = props => (
  <div className="Idea">
    <div className="content">{props.idea}</div>
    <div className="delete-icon" onClick={() => props.handleDeleteOne(props.idea)}>
      <FontAwesomeIcon icon={faTrashAlt} color='red' title="Remove this idea" />
    </div>
  </div>
);

export default Idea;