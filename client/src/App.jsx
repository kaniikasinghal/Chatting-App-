import React, {lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutLoader } from './components/layout/Loaders';
import { FaxRounded } from '@mui/icons-material';
import { Suspense } from 'react';
import ProtectRoutes from './components/auth/ProtectRoutes';

const Home = lazy (() => import ("./pages/Home"));
const Group = lazy (() => import ("./pages/Group"));
const Chat = lazy (()=> import ("./pages/Chat"));
const Login = lazy (() => import ("./pages/login"));
const NotFound = lazy (() => import ("./pages/NotFound"));

let user = true;

const App = () => {
  
  return (  
    <BrowserRouter>
    <span>
      Jai Shree RadheKrishna
    </span>
    {/* <Suspense fallback={<div>Jai Shree RadheKrishna..Jai Shree SiyaRam</div>}> */}
    <Suspense fallback={<LayoutLoader/>}>
    <Routes>
      <Route element = {<ProtectRoutes user={user}/>}>
        <Route path="/" element={<Home/>}/>
        <Route path = "/chat/:chatId" element = {<Chat/>}/>
        <Route path = "/group" element = {<Group/>}/>
    </Route>
      <Route
       path = "/login"
        element = {
          <ProtectRoutes user={!user} redirect="/">
        <Login/>
        </ProtectRoutes>
        }
        />
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
  );
};

export default App;