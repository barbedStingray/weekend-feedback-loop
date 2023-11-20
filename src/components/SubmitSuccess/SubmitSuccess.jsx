
// Imports 
import { useHistory } from 'react-router-dom';
 

function SubmitSuccess() {

    const history = useHistory();

    const newReport = () => {
        history.push('/');
    }
    

    return (
        <div id='submit-success'>
            <p>You have successfully submitted your form</p>
            <button
                    id="new-btn"
                    onClick={newReport}
                >Submit a New Report</button>
        </div>
    )
}

export default SubmitSuccess;