import { useEffect } from "react";

 const useTitle = title =>{

    useEffect( () =>{
        // document.title = title;
        document.title = `CBW | ${title}`;
    } , [title])
 };

 export default useTitle;