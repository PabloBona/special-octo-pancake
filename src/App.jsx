import { useState } from "react"
import "./App.css"
import "./index.css"
import quotes from "./json/quotes.json"
import colors from "./json/colors.json"
import QuoteBox from "./components/QuoteBox"



function App() {

  //Variable que crea una funcion flecha que retorna una posicion random a partir de un array 
  const getRandomFromArray = (array) => {
    const indexRandom = Math.floor(array.length * Math.random())

    return array[indexRandom]
  }
  
  //Aca llamo a la funcion que me retorna una quote random, pero para guardarla es necesario usar useState
  getRandomFromArray(quotes)
  //y se la paso como valor inicial al destructuring de quotesRandom de la linea 24

  //utilizacion del useState donde quoteRandom es la variable, setQuoteRandom la funcion q la modifica y quotes el valor inicial -Objeto-
  const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))

   //utilizacion del useState donde colorRandom es la variable, setColorRandom la funcion q la modifica y colors el valor inicial -Array-
  const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))



  const handleClick = () => {  //este handleclock es el que vamos a mandar a QuoteBox.ksx como props
    setQuoteRandom(getRandomFromArray(quotes)) //setQuoteRandom es una funcion y le mando como parametros el getRandomFromArray(quotes) q randomiza el quotes del json
    setColorRandom(getRandomFromArray(colors)) //setColorRandom es una funcion y le mando como parametros el getRandomFromArray(colors) q randomiza el color del json

  }

  // Variable para utilizar como style dentro del jsx de App para cambiar el bg
  const objStyle = {
    backgroundColor: colorRandom
  } 

  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    
    </div>
  )
}

export default App



