import { useState } from 'react'
import Counter from './Counter'
import Footer from './Footer'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  //const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Activity 13 - React Components, Props, and useState");
  const [copyright, setCopyright] = useState("Copyright 2023 © BASE 404 Bootcamp. All rights Reserved.");

  return (
    <>
      <main className="d-flex flex-column min-vh-100">
        <Header title={title} />
        <Counter />
        <Footer copyright={copyright} />
      </main>
    </>
  )
}

export default App
