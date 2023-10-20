import PropTypes from 'prop-types'; 

function CountDisplay({count}) {
  return (
    <>
      <h2 className="card-title fw-bolder fs-1">
        {count}
      </h2>
      <h3 className="fw-normal fst-italic">Current count</h3>
    </>
  )
}

//Added props type validation
CountDisplay.propTypes = { 
  count: PropTypes.number.isRequired 
}; 

export default CountDisplay;