import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import LandingPage from './pages/LandingPage'
import routes from './config/routes'
import NavBar from './components/Navbar/Navbar'
import { useEffect } from "react"
import AuthModel from "./models/auth"
import { userState } from "./recoil/atoms"
import { useSetRecoilState } from "recoil"

function App() {
  const setUser = useSetRecoilState(userState)
  useEffect(function (){
    if ( localStorage.uid ) {
      AuthModel.verify()
      .then(function(json){ setUser(json.user)})

    }
  }, [])
  return (
    <div className="App">
      <NavBar />
      { routes }
    </div>
  );
}

export default App;
