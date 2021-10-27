import Info from 'pages/Info';
import Login from 'pages/Login';
import 'App.css';
import useAuth from 'hooks/useAuth';
import CounterProvider from './providers/CounterProvider';

export default function App() {
  const { auth, user, login, logout } = useAuth();

  return (
    <div className="App">
      <CounterProvider>
        <h1>My App</h1>
        {!auth && <Login login={login} />}
        {auth && <Info logout={logout} user={user} />}
      </CounterProvider>
    </div>
  );
}