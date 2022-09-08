import logo from './logo.svg';
import './App.css';
import Get from "./Components/GetComponent";
import Create from "./Components/CreateComponent";
import Update from "./Components/UpdateComponent";
import Delete from "./Components/DeleteComponent";
import React from 'react';


class App extends React.Component{
  render(){
    return (
      <>
        <Get approach={getApp}/>
        <Create createApproach={createApp}/>
        <Update updateApproach={updateApp}/>
        <Delete deleteApproach={deleteApp} />
      </>
        
      
    );
  }
  
}

async function getApp(e){
  e.preventDefault();
  const id = e.target.elements.id.value;
  const response = await fetch(`https://localhost:7195/Manage/${id}`);
  console.log(response);
}

async function createApp(e){
  e.preventDefault();
  const id = e.target.elements.idCreate.value;
  const name = e.target.elements.nameCreate.value;
  const price = e.target.elements.priceCreate.value;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: `${id}`, name: `${name}`, price: `${price}` })
  };
  const response = await fetch(`https://localhost:7195/Manage`, requestOptions);
}

async function updateApp(e) {
  e.preventDefault();
  const id = e.target.elements.idU.value;
  const name = e.target.elements.nameU.value;
  const price = e.target.elements.priceU.value;

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: `${id}`, name: `${name}`, price: `${price}` })
  };
  const response = await fetch('https://localhost:7195/Manage', requestOptions);
}

async function deleteApp(e) {
  e.preventDefault();
  const id = e.target.elements.idD.value;

  const [status, setStatus] = useState('');

  useEffect(() => {
      fetch(`https://localhost:7195/Manage/${id}`, { method: 'DELETE' })
          .then(() => setStatus('Delete successful'));

  }, []);

  return (
    <div className="card text-center m-3">
        <div className="card-body">
            Status: {status}
        </div>
    </div>
);
}

export default App;
