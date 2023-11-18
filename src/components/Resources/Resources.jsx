
// Imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import RadioButton from '../RadioButton/RadioButton.jsx';


function Support() {

    // Variables
    const [weaponOutfit, setWeaponOutfit] = useState('');
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
            payload: { weaponOutfit, weaponCondition, armorCondition }
        }
        dispatch(action);

        // send to Comments
        history.push('/encounters');
    }

    // send to Understanding
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
                            <option value="E-11 Blaster Rifle" >E-11 Blaster Rifle</option>
                        </select>

                        {weaponOutfit}

                    </div>

                    <div id="weapon-field" className="fadedDiv">
                        <RadioButton value='1' name="weapon-condition" status={setWeaponCondition} />
                        <RadioButton value='2' name="weapon-condition" status={setWeaponCondition} />
                        <RadioButton value='3' name="weapon-condition" status={setWeaponCondition} />
                        <RadioButton value='4' name="weapon-condition" status={setWeaponCondition} />
                        <RadioButton value='5' name="weapon-condition" status={setWeaponCondition} />

                        {weaponCondition}

                    </div>

                    <h3>Armor Condition</h3>

                    <div id="armor-field" className="fadedDiv">
                        <RadioButton value='1' name="armor-condition" status={setArmorCondition} />
                        <RadioButton value='2' name="armor-condition" status={setArmorCondition} />
                        <RadioButton value='3' name="armor-condition" status={setArmorCondition} />
                        <RadioButton value='4' name="armor-condition" status={setArmorCondition} />
                        <RadioButton value='5' name="armor-condition" status={setArmorCondition} />
                        {armorCondition}
                    </div>


                    <div id="next-btn">
                        <button
                            type="submit"
                            id="continue-btn"
                        >Continue</button>
                    </div>
                </form>

                {/* <button
                    id="continue-btn"
                    onClick={goBackAPage}
                >Go Back</button> */}

            </div>
        </div>
    )
}

export default Support;