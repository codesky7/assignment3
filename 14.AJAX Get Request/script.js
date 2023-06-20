async function Response (){
    let res=await axios.get('https://api.example.com/data');
    if(res.status==200){
        
        console.log(res.data);
      }
      else {
        
        console.error("error");
      };
}

Response ();