import React, { createContext, useContext, useState, useEffect } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Table from './components/Table';
import ThemeToggle from './components/ThemeToggle';

//here ga create anay ako hin const context para matawag ha iba na jsx file ngan mamanage ko an context...
export const ThemeContext = createContext();

const TableWithCRUD = () => {
  // here gigamitan kog object destructuring syntax para tawgon an default mode nga light mode wherein an darkmode since naka false man hiya...
  const { darkMode } = useContext(ThemeContext);
   // ginaarray sini na part ang mga data...
  const [data, setData] = useState([]);
  // ginaset ang mga data...
  const [formData, setFormData] = useState({
    id: null,
    fromCity: '',
    departureTime: '',
    destinationCity: '',
    arrivalTime: '',
    transportationType: '',
  });
  // here if mag edit siya, ginanull anay ang editon para mabutangan hin edited data...
  const [editId, setEditId] = useState(null);

  // here naman is once nag input kag data sa input fields, marecognize na siya since nibase mani sa name ug value. so once an name na imong gi input is for city, didto lang talaga na sa city muinput, dili na mukadto sa iba...
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //
  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (editId !== null) {
      const updatedData = data.map(item => (item.id === editId ? formData : item));
      setData(updatedData);
      setEditId(null);
    } else {
      const newItem = { ...formData, id: data.length + 1 };
      setData([...data, newItem]);
    }
    setFormData({
      id: null,
      fromCity: '',
      departureTime: '',
      destinationCity: '',
      arrivalTime: '',
      transportationType: '',
    });
  };

  const handleEdit = (id) => {
    const editedItem = data.find(item => item.id === id);
    setFormData({ ...editedItem });
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  // save data to local storage when data changes diretso array...
  useEffect(() => {
    localStorage.setItem('dataStorage', JSON.stringify(data));
  }, [data]);

  // gi load an data sa localstorage ngan may key nga dataStorage...
  useEffect(() => {
    const savedData = localStorage.getItem('dataStorage');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <form onSubmit={handleAddOrUpdate}>
        {/* // gi tawag here ang input form para ma load ang form ngan mahandle ang change once naay ig input dira sa fields... */}
        <InputForm formData={formData} handleChange={handleChange} />
        <br/>
        <button type="submit" className='addButton'>{editId !== null ? 'Edit' : 'Add'}</button>
      </form>
      <br/>
      {/* here naman is gitawag an table component para an data ngan mainput ug masave sa table is maedit ug madelete... */}
      <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
      <br/>
      {/* gitawag naman dd an theme toggle para ssan dark and light mode, pero an natotoggle la hini is an children, diri an bugos na webpage... */}
      <ThemeToggle />
    </div>
  );
};

const App = () => {
  // gin initialize ko anay an darkmode ngan gigamitan setter para tawgon niyan as function para han toggle toggle san button...
  const [darkMode, setDarkMode] = useState(false);

  // create kog function na toggletheme para itoggle niyan fro light to dark vice versa...
  const toggleTheme = () => {
    // giset dd an darkmode into prevmode => !prevmode...
    setDarkMode(prevMode => !prevMode);
  };

  return (
    // here is giwrap ko na an themecontext ha provider tas gintawag ko an darkmode na initializer for toggling, ngan an toggle theme...
    // so once ga pindot adto na toggle button, nattrigger an light mode na default value han darkmode and toggletheme na magiging dark mode na...
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    <TableWithCRUD />
    </ThemeContext.Provider>
  );
};

export default App;