/**
* 
* textField.jsx
* @author - Lameen
* @date - 13/04/2023
**/
import './style.css'

function TextField(props) {
    return ( 
        <div className='field-set'>
            <input type={props.type} className='text-field' placeholder={props.placeholder} onChange={props.handleChange} value={props.initialValue} />
            <p className='field-error'>{props.error}</p>
        </div>
    );
}

export default TextField;