
// Imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function Feeling() {

    // Variables
    const history = useHistory();
    const [feelingRate, setFeelingRate] = useState('');
    const dispatch = useDispatch();


    // dispatch - continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`feelingRate:`, feelingRate);
        
    // dispatch
        const action = { type: 'FEELING_RATE', payload: feelingRate }
        dispatch(action);
    
    // send to understanding
        history.push('/understanding');

    }




    return (
        <div id="feeling-div">
            <h3>We don't care about your feelings</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="1 to 5" 
                    required
                    value={feelingRate}
                    onChange={(e) => setFeelingRate(e.target.value)}
                />
                {feelingRate}
                <button 
                    type="submit" 
                    id="continue-btn"
                >Continue</button>
            </form>
        </div>
    )
}

export default Feeling;