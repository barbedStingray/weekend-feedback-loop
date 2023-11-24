
// imports - middleware
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Encounters() {

    // variables
    const history = useHistory();
    const dispatch = useDispatch();
    const [encounters, setEncounters] = useState([]);
    console.log(`first encounters is:`, encounters);


    // continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('supportRate', encounters);

        const action = {
            type: 'SET_ENCOUNTERS',
            payload: encounters
        }
        dispatch(action);
        history.push('/comments');
    }

    // set your encounters
    const addRemoveBox = (e) => {
        if (encounters.indexOf(e.target.value) < 0) {
            setEncounters([...encounters, e.target.value]);
        }
        else if (encounters.indexOf(e.target.value) >= 0) {
            setEncounters(encounters.filter( (enc) => enc !== e.target.value ));
        }
        else { console.log(`exception`); }
    }


        // back button
        const goBackAPage = () => {
            history.push('/resources');
        }


    return (
        <div id="page-div">
            <div id="encounters">
                <form onSubmit={handleSubmit}>
                    <h3>Encounters</h3>

                    <div id="encounter-inputs" className="encounters">
                        <label><input
                            type="checkbox"
                            value="Rebel Scum"
                            onClick={addRemoveBox}
                        >
                        </input>Rebel Scum</label>


                        <label><input
                            type="checkbox"
                            value="Dangerous Wildlife"
                            onClick={addRemoveBox}
                        >
                        </input>Dangerous Wildlife</label>


                        <label><input
                            type="checkbox"
                            value="Suspicious Activity"
                            onClick={addRemoveBox}
                        >
                        </input>Suspicious Activity</label>


                        <label><input
                            type="checkbox"
                            value="Moving Along"
                            onClick={addRemoveBox}
                        >
                        </input>Moving Along</label>

                        <label><input
                            type="checkbox"
                            value="Civilian Unrest"
                            onClick={addRemoveBox}
                        >
                        </input>Civilian Unrest</label>

                        <label><input
                            type="checkbox"
                            value="Jedi Combat"
                            onClick={addRemoveBox}
                        >
                        </input>Jedi Combat</label>
                    </div>

                    <br />
                    <div id="encounter-btn">
                        <button
                            type="submit"
                            id="encounter-btn"
                        >Continue</button>
                    </div>
                </form>

                <button
                id="back-btn"
                onClick={goBackAPage}
            >Back</button>

            </div>
        </div>
    )
}
export default Encounters;