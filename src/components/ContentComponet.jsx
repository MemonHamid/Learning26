import React from 'react'

export default function () {
    
    var year=2026;
      var title= "react js";
      var isAvailable =true;
      var student ={
                name:"hamid",
                age: 22,
                city:"bhuj",
              };
      var college = "SSIT";
  return (
    <div style={{backgroundColor:"white",border:"1px solid black",minHeight:"500px",width:"100%",height:"auto",padding:"10px"}}>
        <p>
             VIRAT KOHLI
        </p>
       
        <h1>{year}</h1>
        <h2>Title: {title}</h2>
        <h3>Availavle?={isAvailable == true ? "TRUE" : "FALSE"}</h3>
        <h3> Name : {student.name}</h3>
        <h3> Age : {student.age}</h3>
        <h3> City : {student.city}</h3>
        <h3>college:{college}</h3>
        <h6> I AM HAMID AND MCA STUDENT</h6>
          
    </div>
  )
}
