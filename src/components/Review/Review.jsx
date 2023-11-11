
// Imports
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';


function Review() {

    // Variables
    const history = useHistory();
    const feelingRate = useSelector(store => store.feelingRate);
    const understandRate = useSelector(store => store.understandRate);
    const supportRate = useSelector(store => store.supportRate);
    const commentInput = useSelector(store => store.commentInput);

    // ? Complete and Submit your info to the server
    function completeForm() {
        console.log('form complete!');

    // POST 
        axios.post('/review', {
            feeling: feelingRate,
            understanding: understandRate,
            support: supportRate,
            comments: commentInput
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

            <p>Feeling Rating: {feelingRate}</p>
            <p>Understood Rating: {understandRate}</p>
            <p>Support Rating: {supportRate}</p>
            <p>Comment: {commentInput}</p>


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
