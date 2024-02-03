import githublogo from './components/assets/githublogo.png'
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import SubForm  from './components/LoginForm/SubForm';
import Footer  from './components/LoginForm/Footer';

function App() {
  return (
    <div className='container'>
      <div className='github-logo'>
        <img src={githublogo} />
      </div>
      <div className='sign-in'>Sign in to GitHub</div>
      <br></br>
      <div className='forms-container'>
        <LoginForm />
        <SubForm />
      </div>
        <Footer />
    </div>
  );
}

export default App;
