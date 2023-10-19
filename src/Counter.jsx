import CountDisplay from './CountDisplay';

function Counter({count, stateCount}) {

  //Increment Function
  const increment = () => {
    stateCount((count) => count + 1);
  }

  //Decrement Function
  const decrement = () => {
    if(count <= 0) {
      return;
    } else {
      stateCount((count) => count - 1);
    }
  }

  return (
    <>
      <section className="container text-center p-5">
        <div className="row gy-5 gx-5">
          <div className="col-md-2 col-lg-3">
             {/*Intentionally left blank */ }
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="card text-center mb-4">
              <img src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG51bWJlcnN8ZW58MHx8MHx8fDA%3D"
                  className="card-img-top"
                  alt="Photo" />
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
          </div>
          <div className="col-md-2 col-lg-3">
            {/*Intentionally left blank */ }
          </div>
        </div>
        

      </section>
    </>
  )
}

export default Counter;