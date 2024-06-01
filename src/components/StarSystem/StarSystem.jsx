
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useQuery } from '@tanstack/react-query';
import fetchBases from '../../scripts/fetchBases.js';

// components
import RadioButton from '../RadioButton/RadioButton.jsx';
import useSetStarSystems from '../../scripts/useSetStarSystems.js';
import useSetOperationalBases from '../../scripts/useSetOperationalBases.js';
import useBases from '../../scripts/useBases.js';
import useSystem from '../../scripts/useSystem.js';

function StarSystem() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [baseLocation, setBaseLocation] = useState('');

    const [starSystem, setStarSystem] = useState(1);
    // const [starSystemList, status] = useSetStarSystems();
    // const [operationalBases, baseStatus] = useSetOperationalBases(starSystem);

    // ! What is the difference between using the custom hook as the interim, and cutting to reactQuery?
    // useQuery / fetchBases
    // const { data: bases, isLoading, isError} = useQuery(['details', starSystem], fetchBases);
    // console.log('bases, loading, error', bases, isLoading, isError);
    // console.log('bases', bases);

    // useQuery / Bases
    const [bases, baseStatus] = useBases(starSystem);
    // console.log('bases JSX', bases, baseStatus);

    // useQuery / systems
    const [system, systemStatus] = useSystem();
    // console.log('system JSX', system, systemStatus);










    // continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'DATA_STAR_SYSTEM',
            payload: { starSystem, baseLocation }
        });
        navigate('/resources');
    }


    if (systemStatus !== 'success') {
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
                                {system.map((planet, i) =>
                                    <option key={planet.id} value={planet.id} >{planet.system}</option>)}
                            </select>
                        </div>

                        <h3>Operational Base</h3>

                        <div className={starSystem}>

                            {!baseStatus ? (
                                <></>
                            ) : (
                                <>
                                    {bases.map((base, index) =>
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
                                </>
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