import React from "react";
import QuoteQuote from "./QuoteQuote";

const QuoteBox = ({ quoteRandom, handleClick,colorRandom }) => {

    const objStyle = {
        color:colorRandom
    }

    const objStyleBg = {
        backgroundColor: colorRandom
      } 

    return (
        <article className="card" style={objStyle}>
            <p className="card__quote">
                <QuoteQuote
                objStyle={objStyle}
                />
                {quoteRandom.quote}
            </p>
            <em> <p className="card__author ">{quoteRandom.author}</p></em>
            <button style={objStyleBg} onClick={handleClick}> 
                &gt;
            </button> 
        </article>
    );
};
//El boton no cambia de color por q es un elemento en linea no es un elemento nativo, por eso hay q darle otra ves el stylo !!
export default QuoteBox;
