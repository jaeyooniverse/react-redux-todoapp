import Navigation from './Navigation';
import Today from './Today';

export default function App() {
  return (
    <div className='flex w-screen h-screen p-3 bg-slate-100'>
      <Navigation />
      <Today />
    </div>
  );
}
