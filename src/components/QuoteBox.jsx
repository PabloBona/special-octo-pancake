import React from "react";
import QuoteQuote from "./QuoteQuote";

const QuoteBox = ({ quoteRandom, handleClick,colorRandom }) => {

    const objStyle = {
        color:colorRandom
    }

    return (
        <article className="card" style={objStyle}>
            <p className="card__quote">
                <QuoteQuote
                objStyle={objStyle}
                />
                {quoteRandom.quote}
            </p>
            <h1 className="card__author ">{quoteRandom.author}</h1>

            <button style={objStyle} onClick={handleClick}> 
                &gt;
            </button> 
        </article>
    );
};
//El boton no cambia de color por q es un elemento en linea no es un elemento nativo, por eso hay q darle otra ves el stylo !!
export default QuoteBox;
