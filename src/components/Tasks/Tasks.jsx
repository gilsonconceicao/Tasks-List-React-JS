import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
//bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Task.css';
import { UseTasks } from '../../contexts/TasksContext';

export const Tasks = () => {
  const storageTasks = JSON.parse(localStorage.getItem('tasksSaveUsers'));
  const { setTasks } = UseTasks();

  const handleRemoveTask = (id) => {
    const remove = storageTasks.filter(checkedId => checkedId.id != id);
    localStorage.setItem("tasksSaveUsers", JSON.stringify(remove));
    alert('Tarefa apagada com sucesso!');
    return setTasks(remove);
  }

  return (
    <section>
      <Link className='btn_back' to='/'>
        <IoMdArrowRoundBack />
      </Link>
      <div className='options'>
        <h3 className='title'>Minha lista</h3>
        <Link to='/createdTask' className='add_mew_task'>
          <MdAddCircle />
        </Link>
      </div>

      <div className='container_tasks'>
        {storageTasks ? storageTasks.map(task => (
          <div key={task.id} className='task_box_list_with_title'>
            <h4>{task.title}</h4>

            <div className='flex_options'>
              <button className='btn_trash' onClick={() => handleRemoveTask(task.id)}>
                <FaTrashAlt />
              </button>
              <Link className='send_task' to={`/viewtask/${task.id}`}>
                <BiSend />
              </Link>
            </div>
          </div>
        ))
          :
          <h3 className='message_list_empty'>Sua lista está vázia por enquanto :(</h3>}
      </div>

    </section>
  )
}
