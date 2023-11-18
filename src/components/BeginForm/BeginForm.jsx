
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

            <button 
                id="begin-btn"
                onClick={beginFeedback}
            >Begin Report</button>

        </div>
    )
}

export default BeginForm;