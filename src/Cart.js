import React from 'react';
import CartPart from './CartPart';
import Total from './Total';

export default function Cart(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        return <CartPart 
            selected={props.selected}
            feature={feature}
            idx={idx}
        />
      });
      
      return (
        <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total 
            selected={props.selected}
        />
      </section>
      );
      
}