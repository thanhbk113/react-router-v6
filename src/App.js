import { Routes, Route } from 'react-router-dom'
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import { OrderSUmmary } from './components/orderSummary';
import Products from './components/Products';
import NewProducts from './components/NewProducts'
import User from './components/User';
import UserDetail from './components/UserDetail';
import Admin from './components/Admin';
import React from 'react';
import Profile from './components/Profile';
import { AuthProvider } from './auth';
import { Login } from './components/Login';
import RequireAuth from './components/RequireAuth';
const LazyAbout = React.lazy(() => import('./components/About'))


function App() {
   //add1

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home /> }  />
         <Route path='about' element={<React.Suspense fallback='Loading...'>
           <LazyAbout />
           </React.Suspense> } 
            />
         <Route path='order-summary' element={<OrderSUmmary />} />
         <Route path='products' element={<Products />} >
           <Route index element={<FeaturedProducts/>} />
           <Route path='featured' element={<FeaturedProducts />} />
           <Route path='new' element={<NewProducts />} />
         </Route>
         <Route path='users' element={<User />} >
            <Route path=':userId' element={<UserDetail />}/>
            <Route path='admin' element={<Admin />} />
         </Route>
         <Route path='profile' element={
           <RequireAuth>
               <Profile />
           </RequireAuth>
         } 
         />
         <Route path='login' element={<Login />} />
         <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
