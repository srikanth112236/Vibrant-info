import React, { useEffect } from 'react'

const EditData = () => {
useEffect(()=>{
    console.log("Mounted")
    return()=>{
        console.log("Unmounted")
    }
},[])

  return (
   <>
   <h3 className='text-center mt-4'>Edit data Form</h3>

   <form>
          <div className='adddata mt-5 mb-5'>
        
          < div className='w-50 m-auto'>
          <div class="form-floating mb-3 mt-3 ">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlfor="floatingInput">Enter Your Name.....</label>
          </div>
          <div class="form-floating mb-3 mt-3 ">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlfor="floatingInput">Enter Your UserName......</label>
          </div>


          <div class="form-floating mb-3 mt-3 ">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlfor="floatingInput">Enter Your Email.....</label>
          </div>

          <div className='buttons d-flex justify-content-center mt-5'>
          <button className='btn btn-outline-success w-50 me-3 ms-3 rounded'>Update Data</button>
         
          <button className='btn btn-outline-danger w-50 me-3 ms-3 rounded'>Clear Data</button>
          </div>
      </div>
          </div>
        </form>
   </>
  )
}

export default EditData