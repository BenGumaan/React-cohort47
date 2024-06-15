import react, { useState, useEffect } from 'react';
import Person from './Person';
import Button from './Button';

const URL = 'https://www.randomuser.me/api?results=1';

const PersonController = () => {
    
    const [person, setPerson] = useState(null);

    const getPerson = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            const person = data.results[0];
            const formattedPersonData = {
              first_name: person.name.first,
              last_name: person.name.last,
              email: person.email
            };
            setPerson(formattedPersonData);
        } catch (error) {
            console.error('Error fetching random user data:', error);
        }
    }

    useEffect(() => {
        getPerson();
    }, []);

    return (
        <div className="card-container">
            <Person person={person} />
            <Button getPerson={getPerson} />
        </div>
    )
}

export default PersonController;