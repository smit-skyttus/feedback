import './App.css';
import PageRoutes from './Routes';
import getUsersList from './store/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';


function App() {

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getUsersList());
  }, [])

  return (
    <div>
     <PageRoutes/>
    </div>
  );
}

export default App;
