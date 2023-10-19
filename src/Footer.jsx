function Footer(props) {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted mt-auto">
        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)", color: "#000"}}>
          {props.copyright}
        </div>
      </footer>
    </>
  )
}

export default Footer;