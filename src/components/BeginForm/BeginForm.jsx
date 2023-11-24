
// imports - middleware
import { useHistory } from 'react-router-dom';



function BeginForm() {

    // variables
    const history = useHistory();

    // begin form button
    function beginFeedback() {
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