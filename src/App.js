import Header from './views/header';
import Footer from './views/footer';
import Login from './views/login';
import Dashboard from './views/dashboard/dashboard';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import NotFound from './views/notFound';

const App = () => {
  const location = useLocation();
  const loginPage = () => {
    if (location.pathname !== '/login' && location.pathname !== '/') {
      return true
    }
  }
  let routes = (
    <Routes >
      <Route path='*' element={<NotFound />} />
      <Route path='/' exact element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard-hr' element={<Dashboard />} />
      <Route path='/dashboard-admin' element={<Dashboard />} />
      <Route path='/dashboard-manager' element={<Dashboard />} />
      <Route path='/dashboard-security' element={<Dashboard />} />
    </Routes >
  )

  return (
    <div className="container-scroller">
      {loginPage() && <Header />}
      <div className={loginPage() ? 'container-fluid page-body-wrapper' : ''}>
        {routes}
        {loginPage() && <Footer />}
      </div>
    </div>
  );
}

export default App;
