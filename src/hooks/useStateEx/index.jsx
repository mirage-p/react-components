import { useState } from "react"

export default function UseStateEx() {

    const [toggleText, setToggleText] = useState(false);

    const [formData, setFormData] = useState({ name: '', city: '' })

    function handleToggleText() {
        setToggleText(!toggleText)
    }


    function handleNameChange(event) {
        setFormData((prevFormData) => ({...prevFormData, name: event.target.value}))
    }

    function handleCityChange(event) {
        setFormData((prevFormData) => ({...prevFormData, city: event.target.value}))
    }

    return (
        <div>
            <div>
                <h1>Use State Hook</h1>
                {toggleText ? <p>Hello World!</p> : null}
                <button onClick={handleToggleText}>Toggle Text</button>
            </div>
            <div>
                <input onChange={handleNameChange} type="text" name="name" placeholder="Enter Name"></input>
                <select onChange={handleCityChange} name="city">
                    <option value={""} id="">
                        Select City
                    </option>
                    <option value={"Fairfax"} id="fairfax">
                        Fairfax
                    </option>
                    <option value={"Austin"} id="austin">
                        Austin
                    </option>
                </select>
                <div>
                    <p>Name is: {formData.name}</p>

                    <p>City is: {formData.city}</p>
                </div>
            </div>
        </div>

    )
}