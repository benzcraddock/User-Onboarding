import React from 'react';

const Form = (props) => {

    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <div className='form-group submit'>
                <h2>Add a new user</h2>
                <h3>General information</h3>
                <p>{errors.username}</p>
                <p>{errors.password}</p>
                <p>{errors.email}</p>
                <p>{errors.tos}</p>
            </div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input 
                        value={username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>
                <br />
                <label>Email:
                    <input
                        value={email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <br />
                <label>Password:
                    <input 
                        value={password}
                        onChange={onChange}
                        name="password"
                        type="password"
                    />
                </label>
                <br />
                <label>Terms of Service:
                    <input
                        checked={tos}
                        onChange={onChange}
                        name="tos"
                        type="checkbox"
                    />
                </label>
                <br />
                <input value="Create a user" type="submit"/>
            </form>
        </div>
    )
}

export default Form;
