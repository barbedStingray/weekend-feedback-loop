

function RadioButton(props) {

    return (
        <div id='radio-btn'>
            <label><input
                type='radio'
                value={props.value}
                name={props.name}
                onChange={(e) => props.status(e.target.value)}
            ></input>{props.value}</label>
        </div>
    )
}
export default RadioButton;