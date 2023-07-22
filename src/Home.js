import { useState , useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
   
   {/*lesson 7-8 
   
    // let name = 'mario';  //不具有reactive (反應性)
    const[name,setName] = useState('mario');
    //name 初始值，setname更改值  資料型態可微陣列、物件.....
    const [age,setAge]=useState(25);

    const handleClick = () => {
       setName('susan');
       setAge(20);
    }
    
    const handleClickAgain = (name, e) => {
      console.log('hello ' + name, e.target);
    }
    
    return (  
        <div className="home">
            <h2>Homepage</h2>    
            <p>{name} is {age} years old</p>
            /*useState hook --更改值的方法*/
      //<button onClick={handleClick}>Click me</button>
    /* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
      //這個語法確保是在 handleClickAgain 中被綁定，一般建議在 constructor 內綁定
     
     </div>  
    );*/}
//  ------------------------------------------------------------------------------------------------
  /*lesson 10-16 output lists*/
  { /*  const [blogs, setBlogs] = useState([ //允許我們跟踪函數組件中的狀態。
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
  
    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);  //存入不等於自己id的其他blog
        setBlogs(newBlogs);
    }


    //useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    //useEffect 內的 function 會在組件渲染完後被呼叫，要注意的是「渲染完後」才會呼叫，如果你知道 callback function 的概念，這個 useEffect 內的函式就很像是組件渲染完後要執行的 callback function。
    useEffect(() => {
      console.log('use effect ran');
      console.log(blogs);
    }, [name]) 
   
    return (
      <div className="home">
       <BlogList 
          blogs={blogs}
          title="All Blogs"
          handleDelete={handleDelete}
       />   //props -more  reusable (傳遞給 JSX 標記的信息)
      // <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> *filter 將經指定的函式運算後，由原陣列中通過該函式檢驗的元素回傳一個新陣列。
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
      </div>
    );*/}




    //lesson 17-
    const {data:blogs , isPending , error} = useFetch('http://localhost:8000/blogs')
          //獲取數據
    return (
      <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" /> /**左邊是true 才會進行右邊 */} 
      </div>
    );
  }
  export default Home;