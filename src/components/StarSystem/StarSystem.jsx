
// Imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    // Variables
    const [starSystem, setStarSystem] = useState('');
    const [baseLocation, setBaseLocation] = useState('');



    // function to continue
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'SET_STAR_SYSTEM',
            payload: { starSystem, baseLocation }
        });

        history.push('/resources');
    }


    // send to feelings
    const goBackAPage = () => {
        history.push('/trooperID');
    }

    return (
        <div id="star-system">
            <h3>How well do you Understand the Universe</h3>

            <form onSubmit={handleSubmit}>

                <select
                    required
                    onChange={(e) => setStarSystem(e.target.value)}
                >
                    <option value="">Select one</option>
                    <option value="endor">Endor</option>
                    <option value="tatooine">Tatooine</option>
                </select>
                {starSystem}

                <h4>Please Select Your Base of Operations</h4>
                <label><input
                    type='radio'
                    value="Imperial Base"
                    onChange={(e) => setBaseLocation(e.target.value)}
                    name="base-location"
                ></input>Imperial Base</label>
                
                <label><input
                    type='radio'
                    value="Imperial Spaceport"
                    onChange={(e) => setBaseLocation(e.target.value)}
                    name="base-location"
                ></input>Imperial Spaceport</label>
                
                <label><input
                    type='radio'
                    value="Forest Outpost"
                    onChange={(e) => setBaseLocation(e.target.value)}
                    name="base-location"
                ></input>Forest Outpost</label>
                 

                {baseLocation}


                <button id="continue-btn">Continue</button>
            </form>

            <button
                id="continue-btn"
                onClick={goBackAPage}
            >Go Back</button>

        </div>
    )
}

export default Understanding;