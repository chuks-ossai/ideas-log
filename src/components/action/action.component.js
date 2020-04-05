import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './action.component.scss';


const Action = props => (
  <div className="Action">
    <h3>Let System Help You Select Idea to Implement?</h3>
    <CustomButton
      disable={props.noIdea}
      handleButtonClick={props.selectIdeaToImplement}
    >
      Yes Help Me
    </CustomButton>
  </div>
);

export default Action;