import githublogo from './components/assets/githublogo.png'
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import SubForm  from './components/LoginForm/SubForm';

function App() {
  return (
    <div>
      <div className='github-logo'>
        <img src={githublogo} />
      </div>
      <div className='sign-in'>Sign in to GitHub</div>
      <br></br>
        <LoginForm />
        <SubForm />
    </div>
  );
}

export default App;
