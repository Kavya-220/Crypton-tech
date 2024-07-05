import React from 'react';
import './App.css';
import WidgetOrderStats from './Components/WidgetOrderStats/WidgetOrderStats';
import data from '../src/assets/data.json'

const App = () => {
  return (
    <div className="App">
       <h1>Order Stats</h1>
      <WidgetOrderStats stats={data.stats}/>
    </div>
  );
}

export default App;
