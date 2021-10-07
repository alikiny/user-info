import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div className='app container p-5'>
      <div className='row'>
        {users.map((user, index) => <Card key={index} user={user} />)}
      </div>
    </div>
  );
}

export default App;
