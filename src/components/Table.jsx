import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Table = ({ data, handleEdit, handleDelete }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <br/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FROM (CITY)</th>
            <th>DEPARTURE</th>
            <th>DESTINATION (CITY)</th>
            <th>ARRIVAL</th>
            <th>TRANSPORTATION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fromCity}</td>
              <td>{item.departureTime}</td>
              <td>{item.destinationCity}</td>
              <td>{item.arrivalTime}</td>
              <td>{item.transportationType}</td>
              <td>
                <button className='editButton' onClick={() => handleEdit(item.id)}>Edit</button>
                <button className='deleteButton' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Table;
