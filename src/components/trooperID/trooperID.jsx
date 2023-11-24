
// imports - middleware
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function Feeling() {

    // variables
    const dispatch = useDispatch();
    const history = useHistory();
    const [trooperID, setTrooperID] = useState('');
    const [squadron, setSquadron] = useState('');
    const [unitNumber, setUnitNumber] = useState('');


    // continue button
    const handleSubmit = (e) => {
        e.preventDefault();

        const action = { type: 'SET_TROOPERID', payload: { trooperID, squadron, unitNumber } }
        dispatch(action);

        history.push('/starSystems');
    }


    return (
        <div id="page-div">
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