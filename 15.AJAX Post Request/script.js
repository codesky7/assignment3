async function Response (){
  let data={
    name: "John Doe",
    email: "johndoe@example.com"
  };
    let res=await axios.post('https://api.example.com/submit',data);
if(res.status==200){
  console.log("Send JSON payload Successfully")
}
else{
  console.log("error")
}
}

Response ();