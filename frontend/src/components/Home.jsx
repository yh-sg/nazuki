import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

export default function Home() {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={value} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!value}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
