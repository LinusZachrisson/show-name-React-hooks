import { useState, useEffect } from "react";

const Form = () => {

    const [name, setUsername] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(name);
        {document.getElementById("displayName").innerHTML = name}
    }

    return (
        <div>
            <h2>Vänligen skriv ditt namn här!</h2>
            <form>
            <input type="text" value={name} onChange={e => setUsername(e.target.value)} />
            <button onClick={handleSubmit}>Spara</button>
            </form> 
            <p id="displayName"></p>
        </div>
    )
}

export default Form