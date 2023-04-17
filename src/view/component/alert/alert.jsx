/**
* 
* alert.jsx
* @author - Lameen
* @date - 15/04/2023
**/
import './style.css'

function Alert(props) {
    return ( 
        <>
            {props.message && (<div className={props.code === 0 ? 'alert-success' : 'alert-error'}>
                <div className={props.code === 0 ? 'message-success' : 'message-error'}>
                {props.message}</div>
            </div>)}
        </>
    );
}

export default Alert;