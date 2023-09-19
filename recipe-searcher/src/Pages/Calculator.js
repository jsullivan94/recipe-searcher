import { useState, useEffect } from "react";

function Calculator() {
    const MEASUREMENTS = {
        "teaspoon": {
            "tablespoon": 1/3,
            "milliliter": 5,
            "fluidOunce": 1/6,
            "cup": 1/48,
            "pint": 1/96,
            "quart": 1/192,
            "gallon": 1/768
        },
        "tablespoon": {
            "teaspoon": 3,
            "milliliter": 15,
            "fluidOunce": 0.5,
            "cup": 1/16,
            "pint": 1/32,
            "quart": 1/64,
            "gallon": 1/256
        },
        "fluidOunce": {
            "teaspoon": 6,
            "tablespoon": 2,
            "milliliter": 30,
            "cup": 1/8,
            "pint": 1/16,
            "quart": 1/32,
            "gallon": 1/128
        },
        "cup": {
            "teaspoon": 48,
            "tablespoon": 16,
            "fluidOunce": 8,
            "milliliter": 240,
            "pint": 0.5,
            "quart": 0.25,
            "gallon": 1/16
        },
        "pint": {
            "teaspoon": 96,
            "tablespoon": 32,
            "fluidOunce": 16,
            "cup": 2,
            "milliliter": 480,
            "quart": 0.5,
            "gallon": 1/8
        },
        "quart": {
            "teaspoon": 192,
            "tablespoon": 64,
            "fluidOunce": 32,
            "cup": 4,
            "pint": 2,
            "milliliter": 960,
            "gallon": 0.25
        },
        "gallon": {
            "teaspoon": 768,
            "tablespoon": 256,
            "fluidOunce": 128,
            "cup": 16,
            "pint": 8,
            "quart": 4,
            "milliliter": 3840
        },
        "milliliter": {
            "teaspoon": 0.2,
            "tablespoon": 1/15,
            "fluidOunce": 1/30,
            "cup": 1/240,
            "pint": 1/480,
            "quart": 1/960,
            "gallon": 1/3840
        },
        "ounce": {
            "gram": 28.35,
            "pound": 1/16,
            "kilogram": 0.02835
        },
        "pound": {
            "gram": 453.592,
            "ounce": 16,
            "kilogram": 0.453
        },
        "gram": {
            "ounce": 1/28.35,
            "pound": 1/453.592,
            "kilogram": 0.001
        },
        "kilogram": {
            "gram": 1000,
            "ounce": 35.274,
            "pound": 2.205
        }
    };
    
    const [fromMeasurement, setFromMeasurement] = useState('teaspoon');
    const [toMeasurement, setToMeasurement] = useState('tablespoon');
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        setErrorMessage('');
        if (!amount) {
            setConvertedAmount('');
            return;
        }

        if (!MEASUREMENTS[fromMeasurement][toMeasurement]) {
            setErrorMessage(`Conversion from ${fromMeasurement}s to ${toMeasurement}s is not supported.`);
            setConvertedAmount('');
            return;
        }

        const fromRatio = MEASUREMENTS[fromMeasurement].milliliter || 1;
        const toRatio = 1 / (MEASUREMENTS[toMeasurement].milliliter || 1);

        const result = amount * fromRatio * toRatio;

        setConvertedAmount(result.toFixed(2));
    }, [fromMeasurement, toMeasurement, amount]);
    

    const from = Object.keys(MEASUREMENTS).map(measurement => {
        return (
            <option key={measurement} value={measurement}>{measurement}</option>
        ) 
    })

    const to = Object.keys(MEASUREMENTS).map(measurement => {
        return (
            <option key={measurement} value={measurement}>{measurement}</option>
        ) 
    })


    return (
        <form className="calculator">
            <h1>Conversion Calculator</h1>
            <h4>From</h4>
            <select value={fromMeasurement} onChange={e => setFromMeasurement(e.target.value)}>
                {from}
            </select>
            <h4>To</h4>
            <select value={toMeasurement} onChange={e => setToMeasurement(e.target.value)}>
                {to}
            </select>
            <label>Amount</label>
            <input type="text" value={amount}
                onChange={e => setAmount(e.target.value)} />
            {convertedAmount 
            ? <h2>{`${convertedAmount} ${toMeasurement}${convertedAmount !== 1 ? 's' : ''}`}</h2> 
            : null}
            {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
    )

}

export default Calculator;