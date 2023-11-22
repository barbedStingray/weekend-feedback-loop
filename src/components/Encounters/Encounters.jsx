
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Encounters() {

    const [encounters, setEncounters] = useState([]);
    console.log(`first encounters is:`, encounters);

    const history = useHistory();
    const dispatch = useDispatch();


    // function to continue
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('supportRate', encounters);

        // dispatch
        const action = {
            type: 'SET_ENCOUNTERS',
            payload: encounters
        }
        dispatch(action);

        // send to Comments
        history.push('/comments');
    }

    const addRemoveBox = (e) => {
        console.log(`in add remove function`);
        console.log(`TARGET:`, e.target.value);

        if (encounters.indexOf(e.target.value) < 0) {
            setEncounters([...encounters, e.target.value]);
            console.log(`after push add:`, encounters);

        }
        else if (encounters.indexOf(e.target.value) >= 0) {

            // let index = encounters.indexOf(e.target.value);

            // encounters.splice(index, 1);
            console.log(`encountersNEW:`, encounters);

            setEncounters(encounters.filter( (enc) => enc !== e.target.value ));

        }
        else {
            console.log(`exception`);
        }
    }

    useEffect(() => {
        console.log(`select change`);
    }, [encounters]);


        // send to ???
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


                        <br />
                        {encounters}
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