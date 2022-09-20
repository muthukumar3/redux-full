import React, { Fragment, useEffect } from 'react';

export default function Test() {

  useEffect(() => {

    return () => {
      // clear state here
    }
  }, []);

  const multiLineString = `Hi 
  this is Multiline string
  3 lines here`;

    return(
      <Fragment>
        <li> Let Const </li>
        <li> Multi Line String </li>
        {multiLineString}
        <li> Default Parameters </li>
        <li> Template Literals </li>
        <li> Array or Object Destructuring  </li>
      </Fragment>
    );
}
