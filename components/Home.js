import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const responseData = await axios.get("https://jsonplaceholder.typicode.com/users");
            const { data } = responseData;
            console.log(data);
            setData(data)
        }
        getData()
    }, [])
    return (
        <div>
            < div className='container py-5'>
            <div className='buttons d-flex justify-content-end flex-direction-row w-100 mx-auto mt5 mb-5'>
           
                <Link to='adddata' className='text-decoration-none me-3 ms-3'><button className='btn btn-outline-primary me-3 ms-3 w-100'>Add data</button></Link>
                <Link to='/editdata' className='text-decoration-none  me-3 ms-3'> <button className='btn btn-outline-success  me-3 ms-3 w-100'>Update</button></Link>

            </div>
           
            <div>
        </div>
                < div className='row'>
                   

                   <table className='table'>
                   <tr>
                   <th>Name</th>
                   <th>UserName</th>
                   <th>Email</th>
                   </tr>
                   {
                    data.map((user)=>(
                      <>
                      <tr>
                      <td className='' >{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      
             
                     
                  
                     </tr>
                      </>
                       
                    ))
                   }
                   </table>
                </div>
            </div>
        </div>
    )
}

export default Home