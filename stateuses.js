stateUses.js
import { useState } from &#39;react&#39;;
import { sculptureList } from &#39;./data.js&#39;;
export default function Gallery() {
 const [index, setIndex] = useState(0);
 const [showMore, setShowMore] = useState(false);
 function handleNextClick() {
  setIndex(index + 1);
 }
 function handleMoreClick() {
  setShowMore(!showMore);
 }
 let sculpture = sculptureList[index];
 return (
  &lt;&gt;
   &lt;button onClick={handleNextClick}&gt;
    Next
   &lt;/button&gt;
   &lt;h2&gt;
    &lt;i&gt;{sculpture.name} &lt;/i&gt;
     by {sculpture.artist}
   &lt;/h2&gt;
   &lt;h3&gt;
    ({index + 1} of {sculptureList.length})
   &lt;/h3&gt;
   &lt;button onClick={handleMoreClick}&gt;
    {showMore ? &#39;Hide&#39; : &#39;Show&#39;} details
   &lt;/button&gt;
   {showMore &amp;&amp; &lt;p&gt;{sculpture.description}&lt;/p&gt;}
   &lt;img
    src={sculpture.url}
    alt={sculpture.alt}
   /&gt;
  &lt;/&gt;
 );
}








