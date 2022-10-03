import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css'; 

export const Home = () => {
  return (
    <>
       <h2 className='title_home'>Minha lista de tarefas</h2>
       <Link className='option_start' to='/createdTask'>Adicionar uma tarefa</Link>
       <Link className='option_start' to='/tasks'>Ver minha lista</Link>
    </>
  )
}
