
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    // Variables
    const [commentInput, setCommentInput] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('comments:', commentInput);

        dispatch({
            type: 'SET_COMMENTS',
            payload: commentInput
        });

        history.push('/review');
    }

    // send to Support
    const goBackAPage = () => {
        history.push('/encounters');
    }

    return (
        <div id="comment-div">
            <h3>Anything else to Report?</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    placeholder="Your feelings here..."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                ></textarea>
                {commentInput}
                <button id="continue-btn">Continue</button>
            </form>

            <button
                id="continue-btn"
                onClick={goBackAPage}
            >Go Back</button>

        </div>
    )
}

export default Comments;
