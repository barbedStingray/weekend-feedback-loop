


function Feeling(props) {


    // dispatch - continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        
    // dispatch
        const action = { type: 'FEELING_RATE', payload: props.trooperID }
        // dispatch(action);
    
    // send to understanding
        history.push('/starSystems');

    }




    return (
        <div id="trooperID-div">
            <h3>We don't care about your feelings</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="FN-2187" 
                    required
                    value={props.trooperID}
                    onChange={(e) => props.setTrooperID(e.target.value)}
                />
                {props.trooperID}

                <input 
                    type="text" 
                    placeholder="Storm trooper" 
                    required
                    value={props.squadron}
                    onChange={(e) => props.setSquadron(e.target.value)}
                />
                {props.squadron}

                <input 
                    type="number" 
                    placeholder="Unit #" 
                    required
                    value={props.unitNumber}
                    onChange={(e) => props.setUnitNumber(e.target.value)}
                />
                {props.unitNumber}

                <button 
                    type="submit" 
                    id="continue-btn"
                >Continue</button>
            </form>
        </div>
    )
}

export default Feeling;