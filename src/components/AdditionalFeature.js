import React from 'react';
import {connect} from 'react-redux';
import {buyItem} from '../actions/actions';

const AdditionalFeature = props => {

  return (
    <li>
      <button className="button is-success" onClick={(e)=>props.buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {buyItem})(AdditionalFeature);
