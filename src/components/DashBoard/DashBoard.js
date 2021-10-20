import React from "react";
import "./DashBoard.css";
import { Card, Progress, Button, List } from "antd";
import { Row } from "antd";
import { Input } from "antd";
import { BookOutlined, FileDoneOutlined } from "@ant-design/icons";

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <div className=" site-card-border-less-wrapper">
        <Row>
          <Card
            className="custom-border-card custom-margin-card-one"
            title="Schedule"
            bordered
            style={{ width: 320, height: 400 }}
          >
            <div style={{ marginTop: -14 }}>
              <Row>
                <Button className="text-button-style" type="text">
                  All
                </Button>
                <Button className="text-button-style" type="text">
                  Learning
                </Button>
                <Button className="text-button-style" type="text">
                  Teaching
                </Button>
                <Button className="text-button-style" type="text">
                  Items
                </Button>
              </Row>
            </div>
            <div style={{ marginTop: 12 }}>
              <p style={{ fontSize: 12 }}>
                <div style={{ fontWeight: "bold" }}>
                  Meeting with Ravi Gunti
                </div>
                05/11/2020 @ 12:00 pm
                <br />
                <div style={{ color: "blue" }}>Wednesday, Nov 04th</div>
              </p>
              <p style={{ fontSize: 12 }}>
                <div style={{ fontWeight: "bold" }}>
                  Attending the Seminar on Artificial intelligence
                </div>
                05/11/2020 @ 12:00 pm
                <br />
                <div style={{ color: "blue" }}>Wednesday, Nov 04th</div>
              </p>
              <p style={{ fontSize: 12 }}>
                <div style={{ fontWeight: "bold" }}>Assignment Submission</div>
                05/11/2020 @ 12:00 pm
                <br />
                <div style={{ color: "blue" }}>Wednesday, Nov 04th</div>
              </p>
              <p style={{ fontSize: 12 }}>
                <div style={{ fontWeight: "bold" }}>
                  Attending the University with Ravi Gunti
                </div>
                05/11/2020 @ 12:00 pm
                <br />
                <div style={{ color: "blue" }}>Wednesday, Nov 04th</div>
              </p>
              <div
                style={{
                  margin: -23,
                  marginTop: 14,
                  borderRadius: 2,
                  backgroundColor: "#5d53e4",
                  fontSize: 10,
                }}
              >
                <Row>
                  <Button
                    className="text-button-style bottom-button-color"
                    type="text"
                  >
                    Week
                  </Button>
                  <Button
                    className="text-button-style bottom-button-color"
                    type="text"
                  >
                    Day
                  </Button>
                  <Button
                    style={{ marginLeft: 38 }}
                    className="text-button-style bottom-button-color"
                    type="text"
                  >
                    + New Item
                  </Button>
                </Row>
              </div>
            </div>
          </Card>

          <Card
            className="custom-border-card custom-margin-card-two"
            title="Finances"
            bordered
            style={{ width: 220, height: 400 }}
          >
            <List size="small">
              <div style={{ marginTop: -20 }}>
                <div style={{ fontSize: 12 }}>
                  <div>
                    <Row>
                      Tution:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 60 }}>
                        $1,780.22
                      </p>
                    </Row>
                  </div>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Differential:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 35 }}>
                        $567.33
                      </p>
                    </Row>
                  </div>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Health fee:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 38 }}>
                        $67.44
                      </p>
                    </Row>
                  </div>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Balance:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 49 }}>
                        $170.00
                      </p>
                    </Row>
                  </div>
                  <p style={{ color: "blue", marginTop: -10 }}>
                    Due date: 10/12/2020
                  </p>
                </div>
              </div>
            </List>
            <List size="small">
              <div style={{ marginTop: 25 }}>
                <div style={{ fontSize: 12 }}>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Pell:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 75 }}>
                        $67.44
                      </p>
                    </Row>
                  </div>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Stafford Loan:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 23 }}>
                        $170.00
                      </p>
                    </Row>
                  </div>
                  <p style={{ color: "blue", marginTop: -10 }}>
                    Due date: 10/12/2020
                  </p>
                </div>
              </div>
            </List>
            <List size="small">
              <div style={{ marginTop: 10 }}>
                <div style={{ fontSize: 12 }}>
                  <div>
                    <Row>
                      Tution:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 60 }}>
                        $1,780.22
                      </p>
                    </Row>
                  </div>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Differential:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 35 }}>
                        $567.33
                      </p>
                    </Row>
                  </div>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Health fee:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 38 }}>
                        $67.44
                      </p>
                    </Row>
                  </div>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Balance:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 49 }}>
                        $170.00
                      </p>
                    </Row>
                  </div>
                  <p style={{ color: "blue", marginTop: -10 }}>
                    Due date: 10/12/2020
                  </p>
                </div>
              </div>
            </List>
            <List size="small">
              <div style={{ marginTop: 25 }}>
                <div style={{ fontSize: 12 }}>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Pell:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 75 }}>
                        $67.44
                      </p>
                    </Row>
                  </div>
                  <div style={{ marginTop: -15 }}>
                    <Row>
                      Stafford Loan:{" "}
                      <p style={{ fontWeight: "bold", marginLeft: 23 }}>
                        $170.00
                      </p>
                    </Row>
                  </div>
                  <p style={{ color: "blue", marginTop: -10 }}>
                    Due date: 10/12/2020
                  </p>
                </div>
              </div>
            </List>
          </Card>
          <Card
            className="custom-border-card custom-margin-card-three"
            title="Path Status"
            bordered
            style={{ width: 320, height: 180 }}
          >
            <p style={{ marginTop: -20, color: "blue" }}>Anthropology (BA)</p>
            <Progress percent={55} />
            <p style={{ fontWeight: "bold", wordSpacing: 7 }}>
              {" "}
              Class Level Credits GPA AcadStand
            </p>
            <Card
              style={{ marginTop: 50, width: 320, height: 180 }}
              className="custom-border-card custom-margin-card-four"
              bordered
            >
              <p style={{ color: "white", margin: -10, fontWeight: "bold" }}>
                {" "}
                Catalogue Search{" "}
              </p>
              <Input
                style={{ marginTop: 25, borderRadius: 10 }}
                placeholder=""
              />
              <div>
                <Card
                  size="small"
                  style={{
                    fontSize: 12,
                    backgroundColor: "darkgrey",
                    marginTop: 10,
                    marginLeft: -25,
                    width: 320,
                    height: 100,
                  }}
                >
                  <p style={{fontWeight: "bolder"}} className="branch-color">
                    <BookOutlined /> CSE,ECE,EEE
                  </p>
                  <p style={{fontWeight: "bolder"}} className="branch-color">
                    <BookOutlined /> CLS,MECH,CPO,CMO
                  </p>
                  <p style={{fontWeight: "bolder"}} className="branch-color">
                    <BookOutlined /> CSE,ECE,EEE
                  </p>
                </Card>
              </div>
            </Card>
          </Card>

          <Card
            className="custom-border-card custom-margin-card-two"
            title="Documents"
            bordered
            style={{ width: 560, height: 170 }}
          >
            <div>
              <Row>
                <FileDoneOutlined style={{ fontSize: '20px', color: '#08c' }}/>
                <p style={{ marginTop:-15, marginLeft: 25 }}>
                  Enrollment Certification form 
                  <br/> <p style={{color: "blue"}}>06/11/2020</p>
                </p>
              </Row>
              <Row>
                <FileDoneOutlined style={{ fontSize: '20px', color: '#08c' }}/>
                <p style={{ marginTop:-15, marginLeft: 25 }}>
                  Enrollment Certification form 
                  <br/> <p style={{color: "blue"}}>06/11/2020</p>
                </p>
              </Row>
            </div>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default DashBoard;
