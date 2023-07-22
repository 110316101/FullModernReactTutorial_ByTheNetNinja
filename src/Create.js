import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title ,setTitle]=useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const[isPending,setIsPending]=useState(false);
    const history = useHistory();

    const handleSubmit =(e) =>{
        e.preventDefault();//如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞。
        const blog = { title, body, author };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)  //將 JavaScript 值轉換為 JSON 字符串(物件變 JSON)
        }).then(() => {
          console.log('new blog added');
          setIsPending(false);
          //history.go(-1);  往前一頁（等同於呼叫 back()）：
          //window.history.go(1);往後一頁（等同於呼叫 forward()）：
          history.push('/'); //頁面轉移
        })

     
      }
  
    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input type="text"
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 ></input>{/**当元素的值发生改变时，会发生 onchange 事件。 */}
                <label >Blog body:</label>
                <textarea
                 required
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
                 ></textarea>
                <label >Blog author:</label>
                <select 
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}
                 >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
        </div>
    );
}
 
export default Create;