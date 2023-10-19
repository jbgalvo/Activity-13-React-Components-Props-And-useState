
import './header.css';

function Header({title, count}) {
  return (
    <>
      <header>
        <div className="p-5 text-center bg-image"
             style={
              {
                backgroundImage: (count > 5) ? `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAcICAgIBwcHBw0HBwcHCA8ICQcKFREWFhURHxMYHSggGBolJx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NDw0NDysZFRk3LSstKy0tKy0tKysrNzcrKystKysrNysrKysrKysrKysrKysrKysrLSsrKysrKysrK//AABEIALABHgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDB//EABcQAQEBAQAAAAAAAAAAAAAAAAARARL/xAAaAQEBAQEAAwAAAAAAAAAAAAABAgADBAUG/8QAGxEBAQEBAQEBAQAAAAAAAAAAAAEREgJREyH/2gAMAwEAAhEDEQA/APPEk9W+3SRYpIsqRJEKkSOELkBRC5ASoNVPITUUbVchGGNp5ZRija3LKagjaOQI0Cm+QGgybGVGgUWMhoFFgSRTYEkyUkmCSTMikyoUiFyIoh0kRRDpIDDCFyCGKELkEJQVyIoYWPLMUaDNyA0mHLMEaBTYyG9ZKLAGgXOxnQ0C52MhoFFgBRRQkmSiCxiIIXCQQuEjDgdZCQcDpIcKQdJEUQ6SIohUgRUCsCMTNjKaBTYyGgUWAEFFjIa0FysZDQLnYyGgXOgEKc6EkyaiCxhWI4FxYRjQdIiiHSEjCl1hIIdISMOB0hSw4FxJEKwIhmwIgpoBBc6AQXOjQRpc6zo0hTlRoOgudAILnUCCiogsYUCFw40ycC40WcIdY0WcaxLpCQcDrCQQuUlkh0lKFIVqSDNpCBRaggUWoHQXOjQtGqc6NB0FyoBBc6AQXOoEFFRCZoSCFQlkh0jRZIdJWjjJDpK0WSHSVoskLlJZIXKUKmw9FCqtjaQKmFqQRRaghpRatCBcrUEC52rRqCnOoJFFCSZKSTAoFlQlkhcpwhBcrRZIXK0ayg6StGsmhU9NKs01ldNJlDD00mU2N0ahRSOiKqKyb6ICKLUECi1BAudqSBRagQU1JJkpFRjgRhjHmhHnTzo1U80Fc6eRq55oJ5XOtq55vxI8aeNGqnn18CPOnjRq559fAjxp41tPPr4zVWuNXGg8+vjNVa41cazc+vjKa40caf4OfXxlNcaONbU3z6+MhvjRwdTfPr4yGudXJ1F834wmuRydRfN+Mo86uWTfNZRihTzQjFGGNwwpDyp5iihQXJFDEWXJFDAQqYoYKaFzCoKaFSwws1VlbGoYzVRiuo1Ez0umxuo0oz0umxuo1BBRWHUaAqpFsUUVFZNsUENFKbgihBRZBuCNUFFkZihTJsjMEaRRfMCZppxPTVVZqoxXTVNZqbD01TWKRiumqqymw9NU1hNh6bqrKbD1WqqyhjdVrpVlNjdVqqspsbqtVVlNjdVqqso43VaorKbB01VWU2Dpqiso4OmqKFWxPRTNVbB0UKKcT0oYSxnkRRpDVTyIo1mGDVzwzDGkNXPDPJ5aLaqeIxyeWoRquGOVy3DBqvzY5XLcMbVfm58rl0ija35ufK5dIo2t+bnyuXSCNrfm58rl0gbU/m58rl0gh1N8RjkcukB1N8OcUbTam+HOKNg6i+GIo0DqL5ZgjYKL5f/Z')`
                                             : `url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')`, 
                height: "300px"
              }
             }>
          <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "30px"}}> 
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