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

  const add = (a, b) => a + b;

  const higher_order_comp = (a, adds) => {
    return adds(a, a  * 10);
  }
  console.log(higher_order_comp(10, add));

  return (
    <div className='shadow p-3 bg-body card rounded'>
        <div className="card m-3 shadow p-3 bg-body rounded">
          <div className="card-title text-center">
            <h5>Clousers</h5>
          </div> 
          <p>
            Create one function and add another function inside helper function, and can access helper function params inside child function, 
            it store data still like const variable 
          </p>
          <h5 className='text-center'>{ helper.show() }</h5>
        </div> 
 
        <div className="card m-3 shadow p-3 bg-body rounded">
          <div className="card-title text-center">
            <h5>IIFE - Immediatly invoked function excecution </h5>
          </div> 
          <pre>
            It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created:
          </pre> 
        </div>  
 
        <div className="card m-3 shadow p-3 bg-body rounded">
          <div className="card-title text-center">
            <h5>Higher Order Components</h5>
          </div> 
          <p>
          HOC is an advanced technique for reusing component logic. It is a function that takes a component and returns a new component. According to the official website, it is not the feature(part) in React API, but a pattern that emerges from React compositional nature. <br/>
          
          A higher order component function accepts another function as an argument. The map function is the best example to understand this. The main goal of this is to decompose the component logic into simpler and smaller functions that can be reused as you need.
          </p> 
          <pre>
          const add = (a, b) => a + b;<br/>

        const higher_order_comp = (a, add_function_oda_dynamic_name) =  {
          'return add_function_oda_dynamic_name(a, a  * 10)'
        }
        <br/>
          Answer Is <>{higher_order_comp(10, add)}</>
          </pre>
        </div> 
    </div>
  );
}
