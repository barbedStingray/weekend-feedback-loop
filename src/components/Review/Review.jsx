
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
            trooperid: trooperID.trooperID,
            squadron: trooperID.squadron,
            unitnumber: trooperID.unitNumber,
            starsystem: starSystems.starSystem,
            baselocation: starSystems.baseLocation,
            weapon: resources.weaponOutfit,
            wcondition: resources.weaponCondition,
            acondition: resources.armorCondition,
            encounters: encounters,
            comments: comments


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

            <div id="finish-btn">
                <button
                    onClick={completeForm}
                    id="complete-btn"
                >Complete</button>
            </div>


            <h3 className="last">Report Overview</h3>

            <h5 className="nextLast">Trooper ID</h5>

            <div id="troop-review" >
                {/* Trooper ID */}
                <p>{trooperID.trooperID}</p>
                <p>{trooperID.squadron}</p>
                <p>{trooperID.unitNumber}</p>
            </div>

            <h5>Star System</h5>

            <div id="star-review">
                {/* StarSystem */}
                <p>{starSystems.starSystem}</p>
                <p>{starSystems.baseLocation}</p>
            </div>

            <h5>Resources</h5>

            <div id="resource-review">
                {/* Resources */}
                <p>{resources.weaponOutfit}</p>
                <p>Weapon: {resources.weaponCondition}</p>
                <p>Armor: {resources.armorCondition}</p>
            </div>

            <h5>Encounters</h5>

            <div id="encounter-review">
                {/* Encounters */}
                {encounters.map((event) =>
                    <p>{event}</p>)}
            </div>

            <h5>Report Notes:</h5>

            {/* Comments */}
            <p id="comment-review">{comments}</p>






        </div>
    )
}

export default Review;
