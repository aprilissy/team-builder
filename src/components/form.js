import React from 'react';

function Form(props) {
    const { values, update, submit } = props

    const onChange = (evt) => {

        const { name, value } = evt.target;
        console.log('evt', name, value);
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };


    return (
        <form onSubmit={onSubmit}>
            <label>
                Name
                <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    placeholder='Type your name'
                    maxLength='30'
                />
            </label>
            <label>
                Email
                <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder='Enter your email'
                    maxLength='50'
                />
            </label>
            <label>
                Role
                <select name='role' value={values.role} onChange={onChange}>
                    <option value='---select role---'>---select role---</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Designer'>Designer</option>
                    <option value='Marketing'>Marketing</option>
                </select>
            </label>
            <div>
                <button>Submit</button>
            </div>

        </form>
    );
};

export default Form;