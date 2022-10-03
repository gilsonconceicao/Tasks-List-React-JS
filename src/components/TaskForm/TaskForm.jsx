import React, { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import {IoMdArrowRoundBack} from 'react-icons/Io'
import { UseTasks } from '../../contexts/TasksContext';
import './TaskForm.css'; 

export const TaskForm = () => {
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [permission, setPermission] = useState(false);
  const [messageError, setMessageError] = useState('');
  
  //hook context tasks
  const {getTasksUser} = UseTasks(); 

  const handleSaveTasks = () => {
      if (title == '' || description == '') {
          setMessageError('Lamento! Você deve preencher os campos.'); 
        return;
        
      } else {
        getTasksUser(title, description)
        setMessageError(''); 
        setPermission(true); 
      }
  }

  return (
    <header className='flex_task_btn'>
      <h2>Adicionar uma tarefa</h2>
      <Link className='btn_back' to='/'>
        <IoMdArrowRoundBack/>
      </Link>
      <label>
        Título
        <input
          type="text"
          className='task_input'
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Digite o título da terefa'
        />
      </label>
      <label>
        Descrição
        <textarea 
          name="description" 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Digite a descrição da terefa'
          rows="10"
        />
      </label>

      {messageError && <p className='message_error'>Lamento, preencha os campos disponíveis.</p>}

     {permission == true ? <Navigate to='/tasks'/> : <button onClick={handleSaveTasks} className='btn_save_task'>Salvar</button>}
     
    </header>
  )
}
