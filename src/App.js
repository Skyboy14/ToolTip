import { useState } from 'react';
import './App.css';
import ToolTip from './Components/ToolTip';

function App() {
  // set position hook
  const [selectedPosition, setselectedPosition] = useState('top');

  //  text to show at tooltip 
  const text = `Thanks for hovering, I'm a tooltip !!`

  // function to set position
  const handlePositionChange = (event) => {
    setselectedPosition(event.target.value);
  };

  return (
    <>
      <div className='selectCover'>
        <h3>Select position for ToolTip</h3>
        <label htmlFor="options">Choose an option:</label>
        <select id="options" style={{ marginLeft: '5px' }} value={selectedPosition} onChange={handlePositionChange}>
          <option value="">Select Position</option>
          <option value="top">top</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
          <option value="right">right</option>
        </select>
      </div>

      <div className='cover'>
        <ToolTip text={text} position={selectedPosition} />
      </div>

    </>
  );
}

export default App;
