import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {ProtectedRoutes, AuthRoute} from './utils/ProtectedRoutes'
import Home from './pages/Home'
import Index from './pages/Index'
import Login from './pages/Login'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute/>}>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signin/>} />
        </Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/home' element={<Home/>} />
          <Route path='/event' element={<Event/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App