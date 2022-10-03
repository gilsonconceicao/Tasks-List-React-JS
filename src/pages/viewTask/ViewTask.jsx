import React from 'react'
import { Link, useParams } from 'react-router-dom'; 
import {IoMdArrowRoundBack} from 'react-icons/io'; 
import './ViewTask.css'; 

export const ViewTask = () => {
    const { id } = useParams();

    const storageTasks = JSON.parse(localStorage.getItem('tasksSaveUsers'))
        .filter(list => list.id == id);

    return (
        <div>
            {storageTasks.map(task => (
                <div className='task_box'>
                    <div className='flex_btn_title'>
                        <Link className='back_task' to='/tasks'>
                            <IoMdArrowRoundBack/>
                        </Link>
                        <span className='block_note'>Bloco de notas </span>
                    </div>
                    <h2 className='title'>{task.title}</h2>
                    <p className='description'>{task.description}</p>
                    <span className='date'>{task.date}</span>
                </div>
            ))}
        </div>
    )
}
