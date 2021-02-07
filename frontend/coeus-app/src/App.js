import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import LandingPage from './pages/LandingPage'
import routes from './config/routes'
import NavBar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <NavBar />
     {/*  <LandingPage /> */}
      { routes }
    </div>
  );
}

export default App;
