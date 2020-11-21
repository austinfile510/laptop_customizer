import React from 'react';
import PartOption from './PartOption';


export default function Part(props) {
    const {feature, idx} = props;
    const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          return <PartOption 
            item={item}
            updateFeature={props.updateFeature}
            selected={props.selected}
            feature={feature}
          />
        });
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
}