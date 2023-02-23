import React from "react";

const InputForm = () => {
    return (
        <div className="container">
            <form>
                <label htmlFor="business">Business*</label>
                <input className="business" required type="text" placeholder="Name"></input>

                <label htmlFor="chips">Chips</label>
                <input className="chips" required type="number" max="10" min="0"></input>
                <input type="text" placeholder="Notes?"></input>

                <label htmlFor="cheese">Cheese</label>
                <input className="cheese" required type="number" max="10" min="0"></input>
                <input type="text" placeholder="Notes?"></input>

                <label htmlFor="meat">Meat</label>
                <input className="meat" required type="number" max="10" min="0"></input>
                <input type="text" placeholder="Notes?"></input>

                <label htmlFor="guac">Guac</label>
                <input className="guac" required type="number" max="10" min="0"></input>
                <input type="text" placeholder="Notes?"></input>

                <label htmlFor="guac">Salsa</label>
                <input className="guac" required type="number" max="10" min="0"></input>
                <input type="text" placeholder="Notes?"></input>

                
            </form>
        </div>
    )
};

export default InputForm;