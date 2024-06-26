
// imports - middleware
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function TrooperID() {

    // variables
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [trooperID, setTrooperID] = useState('');
    const [squadron, setSquadron] = useState('');
    const [unitNumber, setUnitNumber] = useState('');


    // continue button
    const handleSubmit = (e) => {
        e.preventDefault();

        const action = { type: 'SET_TROOPERID', payload: { trooperID, squadron, unitNumber } }
        dispatch(action);

        navigate('/starSystems');
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
                            required
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
                                required
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
                            required
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

export default TrooperID;