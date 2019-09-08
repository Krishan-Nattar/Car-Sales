import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../actions/actions';


const AddedFeature = props => {
  return (
    <li>
      <span class="tag is-danger delete-tag">Delete
      <button className="delete is-medium delete-buttonr" onClick={()=>{props.removeItem(props.feature)}} />
      </span>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeItem})(AddedFeature);
