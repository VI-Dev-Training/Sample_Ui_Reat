import './App.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import SideBar from './components/SideBar/SideBar';
import DashBoard from './components/DashBoard/DashBoard';


function App() {
  return (
    <>
    <Row>
    <Col span={20} push={4}>
      <div className="dashboard-background" >
      <DashBoard   />
      </div>
    </Col>
    <Col className="sidebar-position" span={4} pull={20}>
      <SideBar className="bgimg"/>
    </Col>
  </Row>
    </>
  );
}

export default App;
