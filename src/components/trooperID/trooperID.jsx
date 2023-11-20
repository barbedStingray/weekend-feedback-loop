
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
        const action = { type: 'SET_TROOPERID', payload: { trooperID, squadron, unitNumber } }
        dispatch(action);

        // send to understanding
        history.push('/starSystems');

    }


    return (
        <div id="page-div">
            {/* <h3>Trooper ID</h3> */}
            <div
                id="personel-id"
                className="fadedDiv"
            >
                <form onSubmit={handleSubmit}>

                    <div id="trooperID-div">
                        <label>Identification #</label>
                        <input
                            type="text"
                            placeholder="FN-2187"
                            value={trooperID}
                            onChange={(e) => setTrooperID(e.target.value)}
                        />
                        {trooperID}

                    </div>


                    <div id="squadron-div">

                        <div>
                            <label>Squadron</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Storm trooper"
                                value={squadron}
                                onChange={(e) => setSquadron(e.target.value)}
                            />
                            {squadron}

                        </div>
                    </div>


                    <div id="unitNumber-div">

                        <label>Unit #</label>
                        <input
                            type="number"
                            placeholder="Unit #"
                            value={unitNumber}
                            onChange={(e) => setUnitNumber(e.target.value)}
                        />
                        {unitNumber}

                    </div>

                    <div id="next-btn">
                        <button
                            type="submit"
                            id="continue-btn"
                        >Continue</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Feeling;