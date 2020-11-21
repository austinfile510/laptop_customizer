import React from 'react';

import Part from './Part';


export default function Customize(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        return <Part
        feature={feature}
        updateFeature={props.updateFeature}
        idx={idx}
        features={props.features}
        selected={props.selected} />
      });
    return (
        <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    ) 


}