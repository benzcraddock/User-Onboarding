import React from 'react';

const Form = (props) => {

    const { submit, change, errors } = props;
    const { username, email, password, tos } = props.values

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
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a new user</h2>
                <p>{errors.username}</p>
            </div>
            
            <div className='form-group inputs'>
                <h3>General information</h3>
                    {/* inputs */}
                    <label>Name:
                        <input 
                            value={username}
                            onChange={onChange}
                            name='first name'
                            type='text'
                        />
                    </label>
                    <br />
                    <label>Email
                        <input
                            value={email}
                            onChange={onChange}
                            name='email'
                            type='text'
                        />
                    </label>
                    <br />
                    <label>Password
                        <input 
                            value={password}
                            onChange={onChange}
                            name="password"
                            type="password"
                        />
                    </label>

                    <label>Terms of Service:
                        <input
                            value={tos}
                            onChange={onChange}
                            name="tos"
                            type="checkbox"
                        />
                    </label>
            </div>
        </form>
    )
}

export default Form;
