import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  const baseUrl = 'https://react-http-a4e82-default-rtdb.asia-southeast1.firebasedatabase.app/';

  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  useEffect(() => {
    const handleFetchData = taskDatas => {

      const loadedTasks = [];
  
      for (const taskKey in taskDatas) {
        loadedTasks.push({ id: taskKey, text: taskDatas[taskKey].text });
      }
      setTasks(loadedTasks);    
    };    
    fetchTasks({
      url: `${baseUrl}tasks.json`,
    }, handleFetchData);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
