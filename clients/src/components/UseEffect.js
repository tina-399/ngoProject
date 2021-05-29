export default  async function fetchQuery ({uri, method ="GET", body = null}){
    const response = await fetch(uri,{
       method,
       headers:{
         "Content-Type": "application/json",
       },
       body: body !== null? JSON.stringify(body): null,
     })
     const data =await response.json();
     return data
   }