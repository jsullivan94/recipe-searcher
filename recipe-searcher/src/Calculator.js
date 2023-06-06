

function Calculator() {
    return (
        <form>
            <h1>Conversion Calculator</h1>
            <select>
                <option>Select</option>
                <option value="cup">Cup</option>
                <option value="quart">Quart</option>
                <option value="gallon">Gallon</option>
                <option value="ounce">Ounce</option>
                <option value="pound">Pound</option>
                <option value="pint">Pint</option>
                <option value="tbsp">Tbsp</option>
                <option value="tsp">tsp</option>
            </select>
            <select>
                <option>Select</option>
                <option value="cup">Cup</option>
                <option value="quart">Quart</option>
                <option value="gallon">Gallon</option>
                <option value="ounce">Ounce</option>
                <option value="pound">Pound</option>
                <option value="pint">Pint</option>
                <option value="tbsp">Tbsp</option>
                <option value="tsp">tsp</option>
            </select>
            <label>To Convert</label>
            <input type="text" />
            <label>Converted</label>
            <input type="text" />
            <input type="submit" value="Calc" />
        </form>
    )

}

export default Calculator;