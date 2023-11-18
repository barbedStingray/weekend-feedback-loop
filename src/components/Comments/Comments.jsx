
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
            <h3>Report Notes</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    placeholder="Did you shoot anything...?"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                ></textarea>
                {commentInput}

                <div id="next-btn">
                        <button
                            type="submit"
                            id="continue-btn"
                        >Continue</button>
                    </div>
            </form>

            <button
                id="continue-btn"
                onClick={goBackAPage}
            >Go Back</button>

        </div>
    )
}

export default Comments;
