
// Imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import RadioButton from '../RadioButton/RadioButton.jsx';


function Support() {

    // Variables
    const [weaponOutfit, setWeaponOutfit] = useState('');
    const [vehicleUse, setVehicleUse] = useState(false);
    const [weaponCondition, setWeaponCondition] = useState('');
    const [armorCondition, setArmorCondition] = useState('');


    const history = useHistory();
    const dispatch = useDispatch();


    // function to continue
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('supportRate', weaponOutfit);

    // dispatch
        const action = { 
            type: 'SUPPORT_RATE', 
            payload: { weaponOutfit, weaponCondition, armorCondition }}
        dispatch(action);

    // send to Comments
        history.push('/encounters');
    }

    // send to Understanding
    const goBackAPage = () => {
        history.push('/starSystems');
    }


// parts to add
// vehicle type**
// vehicle condition**




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


                <h4>What is the Condition of your Weapon</h4>

                <RadioButton value='Old and Busted' name="weapon-condition" status={setWeaponCondition}/>    
                <RadioButton value='Needs Adjustments' name="weapon-condition" status={setWeaponCondition}/>    
                <RadioButton value='Kinda Works' name="weapon-condition" status={setWeaponCondition}/>    
                <RadioButton value='Battle Tested' name="weapon-condition" status={setWeaponCondition}/>    
                <RadioButton value='Brand New' name="weapon-condition" status={setWeaponCondition}/>    
                
                {weaponCondition}

                <h4>What is the Condition of your Armor</h4>
                <RadioButton value='Im wearing Rags' name="armor-condition" status={setArmorCondition}/>    
                <RadioButton value='Plenty of Holes' name="armor-condition" status={setArmorCondition}/>    
                <RadioButton value='Rough around the edges' name="armor-condition" status={setArmorCondition}/>    
                <RadioButton value='Worn but Protective' name="armor-condition" status={setArmorCondition}/>    
                <RadioButton value='Shiny and New' name="armor-condition" status={setArmorCondition}/>    

                {armorCondition}

                <h4>Did you use a vehicle?</h4>

                <RadioButton value={'Yes'} name="vehicle-use" status={setVehicleUse} />
                <RadioButton value={'No'} name="vehicle-use" status={setVehicleUse} />

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