import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../components/Main';
import App from '../App';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App></App>}>
                <Route index element={<Main></Main>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router