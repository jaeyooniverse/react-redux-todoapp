import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Main from './Main';
import Today from './Today';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/today' element={<Today />} />
        </Route>
      </Routes>
    </div>
  );
}
