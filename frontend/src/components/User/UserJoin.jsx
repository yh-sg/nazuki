import React, {useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap'

export default function UserJoin() {

    const [joins, setJoins] = useState([{value: null}])

    const handleChange = (i, event) =>{
        let values = [...joins];
        values[i] = event.target.value;
        setJoins(values)
    }

    function handleAdd() {
        const values = [...joins];
        values.push({ value: null });
        setJoins(values);
      }
    
      function handleRemove(i) {
        const values = [...joins];
        values.splice(i, 1);
        setJoins(values);
      }

    const backToHome = () => {
        sessionStorage.removeItem('token')
    }

    return (
        <div>
            <Form className="form-border mt-3 p-4">
                <h1>Joining</h1>

                <button type="button" onClick={() => handleAdd()}>
                    +
                </button>

                {joins.map((join, index)=>{
                    return(
                        <div key={`${join}-${index}`}>
                            <input
                            type="text"
                            placeholder="Enter text"
                            value={join.value || ""}
                            onChange={e => handleChange(index, e)}
                            />
                            <button type="button" onClick={() => handleRemove(index)}>
                                X
                            </button>
                        </div>
                    )
                })}

                {/* <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Meet Options:</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    </Form.Control>
                </Form.Group> */}

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
