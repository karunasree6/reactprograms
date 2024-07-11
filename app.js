APP.JS
import BtnEvent from &quot;./BtnEvent.js&quot;;
import Gallery from &quot;./stateUses&quot;;
import TaskApp from &quot;./Tasks&quot;;
export default function App(){
  return(
    &lt;&gt;
    &lt;BtnEvent/&gt;
    &lt;hr/&gt;
    &lt;Gallery/&gt;
    &lt;hr/&gt;
    &lt;TaskApp/&gt;
    &lt;hr/&gt;
    &lt;/&gt;
  );
}

2.BtnEvents.js
export default function BtnEvent() {
    return (
     &lt;Toolbar
      onPlayMovie={() =&gt; alert(&#39;Playing Movie!&#39;)}  
      onUploadImage={() =&gt; alert(&#39;Uploading Image!&#39;)}
      showmessage={()=&gt; alert(&#39;Showing Message&#39;)}
     /&gt;  
    );  
   }
   function Toolbar({ onPlayMovie, onUploadImage, showmessage }) {
    return (
     &lt;div&gt;
      &lt;Button onClick={onPlayMovie}&gt;
       Play Movie
      &lt;/Button&gt;
      &lt;Button onClick={onUploadImage}&gt;
       Upload Image
      &lt;/Button&gt;
      &lt;Button onClick={showmessage}&gt;  
       Show Message  
      &lt;/Button&gt;
     &lt;/div&gt;
    );
   }
   function Button({ onClick, children }) {
     return (  

     &lt;button onClick={onClick}&gt;
      {children}
     &lt;/button&gt;
    );
   }
