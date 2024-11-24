import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { resetUserName } from '../redux/Actions/EtudiantAction';

function ChangeUserName(props) {
    const [userName, setUsername] = useState('');
    const client = useSelector(state => state.EtudiantReducers.etudiant?.client);
    const dispatch = useDispatch();
const save = async () =>{
  if (userName) {
    await dispatch(resetUserName(client._id, userName));
    props.setShow("0")
  }
  }
  return (
    <div>
          <Form.Group className="mb-4" controlId="formBasicPassword2">
              <Form.Label>Enter new UserName</Form.Label>
              <InputGroup className="mb-4">
                <Form.Control 
                  placeholder="Enter new UserName"
                  onChange={(e) => setUsername(e.target.value)}
                  className='rounded-start-pill'
                />
                <InputGroup.Text className='p-0' style={{border:'0'}}>
                </InputGroup.Text>
              </InputGroup>
              </Form.Group>

          <div className='d-flex justify-content-between my-3'>
          <Button variant="danger" onClick={() => props.setShow("0")}>
            back
          </Button>
          <Button variant="success" onClick={save}>
            Save Changes
          </Button>
          </div>
    </div>
  )
}

export default ChangeUserName
