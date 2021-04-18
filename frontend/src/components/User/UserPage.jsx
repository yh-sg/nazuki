import React, {useState} from 'react'
import {Form, ProgressBar, Image, Button} from 'react-bootstrap'
import UserCreate from './UserCreate'
import UserJoin from  './UserJoin'

export default function UserPage(props) {

    const [buttonToggle, setButtonToggle] = useState("Joining")

    return (
        <div>
            <div className="d-flex bd-highlight mb-3">
                <div className="p-2 bd-highlight align-self-center">
                    <Button variant="outline-primary" onClick={()=> setButtonToggle("Joining")}>Joining</Button>{' '}
                </div>
                <div className="p-2 bd-highlight align-self-center">
                    <Button variant="outline-secondary" onClick={()=> setButtonToggle("Creating")}>Creating</Button>{' '}
                </div>
                <div className="ml-auto p-2 bd-highlight align-self-end">
                    <Image src='/assets/images/ペコリーヌ(プリンセス).png' className="mt-2" roundedCircle />
                </div>
            </div>
            <Form.Group className="mt-n4 fixed-name">
                <Form.Label>Name</Form.Label>
                <Form.Control disabled value={props.name} />
            </Form.Group>

            {buttonToggle==="Joining" && <UserJoin />}
            {buttonToggle==="Creating" && <UserCreate />}
            
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
