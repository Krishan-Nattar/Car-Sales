import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../actions/actions';


const AddedFeature = props => {
  return (
    <li>
      <button className="button is-danger" onClick={()=>{props.removeItem(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeItem})(AddedFeature);
