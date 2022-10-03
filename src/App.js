
import './App.css';
import AssignmentMarks from './Component/AssignmentMarks/AssignmentMarks';

import NavBar from './Component/Navbar/NavBar';
import PhoneBar from './Component/PhoneBar/PhoneBar';
import Pricing from './Component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
   <NavBar></NavBar>
     <h1>Mihir</h1>
     <Pricing></Pricing>
     <AssignmentMarks></AssignmentMarks>
     <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
