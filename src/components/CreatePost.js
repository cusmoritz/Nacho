import React, { useState } from "react";
import { createNewPost } from "../api";

const CreatePost = () => {
    const [business, setBusiness] = useState("");
    const [location, setLocation] = useState("");
    const [chips, setChips] = useState("");
    const [cheese, setCheese] = useState("");
    const [meat, setMeat] = useState("");
    const [guac, setGuac] = useState("");
    const [salsa, setSalsa] = useState("");
    const [chip_val, setChipsVal] = useState(0);
    const [cheese_val, setCheeseVal] = useState(0);
    const [meat_val, setMeatVal] = useState(0);
    const [guac_val, setGuacVal] = useState(0);
    const [salsa_val, setSalsaVal] = useState(0);
    const [other, setOther] = useState("");
    const [cost, setCost] = useState(15.99);

    const handleSubmit = async() => {
        console.log('you have submitted.');
        const creatingPost = await createNewPost({business, location, chip_val, chips, cheese_val, cheese, meat_val, meat, guac_val, guac, salsa_val, salsa, other, cost });
        return creatingPost;
    };

    return (
        <div className="container">
            <form onSubmit={(event) => {event.preventDefault(); handleSubmit()}}>
                <label htmlFor="business">Business*</label>
                <input className="business" required type="text" placeholder="Name" value={business}
                    onChange={(event) => {setBusiness(event.target.value)}}></input>

                <label htmlFor="location">Location*</label>
                <input className="location" required type="text" placeholder="Location" value={location}
                    onChange={(event) => {setLocation(event.target.value)}}></input>

                <label htmlFor="chips">Chips</label>
                <input className="chips" required type="number" max="10" min="0" step="any" value={chip_val}
                onChange={(event) => {setChipsVal(event.target.value)}}></input>
                <input type="text" placeholder="Notes?" value={chips}
                    onChange={(event) => {setChips(event.target.value)}}></input>

                <label htmlFor="cheese">Cheese</label>
                <input className="cheese" required type="number" max="10" min="0" step="any" value={cheese_val}
                onChange={(event) => {setCheeseVal(event.target.value)}}></input>
                <input type="text" placeholder="Notes?" value={cheese}
                    onChange={(event) => {setCheese(event.target.value)}}></input>

                <label htmlFor="meat">Meat</label>
                <input className="meat" required type="number" max="10" min="0" step="any" value={meat_val}
                onChange={(event) => {setMeatVal(event.target.value)}}></input>
                <input type="text" placeholder="Notes?" value={meat}
                    onChange={(event) => {setMeat(event.target.value)}}></input>

                <label htmlFor="guac">Guac</label>
                <input className="guac" required type="number" max="10" min="0" step="any" value={guac_val}
                onChange={(event) => {setGuacVal(event.target.value)}}></input>
                <input type="text" placeholder="Notes?" value={guac}
                    onChange={(event) => {setGuac(event.target.value)}}></input>

                <label htmlFor="guac">Salsa</label>
                <input className="guac" required type="number" max="10" min="0" step="any" value={salsa_val}
                onChange={(event) => {setSalsaVal(event.target.value)}}></input>
                <input type="text" placeholder="Notes?" value={salsa}
                    onChange={(event) => {setSalsa(event.target.value)}}></input>

                <label htmlFor="other">Other</label>
                <input className="other" type="text" placeholder="Other notes?" value={other}
                onChange={(event) => {setOther(event.target.value)}}></input>

                <label htmlFor="cost">Cost</label>
                <input className="cost" required type="text" placeholder="15.99" step="any" value={cost}
                onChange={(event) => {setCost(event.target.value)}}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default CreatePost;