import PropTypes from 'prop-types'; 

function Footer({copyright}) {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted mt-auto">
        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)", color: "#000"}}>
          {copyright}
        </div>
      </footer>
    </>
  )
}

//Added props type validation
Footer.propTypes = { 
  copyright: PropTypes.string.isRequired 
}; 

export default Footer;