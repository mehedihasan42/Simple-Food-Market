import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  const [open,setOpen] = useState(false)
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 4,
          name: 'Blog',
          path: '/blog'
        },
        {
          id: 5,
          name: 'Products',
          path: '/products'
        }
      ];
      
    return (
        <nav>
          <div onClick={()=>setOpen(!open)} className='md:hidden'>
            <span>{
             open===true?
             <XMarkIcon className="h-6 w-6 text-orange-500" />
            :<Bars3Icon className="h-6 w-6 text-orange-500" />
            }</span>
          </div>
            <ul className={`md:flex bg-orange-400 absolute md:static p-4 duration-500 ${open?'top-6':'-top-48'}`}>
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;