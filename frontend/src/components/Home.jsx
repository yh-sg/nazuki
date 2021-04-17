import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

export default function Home(props) {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const loginHandler = () => {
        props.login(value)
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={value} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="button" disabled={value.length<3} onClick={loginHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
