
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import RadioButton from '../RadioButton/RadioButton.jsx';
import useSetStarSystems from '../../scripts/useSetStarSystems.js';
import useSetOperationalBases from '../../scripts/useSetOperationalBases.js';


function StarSystem() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [baseLocation, setBaseLocation] = useState('');
     
    const [starSystem, setStarSystem] = useState(0);
    const [starSystemList, status] = useSetStarSystems();
    const [operationalBases, baseStatus] = useSetOperationalBases(starSystem); 
    // console.log('starSystemList', starSystemList);
    // console.log('operationalBases', operationalBases, baseStatus);
    // console.log('star System', starSystem);


    // continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'DATA_STAR_SYSTEM',
            payload: { starSystem, baseLocation }
        });
        navigate('/resources');
    }


    if (status !== 'loaded') {
        return (
            <div>
                <p>Page Is Loading</p>
            </div>
        )
    } else {

        return (
            <div id="page-div">

                <div id="star-system">

                    <h3>Star System</h3>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <select
                                required
                                onChange={(e) => setStarSystem(e.target.value)}
                            >
                                <option>Select One</option>
                                {starSystemList[0].map((planet, i) =>
                                    <option key={planet.id} value={planet.id} >{planet.system}</option>)}
                            </select>
                        </div>

                        <h3>Operational Base</h3>

                        <div className={starSystem}>
                            {operationalBases.map((base, index) =>
                                <div
                                    id="base-div"
                                    key={index}
                                >
                                    <RadioButton
                                        value={base.base}
                                        name='base-location'
                                        status={setBaseLocation}
                                    />
                                </div>
                            )}
                        </div>

                        <div id="filler-div"></div>


                        <div id="next-btn">
                            <button
                                type="submit"
                                id="continue-btn"
                            >Continue</button>
                        </div>

                    </form>

                    <button
                        id="back-btn"
                        onClick={() => navigate('/')}
                    >Back</button>

                </div>
            </div>
        )
    }
}

export default StarSystem;