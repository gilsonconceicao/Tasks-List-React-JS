import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import './ViewTask.css';

export const ViewTask = () => {
    const { id } = useParams();
    const [mark, setMarkCompleted] = useState(false);

    const storageTasks = JSON.parse(localStorage.getItem('tasksSaveUsers'))
        .filter(list => list.id == id);

    return (
        <div>
            {storageTasks.map(task => (
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
                </div>
            ))}
        </div>
    )
}
