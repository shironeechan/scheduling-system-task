import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const InputForm = ({ formData, handleChange }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>DEPARTURE AND ARRIVAL SCHEDULING</h1>
      <hr/>
      <br/>
      <label>  From (City):
        <input type="text" placeholder="Enter a city" name="fromCity" value={formData.fromCity} onChange={handleChange} required/>
      </label>
      <label>  Departure:
        <input type="time" placeholder="00:00" name="departureTime" value={formData.departureTime} onChange={handleChange} required/>
      </label>
      <label>  Destination (City):
        <input type="text" placeholder="Enter a city" name="destinationCity" value={formData.destinationCity} onChange={handleChange} required/>
      </label>
      <label>  Arrival:
        <input type="time" placeholder="00:00" name="arrivalTime" value={formData.arrivalTime} onChange={handleChange} required/>
      </label>
      <label>Transportation:
        <input type="text" placeholder="e.g. Bus, SUV, etc." name="transportationType" value={formData.transportationType} onChange={handleChange} required/>
      </label>
    </div>
  );
};

export default InputForm;