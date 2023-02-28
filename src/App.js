
import { useState } from 'react';
import './App.css';
import contactsJson from './contacts.json';

function App() {
  let contacts = contactsJson.slice(0, 5);
  const [cont, setContacts] = useState(contacts);

  /*  const addRandomContact = () => {
     const randomContact = Math.floor(Math.random() * contactsJson.length);
     const newContact = contactsJson[randomContact];
     setContacts([newContact,...cont]);
   } */
  const addRandomContact = () => {
    const randomContact = contactsJson[Math.floor(Math.random() * contactsJson.length)];
    console.log(randomContact);
    if (cont.findIndex((elem) => elem.id === randomContact.id) === -1) {
      return setContacts([randomContact, ...cont])
    }
  }
  const sortByName = () => {
    cont.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      else return 0
    })
    setContacts([...cont])
  }

  const sortByPopularity = () => {
    cont.sort((a, b) => {
      if (a.popularity < b.popularity) return 1
      if (a.popularity > b.popularity) return -1
      else return 0
    })
    setContacts([...cont])
  }

  const deleteContact = (idContact) => {
    setContacts(cont.filter(contain => contain.id !== idContact))
  }

  return (
    <div className="App">
      <div className='botones'>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <button onClick={sortByName}>Sort by Name</button>
      </div>

      <table>
        <tr>
          <th><b>Picture</b></th>
          <th><b>Name</b></th>
          <th><b>Popularity</b></th>
          <th><b>Won Oscar</b></th>
          <th><b>Won Emmy</b></th>
        </tr>
        {cont.map(contact => {
          return <tr>
            <td><img className='images' src={contact.pictureUrl} alt='pepito' /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            {contact.wonOscar ? <td>🏆</td> : <td> </td>}
            {contact.wonEmmy ? <td>🏆</td> : <td> </td>}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </tr>
        })}
      </table>
    </div>
  );
}

export default App;
