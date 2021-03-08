import React, {Component} from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actions from '../components/Actions/actions'

class Persons extends Component {

    personAddedHandler = () => {
        return {
            id: Math.random(), // not really unique but good enough here!
            name: 'David',
            age: Math.floor(Math.random() * 40)
        };
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={() => this.props.onAddPerson(this.personAddedHandler())} />
                {this.props.persons.map(person => {
                    console.log(person)
                    return (<Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletePerson(person.id)}/>);
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (person) => dispatch({type: actions.ADD_PERSON, payload: person}),
        onDeletePerson: (personId) => dispatch({type: actions.DELETE_PERSON, id: personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);