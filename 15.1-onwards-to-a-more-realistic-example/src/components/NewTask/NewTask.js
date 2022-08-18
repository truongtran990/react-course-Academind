import { useState } from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const baseUrl = 'https://react-http-a4e82-default-rtdb.asia-southeast1.firebasedatabase.app/';
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();

  const creatTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  
  
  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url:`${baseUrl}tasks.json`,
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      },    
    }, creatTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
