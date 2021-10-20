import React from "react";
import { Image, Row } from "antd";
import "./SideBar.css";
import { Avatar, Menu} from "antd";
import {
  UserOutlined,
  ProfileOutlined,
  LineChartOutlined,
  ApartmentOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";


const SideBar = () => {
  return (
    <div className="bgimg sidebar-container">
     <div className = "sidebarcontent-container">
      <Image
        className = "logo-img"
        width={60}
        src="https://dev.vannadev.com/studentcloud/assets/images/umichigan.png"
      />
      <Avatar className="avatar-margin" size={60} src="https://dev.vannadev.com/studentcloud/assets/images/student.png"/>
      <div className="status" style={{color: "white"}}>
        <p> Mark Zuckerberg <br/> Last logged in 12-10-2020 </p>
      </div>
      <Menu className = "menubg-color" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<ProfileOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="3" icon={<LineChartOutlined />}>
          Courses
        </Menu.Item>
        <Menu.Item key="4" icon={<ApartmentOutlined />}>
          Path
        </Menu.Item>
        <Menu.Item key="5" icon={<DollarCircleOutlined />}>
          Financials
        </Menu.Item>
        <Menu.Item key="6" icon={<CalendarOutlined />}>
          Calendar
        </Menu.Item>
      </Menu>
      </div>
    </div>
  );
};

export default SideBar;
