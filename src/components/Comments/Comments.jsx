
// imports - middleware
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Comments() {

    // variables
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [commentInput, setCommentInput] = useState('');

    // continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('comments:', commentInput);

        dispatch({
            type: 'SET_COMMENTS',
            payload: commentInput
        });
        navigate('/review');
    }

    // go back button
    const goBackAPage = () => {
        navigate('/encounters');
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

                <div id="next-btn">
                        <button
                            type="submit"
                            id="continue-btn"
                        >Continue</button>
                    </div>
            </form>

            <button
                id="back-btn"
                onClick={goBackAPage}
            >Back</button>

        </div>
    )
}

export default Comments;
