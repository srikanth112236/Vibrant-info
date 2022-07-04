import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddData = () => {
    // const [addData, setAddData] = useState([]);
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');


        const addName  = (e)=>{
            e.preventDefault()
        setName(e.target.value);
        console.log(setName)
        }
 
            
       

        const SubmitData =(e)=>{
            e.preventDefault();
          
        }
        const clearData =(e)=>{
           
            e.preventDefault()
        }
    return (
       <>
   <h3 className='text-center mt-4'>Add data Form</h3>

       <form>
       <div className='adddata mt-5 mb-5'>
       < div className='w-50 m-auto'>
       <div class="form-floating mb-3 mt-3 ">
           <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" 
            onClick={addName}   
           />
           <label htmlFor="floatingInput">Enter Your Name.....</label>
       </div>
       <div class="form-floating mb-3 mt-3 ">
           <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" 
            onClick={(e)=>setUserName(e.target.value)}
           />
           <label htmlFor="floatingInput">Enter Your UserName......</label>
       </div>


       <div class="form-floating mb-3 mt-3 ">
           <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
           onClick={(e)=>setEmail(e.target.value)}
           />
           <label htmlFor="floatingInput">Enter Your Email.....</label>
       </div>

       <div className='buttons d-flex justify-content-center mt-5'>
       <button className='btn btn-outline-success w-50 me-3 ms-3 rounded ' onClick={SubmitData}>Submit Data</button>
      
       <button className='btn btn-outline-danger w-50 me-3 ms-3 rounded' onClick={clearData}>Clear Data</button>
       </div>
   </div>
       </div>
     </form>
       </>
    )
}

export default AddData