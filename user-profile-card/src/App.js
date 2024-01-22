import './App.css';
import { UserProfileCard } from './Components/User-Profile-Card/UserProfileCard';
import { UserProfileCardTwo } from './Components/User-Profile-Card/User2';
import { UserProfileCardThree } from './Components/User-Profile-Card/User3';

function App() {
  return (
    <div className="App">
        <UserProfileCard />
        <UserProfileCardTwo />
        <UserProfileCardThree />
      
    </div>
  );
}

export default App;
