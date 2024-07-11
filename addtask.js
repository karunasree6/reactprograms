AddTask.js
import { useState } from &#39;react&#39;;
export default function AddTask({ onAddTask }) {
 const [text, setText] = useState(&#39;&#39;);
 return (
  &lt;&gt;
   &lt;input
    placeholder=&quot;Add task&quot;
    value={text}
    onChange={e =&gt; setText(e.target.value)}
   /&gt;
   &lt;button onClick={() =&gt; {
    setText(&#39;&#39;);
    onAddTask(text);
   }}&gt;Add&lt;/button&gt;
  &lt;/&gt;
 )
}
