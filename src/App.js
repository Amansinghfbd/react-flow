import React, { useState } from 'react';
import CreateNodeButton from './CreateNodeButton';
import Flow from './Flow';
import './App.css'

function App() {
  const [showFlow, setShowFlow] = useState(false);

  return (
    <div>
      {!showFlow && <CreateNodeButton onClick={() => setShowFlow(true)} />}
      {showFlow && <Flow />}
    </div>
  );
}

export default App;
