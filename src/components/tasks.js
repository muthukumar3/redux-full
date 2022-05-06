import React, {Fragment} from 'react';

export default function Tasks() {

  function helperOrOuterFunction() {
      let counter = 0;
      return{
        add : function(newVal) {
          counter += newVal
        },
        show : function() {
          return `Currently the private value is ${counter}`;
        }
      }
  }
  var helper = helperOrOuterFunction();
  helper.add(324);

  (function IIFE() {
    console.log('IIFE function called');
  })();

  return (
    <Fragment>
      <section>

        <div className="card">
          <div className="card-title text-center">
            <h5>Clousers</h5>
          </div> 
          <pre>
            Create one function and add another function inside helper function, and can access helper function params inside child function, 
            it store data still like const variable 
          </pre>
            <h5>{ helper.show() }</h5>
        </div> 
      </section>

      <section>
        <div className="card">
          <div className="card-title text-center">
            <h5>IIFE - Immediatly invoked function excecution </h5>
          </div> 
          <pre>
          It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created:
          </pre> 
        </div> 
      </section>      
    </Fragment>
  );
}
