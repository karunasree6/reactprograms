import { useState } from &#39;react&#39;;
export default function TaskList({
 tasks,
 onChangeTask,
 onDeleteTask
}) {
 return (
  &lt;ul&gt;
   {tasks.map(task =&gt; (
    &lt;li key={task.id}&gt;
     &lt;Task
      task={task}
      onChange={onChangeTask}
      onDelete={onDeleteTask}
     /&gt;
    &lt;/li&gt;
   ))}
  &lt;/ul&gt;
 );
}
function Task({ task, onChange, onDelete }) {
 const [isEditing, setIsEditing] = useState(false);
 let taskContent;
 if (isEditing) {
  taskContent = (

   &lt;&gt;
    &lt;input
     value={task.text}
     onChange={e =&gt; {
      onChange({
       ...task,
       text: e.target.value
      });
     }} /&gt;
    &lt;button onClick={() =&gt; setIsEditing(false)}&gt;
     Save
    &lt;/button&gt;
   &lt;/&gt;
  );
 } else {
  taskContent = (
   &lt;&gt;
    {task.text}
    &lt;button onClick={() =&gt; setIsEditing(true)}&gt;
     Edit
    &lt;/button&gt;
   &lt;/&gt;
  );
 }
 return (
  &lt;label&gt;
   &lt;input
    type=&quot;checkbox&quot;
    checked={task.done}
    onChange={e =&gt; {
     onChange({
      ...task,
      done: e.target.checked
     });
    }}
   /&gt;
   {taskContent}
   &lt;button onClick={() =&gt; onDelete(task.id)}&gt;
    Delete
   &lt;/button&gt;
  &lt;/label&gt;
 );
}
