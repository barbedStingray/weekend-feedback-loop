
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Encounters() {

    const [encounters, setEncounters] = useState([]);
    console.log(`first encounters is:`, encounters);

    const history = useHistory();


        // send to Support
        const continueToNext = () => {
            history.push('/comments');
        }

        const addRemoveBox = (e) => {
            console.log(`in add remove function`);

            if(encounters.indexOf(e.target.value) < 0 ) {
                setEncounters([...encounters, e.target.value]);
                console.log(`after push add:`, encounters);

            }
            else if(encounters.indexOf(e.target.value) >= 0 ) {
                console.log(`index`, encounters.indexOf(e.target.value));
                setEncounters(encounters.splice(encounters.indexOf(e.target.value), 1));
                console.log(`after push remove:`, encounters);

            }
        }
    

    return (
        <div id="encounters">
            <h4>Please Select ALL you have encountered</h4>

            <label><input
                type="checkbox"
                value="Rebel Scum"
                onClick={addRemoveBox}
            >
            </input>Rebel Scum</label>

            <br />

            <label><input
                type="checkbox"
                value="Dangerous Wildlife"
                onClick={addRemoveBox}
            >
            </input>Dangerous Wildlife</label>

            <br />

            <label><input
                type="checkbox"
                value="Suspicious Activity"
                onClick={addRemoveBox}
            >
            </input>Suspicious Activity</label>

            <br />

            <label><input
                type="checkbox"
                value="Moving Along"
                onClick={addRemoveBox}
            >
            </input>Moving Along</label>

            <br />
            {encounters}
            <br />
            {JSON.stringify(encounters)}

            <br />
                <button onClick={continueToNext} id="continue-btn">Continue</button>



        </div>
    )
}
export default Encounters;