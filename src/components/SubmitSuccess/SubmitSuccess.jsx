
// Imports 
import { useHistory } from 'react-router-dom';
 

function SubmitSuccess() {

    const history = useHistory();

    const newReport = () => {
        history.push('/');
    }
    

    return (
        <div id='submit-success'>
            <h3 className='success'>Submission Complete</h3>
            <h3 className='success'>Return to your Post</h3>
            <button
                    id="new-btn"
                    onClick={newReport}
                >New Report</button>
        </div>
    )
}

export default SubmitSuccess;