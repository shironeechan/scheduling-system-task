import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { FaCity, FaBusAlt } from 'react-icons/fa';
import { IoIosTime } from "react-icons/io";

const InputForm = ({ formData, handleChange }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <br/>
      <h1>Departure and Arrival Scheduling</h1>
      <br/>

      <div className="divClass">
        <FaCity className="iconClass" />
        <input
        type="text"
        name="fromCity"
        placeholder="Enter city here..."
        onChange={handleChange}
        value={formData.fromCity}
        className="input-field"
        required
        />
      </div>

      <div className="divClass">
        <IoIosTime className="iconClass" />
        <input
          type="time"
          name="departureTime"
          placeholder="Enter time here..."
          onChange={handleChange}
          value={formData.departureTime}
          className="input-time"
          required
        />
      </div>
        
      <div className="divClass">
        <FaCity className="iconClass" />
        <input
          type="text"
          name="destinationCity"
          placeholder="Enter city here..."
          onChange={handleChange}
          value={formData.destinationCity}
          className="input-field"
          required
        />
      </div>

      <div className="divClass">
        <IoIosTime className="iconClass" />
        <input
          type="time"
          name="arrivalTime"
          placeholder="Enter time here..."
          onChange={handleChange}
          value={formData.arrivalTime}
          className="input-time"
          required
        />
      </div>

      <div className="divClass">
        <FaBusAlt className="iconClass" />
        <input
          type="text"
          name="transportationType"
          placeholder="Enter transportation here..."
          onChange={handleChange}
          value={formData.transportationType}
          className="input-field"
          required
        />
      </div>
    </div>

    );
  };

export default InputForm;