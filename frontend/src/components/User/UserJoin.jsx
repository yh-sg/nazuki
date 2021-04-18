import React from 'react'
import {Form, Button, Col} from 'react-bootstrap'

export default function UserJoin() {

    const backToHome = () => {
        localStorage.removeItem('token')
    }

    return (
        <div>
            <Form className="form-border mt-3 p-4">
                <h1>Joining</h1>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Meet Options:</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    </Form.Control>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Password</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Re-type</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <div className="mt-3">
                    <Button variant="success" type="submit" onClick={backToHome}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}
