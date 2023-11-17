
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [trooperID, setTrooperID] = useState('');
    const [squadron, setSquadron] = useState('');
    const [unitNumber, setUnitNumber] = useState('');



    // dispatch - continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        
    // dispatch
        const action = { type: 'SET_TROOPERID', payload: {trooperID, squadron, unitNumber} }
        dispatch(action);
    
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
                    value={trooperID}
                    onChange={(e) => setTrooperID(e.target.value)}
                />
                {trooperID}

                <input 
                    type="text" 
                    placeholder="Storm trooper" 
                    required
                    value={squadron}
                    onChange={(e) => setSquadron(e.target.value)}
                />
                {squadron}

                <input 
                    type="number" 
                    placeholder="Unit #" 
                    required
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(e.target.value)}
                />
                {unitNumber}

                <button 
                    type="submit" 
                    id="continue-btn"
                >Continue</button>
            </form>
        </div>
    )
}

export default Feeling;