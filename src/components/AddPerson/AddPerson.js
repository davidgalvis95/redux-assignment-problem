import React, {useState} from 'react';

import './AddPerson.css';

const addPerson = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    return (<div className="AddPerson">
        <input placeholder="Name"
               onChange={(event) => nameChangeHandler(event)}
               value={name}/>
        <input placeholder="Age"
               onChange={(event) => ageChangeHandler(event)}
               value={age}/>
        <button onClick={() => props.personAdded({name: name, age: age})}>Add Person</button>
    </div>)
};

export default addPerson;