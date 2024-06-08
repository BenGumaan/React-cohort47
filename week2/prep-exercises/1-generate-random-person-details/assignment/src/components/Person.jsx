const Person = ({person}) => {

    if (person == null) {
        return null;
    }
    
    const { first_name, last_name, email } = person;

    return (
        <ul>
            <li><b>First name:</b> {first_name}</li>
            <li><b>Last name:</b> {last_name}</li>
            <li><b>Email:</b> {email}</li>
        </ul>
    )
}

export default Person;