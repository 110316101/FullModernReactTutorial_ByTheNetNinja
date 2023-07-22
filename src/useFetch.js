import { useState,useEffect } from "react";
 
const useFetch = (url)  =>{
    const [data, setData] = useState(null); 
    const [isPending,setIsPending]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(() => {
      const abortCont = new AbortController(); 
      
      fetch(url ,{signal:abortCont.signal}) //fetch提供了一種 JavaScript Interface 來操作 HTTP pipeline，fetch 透過網路取得 json 然後印出在 console
        .then(res => { 
         //console.log(res)
         if(!res.ok){
           throw Error('could not fetch the data for that resource');
         }
         return res.json();
        })
        .then(data => {
         setData(data);
         setIsPending(false);
         seterror(null);
        })
        .catch( (err) => {

            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              // auto catches network / connection error
              setIsPending(false);
              seterror(err.message);
            }
          })

          return () => abortCont.abort();
       }, [url]);

       return { data , isPending , error}
}

export default useFetch;