import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export default function Layout() {
  return (
    <div className='flex w-screen h-screen p-3 bg-slate-100'>
      <div className='w-1/3 max-w-lg h-full p-20 rounded-3xl bg-white'>
        <Navigation />
      </div>
      <div className='w-2/3'>
        <Outlet />
      </div>
    </div>
  );
}
