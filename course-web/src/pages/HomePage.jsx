import "./Home.css";
import { Row, Col, Image } from "react-bootstrap";
import reactLogo from "../assets/react.svg";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
          <Col>
            <Image src={reactLogo} fluid />
          </Col>
        </Row>
      </header>
    </div>
  );
};

export default HomePage;
