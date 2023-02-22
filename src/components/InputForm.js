import React from "react";

const InputForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="business">Business</label>
                <input className="business" type="text" placeholder="Name"></input>

                <label htmlFor="chips">Chips</label>
                <input className="chips" type="number" max="10" min="1"></input>
                <input type="text" placeholder="Notes?"></input>

                <label htmlFor="cheese">Cheese</label>
                <input className="cheese" type="number" max="10" min="1"></input>
                <input type="text" placeholder="Notes?"></input>

                <label htmlFor="meat">Meat</label>
                <input className="meat" type="number" max="10" min="1"></input>
                <input type="text" placeholder="Notes?"></input>

                <label htmlFor="guac">Guac</label>
                <input className="guac" type="number" max="10" min="1"></input>
                <input type="text" placeholder="Notes?"></input>

                <label htmlFor="guac">Guac</label>
                <input className="guac" type="number" max="10" min="1"></input>
                <input type="text" placeholder="Notes?"></input>

                
            </form>
        </div>
    )
};

export default InputForm;