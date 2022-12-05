import React from "react";
import Input from "./Components/Input";
import InputData from "./InputData";

function createInput(input) {
    return (
        <Input
            key={input.id}
            htmlFor={input.for}
            label={input.label}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
        />
    )

}

function App() {
    return (
        <div className="container">
            <form>
                <div className="Form">
                    {InputData.map(createInput)}
                    <div className="button">
                        <button type="submit">Submit</button>
                    </div>

                </div>
            </form>


        </div>

    )
}
export default App;