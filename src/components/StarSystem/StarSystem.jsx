
// Imports
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// components
import RadioButton from '../RadioButton/RadioButton.jsx';


function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    // Variables
    const starSystemList = useSelector(store => store.starSystemList);
    const [starSystem, setStarSystem] = useState('');
    const [baseLocation, setBaseLocation] = useState('');
    const [baseList, setBaseList] = useState([]);
    // console.log(`baseList:`, baseList);


    function getIndividualBases() {
        console.log(`getting bases`);

        for (let i = 0; i < starSystemList.length; i++) {
            if (starSystem === starSystemList[i].system) {
                // console.log(`SSbases:`, starSystemList[i].bases);
                let newBase = starSystemList[i].bases.split(',');
                // console.log(`SSbasesSplit:`, newBase);

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


    // function to continue
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'DATA_STAR_SYSTEM',
            payload: { starSystem, baseLocation }
        });

        history.push('/resources');
    }


    // send to feelings
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


                        {starSystem}

                    </div>

                    <h3>Operational Base</h3>

                    <div className={ starSystem }>
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
                        {baseLocation}

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

export default Understanding;