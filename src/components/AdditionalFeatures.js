import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useSelector} from 'react-redux';

const AdditionalFeatures = props => {
  const store = useSelector(state=>state.store);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;