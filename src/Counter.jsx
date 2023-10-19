import { useState } from 'react'
import CountDisplay from './CountDisplay';

function Counter() {

  //Variables
  const [count, setCount] = useState(0);

  //Increment Function
  const increment = () => {
    setCount((count) => count + 1);
  }

  //decrement Function
  const decrement = () => {
    if(count <= 0) {
      return;
    } else {
      setCount((count) => count - 1);
    }
  }

  return (
    <>
      <section className="container text-center pt-5">
        <div className="card text-center">
          <div className="card-header">Counter Component</div>
          <div className="card-body">
            <CountDisplay count={count} />
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center gap-3">
              <button onClick={increment}
                      className="btn btn-primary">Increment</button>
              <button onClick={decrement} 
                      disabled={count <= 0}
                      className="btn btn-danger">Decrement</button>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Counter;