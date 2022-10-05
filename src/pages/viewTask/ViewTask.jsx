import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';
import './ViewTask.css';
import { UseTasks } from '../../contexts/TasksContext';

export const ViewTask = () => {
    const { id } = useParams();

    const storageTasks = JSON.parse(localStorage.getItem('tasksSaveUsers'));
    const { setTasks } = UseTasks();
  
    const handleRemoveTask = (id) => {
        const remove = storageTasks.filter(checkedId => checkedId.id != id);
        localStorage.setItem("tasksSaveUsers", JSON.stringify(remove));
        window.location.href = '/tasks'; 
        
        return setTasks(remove);    

    }

    const storageTasksId = JSON.parse(localStorage.getItem('tasksSaveUsers'))
        .filter(list => list.id == id);

    return (
        <div>
            {storageTasksId.map(task => (
                <div key={task.id} className='task_box'>
                    <div className='flex_btn_title'>
                        <Link className='back_task' to='/tasks'>
                            <IoMdArrowRoundBack />
                        </Link>
                        <span className='block_note'>Bloco de notas </span>
                    </div>
                    <h2 className='title'>{task.title}</h2>
                    <p className='description'>{task.description}</p>
                    <span className='date'>{task.date}</span>

                    <button className='btn_trash' onClick={() => handleRemoveTask(task.id)}>
                <FaTrashAlt />
              </button>
                </div>
            ))}
        </div>
    )
}
