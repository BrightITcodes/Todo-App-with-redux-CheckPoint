import React,{useState} from 'react'
import { Button, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { editTask } from "../redux/actions/action"


const EditTask = ({ todo }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [editText, setEditText] = useState("")

    const edit = () =>{
        dispatch(editTask(todo.id, editText));
        handleClose();
    }
    return (
    <div>
        <button type="button" class="btn btn-outline-danger btn-space" onClick={handleShow}>EDIT</button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text" className="form-control" onChange={(e) => setEditText(e.target.value)} value={editText} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
    )
}

export default EditTask
