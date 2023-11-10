
// Imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



function Understanding() {


    // Variables
    const [underRate, setUnderRate] = useState('');
    const history = useHistory();


    // function to continue
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`underRate`, underRate);

    // ? write your dispatch here

    // send to support
        history.push('/support');
    }


    // send to feelings
    const goBackAPage = () => {
        history.push('/feelings');
    }

    return (
        <div id="under-stand">
            <h3>How well do you Understand the Universe</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    placeholder="1 to 5"
                    required
                    value={underRate}
                    onChange={(e) => setUnderRate(e.target.value)}
                />
                {underRate}
                <button id="continue-btn">Continue</button>
            </form>

                <button 
                    id="continue-btn"
                    onClick={goBackAPage}
                >Go Back</button>

        </div>
    )
}

export default Understanding;