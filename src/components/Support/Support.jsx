
// Imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Support() {

    // Variables
    const [supportRate, setSupportRate] = useState('');
    const history = useHistory();

    // function to continue
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('supportRate', supportRate);

    // ? write your dispatch here

    // send to Comments
        history.push('/comments');
    }

    // send to Understanding
    const goBackAPage = () => {
        history.push('/understanding');
    }

    return (
        <div id="support-div">
            <h3>How can we Support you?</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="1 to 5"
                    required
                    value={supportRate}
                    onChange={(e) => setSupportRate(e.target.value)}
                />
                {supportRate}
                <button id="continue-btn">Continue</button>
            </form>

                <button 
                    id="continue-btn"
                    onClick={goBackAPage}
                >Go Back</button>

        </div>
    )
}

export default Support;