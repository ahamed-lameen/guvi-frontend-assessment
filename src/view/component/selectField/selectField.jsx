/**
* 
* selectField.jsx
* @author - Lameen
* @date - 14/04/2023
**/
import './style.css'

function SelectField(props) {
    return ( 
        <>
            <select className='drop-down'  onChange={props.handleChange} >
                <option value=''>{props.defaultValue}</option>
                    {props.options.map((item) => (
                    <option value={item}>{item}</option> 
                ))};
            </select>
            <p className='field-error'>{props.error}</p>
        </>
    );
}

export default SelectField;