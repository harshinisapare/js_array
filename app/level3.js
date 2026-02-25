
'use client';
import { useState } from 'react';

export default function Page() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
  if (task.trim() === '') return;
  setTasks([...tasks, task]);
  setTask('');
};

  

}
