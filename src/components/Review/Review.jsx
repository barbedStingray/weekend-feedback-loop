
// Imports
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';


function Review() {

    // Variables
    const history = useHistory();

    const trooperID = useSelector(store => store.trooperID);
    const starSystems = useSelector(store => store.starSystems);
    const resources = useSelector(store => store.resources);
    const encounters = useSelector(store => store.encounters);
    const comments = useSelector(store => store.comments);

    // ? Complete and Submit your info to the server
    function completeForm() {
        console.log('form complete!');

    // POST 
        axios.post('/review', {

            // todo pass your object here

        }).then((response) => {
            console.log(`POST /review success`);

        // send to SubmitSuccess
            history.push('/success');
        }).catch((error) => {
            console.log(`post /review error`);
            alert(`post /review error`);
        });
    }

    // send to comments
    const goBackAPage = () => {
        history.push('/comments');
    }

    return (
        <div id="review-div">
            <p>Let's review your sadness</p>

        {/* Trooper ID */}
            <p>Identification Number: {trooperID.trooperID}</p>
            <p>Squadron: {trooperID.squadron}</p>
            <p>Unit#: {trooperID.unitNumber}</p>

        {/* StarSystem */}
            <p>Star System: {starSystems.starSystem}</p>
            <p>Base Location: {starSystems.baseLocation}</p>

        {/* Resources */}
            <p>Weapon Type: {resources.weaponOutfit}</p>
            <p>Weapon Condition: {resources.weaponCondition}</p>
            <p>Armor Condition: {resources.armorCondition}</p>

        {/* Encounters */}
            <p>Encounters:</p>
            {encounters.map((event) => 
            <p>{event}</p>)}

        {/* Comments */}
            <p>Report Notes: {comments}</p>


            <button
                onClick={completeForm}
                id="continue-btn"
            >Complete!</button>

            <button
                onClick={goBackAPage}
                id="continue-btn"
            >Go Back</button>

        </div>
    )
}

export default Review;
