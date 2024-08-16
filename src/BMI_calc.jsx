import React, { useState } from "react"
import './BMI.css'

function BMI() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState("");

    function works(event) {
        let valu = parseInt(event.target.value);
        let targ = event.target.name;

        if (targ === "wdata") {
            setWeight(() => {
                return valu;
            })
        }
        else if (targ === "hdata") {
            setHeight(() => {
                return valu;
            })
        }
    }
    function click() {
        setResult(() => {
            let heightInMeters = height / 100;
            let bmi = weight / (heightInMeters * heightInMeters);
            return (bmi.toFixed(2)); 
        })
        if(height === 0 || weight === 0){
            alert('Please fill the input field');
        }
    }

    return (
        <div className="main-container">
            <h2>BMI Calculator</h2>
            <div className="input-field">
                <div>
                    <label htmlFor="">Enter Weight : </label>
                    <input onChange={works} type="text" id="weight" name="wdata" placeholder="Enter you Weight" />
                </div>
                <div>
                    <label htmlFor="">Enter height ( meter ) : </label>
                    <input onChange={works} type="text" id="height" name="hdata" placeholder="Enter you height" />
                </div>
                <div><input onClick={click} name="submit" type="button" value="Submit" /></div>
            </div><br></br>
            <label htmlFor="">BMI is : </label>
            <input value={result} type="text" readOnly />
        </div>
    )
}

export default BMI;