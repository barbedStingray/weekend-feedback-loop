
// Imports - middleware
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// imports - components
import RadioButton from '../RadioButton/RadioButton.jsx';



function StarSystems() {

    // variables
    const history = useHistory();
    const dispatch = useDispatch();
    const starSystemList = useSelector(store => store.starSystemList);
    const [starSystem, setStarSystem] = useState('');
    const [baseLocation, setBaseLocation] = useState('');
    const [baseList, setBaseList] = useState([]);

    
    // populate drop-down menu
    function getIndividualBases() {
        console.log(`getting bases`);

        for (let i = 0; i < starSystemList.length; i++) {
            if (starSystem === starSystemList[i].system) {
                let newBase = starSystemList[i].bases.split(',');
                return setBaseList(newBase);
            }
            else {
                console.log(`not the correct system`);
            }
        }
    }
    useEffect(() => {
        console.log(`useEffect:`, starSystem);
        getIndividualBases();
    }, [starSystem]);


    // continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'DATA_STAR_SYSTEM',
            payload: { starSystem, baseLocation }
        });
        history.push('/resources');
    }

    // back button
    const goBackAPage = () => {
        history.push('/trooperID');
    }

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
                            {starSystemList.map((planet) =>
                                <option key={planet.id} value={planet.system} >{planet.system}</option>)}
                        </select>
                    </div>

                    <h3>Operational Base</h3>

                    <div className={starSystem}>
                        {baseList.map((planet, index) =>
                            <div
                                id="base-div"
                                key={index}
                            >
                                <RadioButton
                                    value={planet}
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
                    onClick={goBackAPage}
                >Back</button>

            </div>
        </div>
    )
}

export default StarSystems;