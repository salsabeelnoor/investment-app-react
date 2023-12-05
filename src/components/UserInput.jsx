import { useState } from "react"
export default function UserInput({onChange, userInput}){
    

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial">Initial Investment</label>
                    <input id="initial" type="number" value={userInput.initialInvestment } onChange={(event) => onChange('initialInvestment', event.target.value)} required/>
                </p>
                <p>
                    <label htmlFor="annual">Annual Investment</label>
                    <input id="annual" type="number" value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected">Expected Return</label>
                    <input id="expected" type="number" value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} required/>
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input id="duration" type="number" value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} required/>
                </p>
            </div>
        </section>
    )
}