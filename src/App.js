import { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import {publicRoutes} from './routes'
import DefaultLayout from './Components/Layout/DefaultLayout';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            {publicRoutes.map((items,index)=> {
              const Layout = items.layout === null ? Fragment :  DefaultLayout
              const Page = items.component
              return <Route key={index} path={items.path} element={<Layout><Page/></Layout>}/>
            })}
         </Routes>
      </div>
    </Router>
  );
}

export default App;
