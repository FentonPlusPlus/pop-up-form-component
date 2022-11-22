import './App.css';
import Popup from "../PopUp/Popup.js"
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
    <main>
    <h1>
      My pop-up form component
    </h1>
    <button onClick={() => setButtonPopup(true)}>
      Open Pop-up!
    </button>

    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    </Popup>
    </main>
    
    </div>
  );
}

export default App;
