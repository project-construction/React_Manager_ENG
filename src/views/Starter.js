import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import {useState} from "react";

const BlogData = [
    {
        image: bg1,
        title: "This is simple blog",
        subtitle: "2 comments, 1 Like",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
        btnbg: "primary",
    },
    {
        image: bg2,
        title: "Lets be simple blog",
        subtitle: "2 comments, 1 Like",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
        btnbg: "primary",
    },
    {
        image: bg3,
        title: "Don't Lamp blog",
        subtitle: "2 comments, 1 Like",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
        btnbg: "primary",
    },
    {
        image: bg4,
        title: "Simple is beautiful",
        subtitle: "2 comments, 1 Like",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
        btnbg: "primary",
    },
];

const Starter = () => {
  const [send, setSend] = useState({
    doorlock : 0,
    hammering : 0,
    simon : 0,
    trafficLight : 0,
    catchMole : 0,
    numberPuzzle : 0,
    depression : 0,
    anxiety : 0,
    stress : 0,
    nback : 0
  });
  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart send={send}/>
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables setSend={setSend}/>
        </Col>
      </Row>
    </div>
  );

};

export default Starter;