
// Imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Support() {

    // Variables
    const [weaponOutfit, setWeaponOutfit] = useState('');
    const [vehicleUse, setVehicleUse] = useState(false);


    const history = useHistory();
    const dispatch = useDispatch();


    // function to continue
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('supportRate', weaponOutfit);

    // dispatch
        const action = { type: 'SUPPORT_RATE', payload: weaponOutfit }
        dispatch(action);

    // send to Comments
        history.push('/encounters');
    }

    // send to Understanding
    const goBackAPage = () => {
        history.push('/starSystems');
    }

    return (
        <div id="support-div">
            <h3>How can we Support you?</h3>
            <form onSubmit={handleSubmit}>

                <select
                    onChange={(e) => setWeaponOutfit(e.target.value)}
                >
                    <option value="" >Choose One</option>
                    <option value="E-11 Blaster Rifle" >E-11 Blaster Rifle</option>
                </select>

                {weaponOutfit}

                <h4>Did you use a vehicle?</h4>
                <label><input
                    type='radio'
                    value={true}
                    onChange={(e) => setVehicleUse(e.target.value)}
                    name="vehicle-use"
                ></input>Yes</label>
                
                <label><input
                    type='radio'
                    value={false}
                    onChange={(e) => setVehicleUse(e.target.value)}
                    name="vehicle-use"
                ></input>No</label>

                {vehicleUse}

                <button id="continue-btn">Continue</button>
            </form>

                <button 
                    id="continue-btn"
                    onClick={goBackAPage}
                >Go Back</button>

        </div>
    )
}

export default Support;