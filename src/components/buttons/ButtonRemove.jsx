import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTrashAlt } from 'react-icons/fa';
import { UseTasks } from '../../contexts/TasksContext';

const ButtonRemove = () => {
    const storageTasks = JSON.parse(localStorage.getItem('tasksSaveUsers'));
    const { setTasks } = UseTasks();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemoveTask = (id) => {
        const remove = storageTasks.filter(task => task.id != id);
        localStorage.setItem("tasksSaveUsers", JSON.stringify(remove));
        setShow(false);
        return setTasks(remove); 
    }

    return (
        <div>
            <Button variant="danger" onClick={handleShow}>
                <FaTrashAlt />
            </Button>

            <div>
                {storageTasks.map(task => (
                    <Modal key={task.id} className='modal' show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>🔔 Alerta!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Tem certeza que deseja apagar a tarefa ? </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="danger" onClick={() => handleRemoveTask(task.id)}>
                                Apagar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                ))}
            </div>
        </div>
    )
}

export default ButtonRemove