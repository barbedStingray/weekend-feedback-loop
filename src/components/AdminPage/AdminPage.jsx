
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';

function AdminPage() {

    const patrolReport = useSelector(store => store.patrolReports);
    const dispatch = useDispatch();


    function getPatrolResults() {
        console.log(`getting patrol resulsts`);

        dispatch({ type: 'FETCH_PATROL_REPORTS'});

    }
    useEffect(() => {
        getPatrolResults();
    }, []);

    function deleteReport(id) {
        console.log(`deleting report id:`, id);


    }


    return (
        <div id="report-page">


            <table className='fadedDiv' id="report-table">
                <thead>
                    <tr>
                        <th>REAL ID</th>
                        <th>ID</th>
                        <th>Squad</th>
                        <th>Unit</th>
                        <th>System</th>
                        <th>Base</th>
                        <th>Type</th>
                        <th>wR</th>
                        <th>aR</th>
                        <th>Encounters</th>
                        <th>Comments</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {
                            patrolReport.map((report, index) => 
                            <tr key={index}>
                                <td>{report.id}</td>
                                <td>{report.trooperid}</td>
                                <td>{report.squadron}</td>
                                <td>{report.unitnumber}</td>
                                <td>{report.starsystem}</td>
                                <td>{report.baselocation}</td>
                                <td>{report.weapon}</td>
                                <td>{report.wcondition}</td>
                                <td>{report.acondition}</td>
                                <td>{report.encounters}</td>
                                <td>{report.comments}</td>
                                <td><button onClick={deleteReport(report.id)}>x</button></td>
                            </tr>
                            )}
                </tbody>
            </table>


        </div>
    )
}

export default AdminPage;
