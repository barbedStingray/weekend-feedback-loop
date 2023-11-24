
// Imports - middleware
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// imports - components
import RadioButton from '../RadioButton/RadioButton.jsx';


function Resources() {

    // Variables
    const history = useHistory();
    const dispatch = useDispatch();
    const [weaponOutfit, setWeaponOutfit] = useState('');
    const [weaponCondition, setWeaponCondition] = useState('');
    const [armorCondition, setArmorCondition] = useState('');


    // continue button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('supportRate', weaponOutfit);

        const action = {
            type: 'SET_RESOURCES',
            payload: { weaponOutfit, weaponCondition, armorCondition }
        }
        dispatch(action);
        history.push('/encounters');
    }

    // back button
    const goBackAPage = () => {
        history.push('/starSystems');
    }


    return (
        <div id="page-div">
            <div id="support-div">
                <form onSubmit={handleSubmit}>

                    <h3>Weapon Type and Condition</h3>

                    <div>
                        <select
                            onChange={(e) => setWeaponOutfit(e.target.value)}
                        >
                            <option value="" >Your Weapon</option>
                            <optgroup label="Blasters and Rifles">
                                <option value="E-11 Blaster Rifle" >E-11 Blaster Rifle</option>
                                <option value="EE-4 Carbine Rifle" >EE-4 Carbine Rifle</option>
                                <option value="SX-21 Blaster Rifle" >SX-21 Blaster Rifle</option>
                            </optgroup>
                            <optgroup label="Heavy Weapons">
                                <option value="DLT-19 Heavy Blaster Rifle" >DLT-19 Heavy Blaster Rifle</option>
                                <option value="T-21 Light Repeating Blaster" >T-21 Light Repeating Blaster</option>
                            </optgroup>
                            <optgroup label="Sniper Rifles">
                                <option value="E-11 Sniper Rifle" >E-11 Sniper Rifle</option>
                                <option value="DLT-19x Targeting Blaster" >DLT-19x Targeting Blaster</option>
                            </optgroup>
                            <optgroup label="Pistols and Hand Weapons">
                                <option value="SE-14C Blaster Pistol" >SE-14C Blaster Pistol</option>
                                <option value="EC-17 Hold-Out Blaster" >EC-17 Hold-Out Blaster</option>
                                <option value="Electrostaff" >Electrostaff</option>
                            </optgroup>
                        </select>
                    </div>

                    <div id="weapon-field" className="fadedDiv">
                        <RadioButton value='1' name="weapon-condition" status={setWeaponCondition} />
                        <RadioButton value='2' name="weapon-condition" status={setWeaponCondition} />
                        <RadioButton value='3' name="weapon-condition" status={setWeaponCondition} />
                        <RadioButton value='4' name="weapon-condition" status={setWeaponCondition} />
                        <RadioButton value='5' name="weapon-condition" status={setWeaponCondition} />
                    </div>

                    <h3>Armor Condition</h3>

                    <div id="armor-field" className="fadedDiv">
                        <RadioButton value='1' name="armor-condition" status={setArmorCondition} />
                        <RadioButton value='2' name="armor-condition" status={setArmorCondition} />
                        <RadioButton value='3' name="armor-condition" status={setArmorCondition} />
                        <RadioButton value='4' name="armor-condition" status={setArmorCondition} />
                        <RadioButton value='5' name="armor-condition" status={setArmorCondition} />
                    </div>


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

export default Resources;