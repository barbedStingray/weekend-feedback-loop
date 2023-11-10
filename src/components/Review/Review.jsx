
// Imports
import { useHistory } from 'react-router-dom';

function Review() {

    // Variables
    const history = useHistory();

    // ? Complete and Submit your info to the server
    function completeForm() {
        console.log('form complete!');
    }

    // send to comments
    const goBackAPage = () => {
        history.push('/comments');
    }

    return (
        <div id="review-div">
            <p>Let's review your sadness</p>

            {/* Your Results displayed here */}

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
