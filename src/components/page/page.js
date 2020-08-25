import React, {useState, useEffect} from 'react';
import './page.css'
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';


export const Page = ({children}) => {
  const [users, setUsers] = useState([]);

    return (
        <div className='page'>
          <Header>
            
          </Header>
            {children}
          <Footer>

          </Footer>
        </div>
    )
}