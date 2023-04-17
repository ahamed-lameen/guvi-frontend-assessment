/**
* 
* textarea.jsx
* @author - Lameen
* @date - 13/04/2023
**/
import './style.css'

function Textarea(props) {
    return ( 
        <>
            <textarea className='about-box' rows={props.rows} placeholder={props.placeholder} onChange={props.handleChange}></textarea>
            <p className='field-error'>{props.error}</p>
        </>
    );
}

export default Textarea;