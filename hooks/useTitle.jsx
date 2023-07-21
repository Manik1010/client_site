import { useEffect } from "react";

 const useTitle = title =>{

    useEffect( () =>{
        // document.title = title;
        document.title = `Demo | ${title}`;
    } , [title])
 };

 export default useTitle;