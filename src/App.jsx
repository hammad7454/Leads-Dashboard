// import React from 'react';
// import { Layout } from 'antd';
// import Sidebar from './components/Sidebar';
// import Leads from './components/Leads';

// const { Content } = Layout;

// function App() {
//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sidebar />
//       <Layout>
//         <Content>
//           <Leads />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// export default App;

import React from "react";
import Leads from "./components/Leads";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Sidebar/>
      </div>
      <div style={{ background: "#fdfdfd", minHeight: "100vh", marginLeft: "200px", padding: "20px" }}>
      <Leads />
    </div>
    </div>
    </>
  );
}

export default App;


