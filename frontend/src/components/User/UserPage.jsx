import React from 'react'
import {Form, ProgressBar, Image} from 'react-bootstrap'
import UserCreate from './UserCreate'
import UserJoin from  './UserJoin'

export default function UserPage(props) {

    return (
        <div>
            <div className="d-flex flex-row-reverse">
                <Image src='/assets/images/ペコリーヌ(プリンセス).png' className="mt-2" roundedCircle />
            </div>
            <Form.Group className="mt-n4 fixed-name">
                <Form.Label>Name</Form.Label>
                <Form.Control disabled value={props.name} />
            </Form.Group>

            <UserJoin />
            <UserCreate />

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
