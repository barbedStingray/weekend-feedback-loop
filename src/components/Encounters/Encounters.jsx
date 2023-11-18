
import { useState, useEffect } from 'react';
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
            console.log(`TARGET:`, e.target.value);

            if(encounters.indexOf(e.target.value) < 0 ) {
                setEncounters([...encounters, e.target.value]);
                console.log(`after push add:`, encounters);

            }
            else if(encounters.indexOf(e.target.value) >= 0 ) {
                
                let index = encounters.indexOf(e.target.value);

                    encounters.splice(index, 1);
                    console.log(`encountersNEW:`, encounters);

                    setEncounters(encounters);
 
            }
            else {
                console.log(`exception`);
            }
        }

        useEffect(() => {
            console.log(`select change`);
        },[encounters]);


    

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
            {/* {JSON.stringify(encounters)} */}

            <br />
                <button onClick={continueToNext} id="continue-btn">Continue</button>



        </div>
    )
}
export default Encounters;