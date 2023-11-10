
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Comments() {

    // Variables
    const [commentInput, setCommentInput] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    // Continue button

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('comments:', commentInput);

        // dispatch
        const action = { type: 'COMMENT_INPUT', payload: commentInput }
        dispatch(action);

        // send to Review
        history.push('/review');
    }

    // send to Support
    const goBackAPage = () => {
        history.push('/support');
    }

    return (
        <div id="comment-div">
            <h3>Cry about it</h3>
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