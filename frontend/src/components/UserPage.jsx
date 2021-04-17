import React from 'react'
import {Form, Button, ProgressBar, Col, Image} from 'react-bootstrap'


export default function UserPage(props) {

    const backToHome = () => {
        localStorage.removeItem('token')
    }

    return (
        <div>
            <div class="d-flex flex-row-reverse">
                <Image src='/assets/images/ペコリーヌ(プリンセス).png' className="mt-2" roundedCircle />
            </div>
            <Form.Group className="mt-n4 fixed-name">
                <Form.Label>Name</Form.Label>
                <Form.Control disabled value={props.name} />
            </Form.Group>

            <Form className="form-border mt-3 p-4">
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

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Occation?</Form.Label>
                    <Form.Control as="select" defaultValue="Mahjong">
                        <option>Mahjong</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Card Game</option>
                        <option>Karaoke</option>
                        <option>Others</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Re-type</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Button variant="success" type="submit" onClick={backToHome}>
                    Submit
                </Button>
            </Form>
            <section className="form-border2 mt-3 p-4">
                <div>
                    <ProgressBar striped variant="success" now={80} />
                    <ProgressBar striped variant="info" now={60} />
                    <ProgressBar striped variant="warning" now={40} />
                    <ProgressBar striped variant="danger" now={20} />
                </div>
            </section>
        </div>
    )
}
