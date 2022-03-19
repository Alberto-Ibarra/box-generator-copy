
import './App.css';
import React, {useState} from 'react';
import Box from './components/Box'
import BoxDisply from './components/BoxDisplay'
import Boxes from './components/Boxes'

function App() {
  const [currentColor, setCurrentColor] = useState("")
  const [colors, setColors] = useState([])

const handleNewColor = (newColor) => {
  setCurrentColor(newColor)
  setColors([...colors, newColor])
}

  return (
    <div className="App">
      <Box onNewColor={handleNewColor}/>
      <BoxDisply currentColor={currentColor} colors={colors}/>
      {/* <Boxes /> */}
    </div>
  );
}

export default App;
