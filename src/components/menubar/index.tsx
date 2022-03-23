import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./test.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
export default function Menubar() {
  return <div style={{height:'50px',background: 'pink'}}>


      헤더

      <Link to="/">홈</Link>
      <Link to="/future">거래</Link>
      <Link to="/login">로그인</Link>
  </div>
}


// export default function Menubar() {
//   return (
//     <div>
//       <Layout>
//         <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
//           <div className="logo" />
//           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
//             <Menu.Item key="1">< nav 1</Menu.Item>
//             <Menu.Item key="2">nav 2</Menu.Item>
//             <Menu.Item key="3">nav 3</Menu.Item>
//           </Menu>
//         </Header>
//         <StyleContent>
//           <Breadcrumb style={{ margin: "16px 0" }}>
//             <Breadcrumb.Item>Home</Breadcrumb.Item>
//             <Breadcrumb.Item>List</Breadcrumb.Item>
//             <Breadcrumb.Item>App</Breadcrumb.Item>
//           </Breadcrumb>
//           <div
//             className="site-layout-background"
//             style={{ height: 600, padding: 24, minHeight: 380 }}
//           >
//             Content
//           </div>
//         </StyleContent>
//       </Layout>
//     </div>
//   );
// }

// const StyleContent = styled(Content)`
//   .site-layout-background {
//     background: #fff;
//   }
//   padding: 0 50px;
//   margin-top: 64px;
// `;
