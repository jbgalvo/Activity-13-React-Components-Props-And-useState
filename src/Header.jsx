import './header.css';

function Header({title}) {
  return (
    <>
      <header>
        <div className="p-5 text-center bg-image"
             style={{backgroundImage: `url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')`, height: "300px"}}>
          <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "40px"}}> 
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;