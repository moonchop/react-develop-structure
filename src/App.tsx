import React, { useState } from "react";
import Button from "./components/Button";
import Menubar from "./components/menubar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./page/MainPage";
import FuturePage from "./page/FuturePage";
import LoginPage from "./page/LoginPage";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
         <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
             <Menu.Item key="1"> <Link to="/">HOME</Link></Menu.Item>
            <Menu.Item key="2">  <Link to="/future">Future</Link></Menu.Item>
             <Menu.Item key="3">  <Link to="/Login">Login</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: "16px 0", height: "100vh" }}>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/future" element={<FuturePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
