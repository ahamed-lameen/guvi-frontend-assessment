/**
* 
* calendar.jsx
* @author - Lameen
* @date - 16/04/2023
**/
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './style.css'

function Calendar(props) {
    return ( 
        <>
            <DatePicker className="date-box "  clearIcon={null} placeholderText={props.placeholder}
            onChange={props.handleChange}  value={props.value} format='dd/MM/yyyy' 
            dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy'/>
            <p className='field-error'>{props.error}</p>
        </>
    );
}

export default Calendar;