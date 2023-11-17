
import { useHistory } from 'react-router-dom';

function BeginForm() {

    // variables
    const history = useHistory();

    function beginFeedback() {
        console.log('feedback starting...');

        history.push('/trooperID');
    }


    return (
        <div id="begin-form">

            <h3>Begin your Feedback!</h3>
            <button 
                id="continue-btn"
                onClick={beginFeedback}
            >Begin Survey!</button>

        </div>
    )
}

export default BeginForm;