// src/App.js
import React from 'react';
import './App.css';  // Import your CSS for styling
import img1 from '../src/assets/img1.jpg'
import img2 from '../src/assets/img2.jpg'
import img3 from '../src/assets/img3.jpg'
import TransactionList from './Components/TransactionList';

// Sample transaction data
const transactions = [
    { id: 1, image:img1, name: "Aokiji", details: "28 Feb 2023", timing :"06:23 PM", amount: "+$13.00", statement:"Received"},
    { id: 2, image:img2, name: "Kizaru", details: "28 Feb 2023" , timing: "06:23 PM", amount: "-$9.00", statement:"Outgoing" },
    { id: 3, image:img3, name: "Akainu", details: "28 Feb 2023" , timing:" 06:23 PM", amount: "+$20.00", statement:"Received" },
    
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Last Transactions</p>
                <p className='right-side'>See All</p>
            </header>
            <main>
                <TransactionList transactions={transactions} />
            </main>
        </div>
    );
}

export default App;
