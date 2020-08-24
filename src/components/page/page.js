import React, {useState, useEffect} from 'react';
import './page.css'
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import axios from 'axios';

const members = [
    {name: 'Jackie Chan',
      email: 'Jackie@chan.com'
    },
    {
      name: 'John Wick',
      email: 'john@wick.com',
    },
    {
      name: 'John Carter',
      email: 'john@carter.com'
    }
  ]
  
  const fetcher = async (method, path, data) => {
    const axiosConfig = {
      method,
      url: path || 'https://jsonplaceholder.typicode.com/users',
      data
    }
    return await axios(axiosConfig);
  }
export const Page = ({children}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   const path = 'https://jsonplaceholder.typicode.com/users'
   fetcher('GET', path)
   .then(res =>       setUsers(res.data));
 },);
    return (
        <div className='page'>
          <Header>
            
          </Header>
          {/* Page<br />
          {users.map((user, i) => {
            return (
              <div>
                {user.name}<br />
                {user.email}
              </div>
              )}
              )} */}

            {children}
          <Footer>

          </Footer>
        </div>
    )
}