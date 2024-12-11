import { Router } from "express";

const router = Router();

const tasks = [];

router.get('/getTasks', (req, res) => {
    res.json(tasks);
  });

router.post('/createTask', (req, res) => {
    const { title, status } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
  
    const newTask = { id: tasks.length + 1, title, status: status || '' };
    tasks.push(newTask);
    res.status(201).json(newTask);
  });

  router.delete('/deleteTask/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id, 10));
    if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });
  
    tasks.splice(taskIndex, 1); // Remove the task
    res.status(200).json({ message: 'Task deleted successfully' });
  });

  router.put('/updateTask/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    const task = tasks.find((task) => task.id === parseInt(id, 10));
    if (!task) return res.status(404).json({ error: 'Task not found' });
  
    task.status = status;
    res.status(200).json(task);
  });
  

  export default router;

