import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Main from './Main';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import SignupPage from './pages/SignupPage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import ContactPage from './pages/ContactPage';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import UpdatePage from './pages/UpdatePage';

const Router = () => {
    return (
        <Routes>
            {/* exact 옵션 더 이상 사용하지 않는다.
                여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 *를 붙여 사용
            */}
            <Route path="/" element={<Main />} />
            <Route path="/page1" element={<Main />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/buypage/*" element={<BuyPage />} />
            <Route path="/sellpage" element={<SellPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/updatepage" element={<UpdatePage />} />

            <Route path="/redirect" element={<Navigate to='/' />} />
            {/*Not found */}
            <Route element={() => <Navigate to="/" />} />
        </Routes>
    );
}

export default Router;