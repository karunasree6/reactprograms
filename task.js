import { useReducer } from &#39;react&#39;;
import AddTask from &#39;./AddTasks.js&#39;;
import TaskList from &#39;./TaskList.js&#39;;
//import { useContext } from &#39;react&#39;;
export default function TaskApp() {
 const [tasks, dispatch] = useReducer(
  tasksReducer,
  initialTasks
 );
 function handleAddTask(text) {
  dispatch({
   type: &#39;added&#39;,
   id: nextId++,
   text: text,
  });
 }
 function handleChangeTask(task) {
  dispatch({
   type: &#39;changed&#39;,
   task: task
  });
 }
 function handleDeleteTask(taskId) {
  dispatch({
   type: &#39;deleted&#39;,
   id: taskId
  });
 }
 return (
  &lt;&gt;
   &lt;h1&gt;TASK LIST&lt;/h1&gt;
   &lt;AddTask
    onAddTask={handleAddTask}
   /&gt;
   &lt;TaskList
    tasks={tasks}
    onChangeTask={handleChangeTask}
    onDeleteTask={handleDeleteTask}
   /&gt;
  &lt;/&gt;
 );
}
function tasksReducer(tasks, action) {
 switch (action.type) {
  case &#39;added&#39;: {
   return [...tasks, {

    id: action.id,
    text: action.text,
    done: false
   }];
  }
  case &#39;changed&#39;: {
   return tasks.map(t =&gt; {
    if (t.id === action.task.id) {
     return action.task;
    } else {
     return t;
    }
   });
  }
  case &#39;deleted&#39;: {
   return tasks.filter(t =&gt; t.id !== action.id);
  }
  default: {
   throw Error(&#39;Unknown action: &#39; + action.type);
  }
 }
}
let nextId = 3;
const initialTasks = [
 { id: 0, text: &#39;Visit Annamaiha Museum&#39;, done: true },
 { id: 1, text: &#39;Watch a puppet show&#39;, done: false },
 { id: 2, text: &#39;Create a web application&#39;, done: false }
];
