import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='mx-10' >
      <RouterProvider router={router}>
        <Toaster />

      </RouterProvider>

    </div>
  );
}

export default App;
