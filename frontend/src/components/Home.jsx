import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

export default function Home(props) {

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName({[event.target.name]:event.target.value})
    }

    const loginHandler = () => {
        props.login(name)
        console.log(name)
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter name" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="button" disabled={name.length<3} onClick={loginHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
