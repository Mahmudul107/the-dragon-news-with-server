import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { useLoaderData } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import moment from "moment/moment";

const EditorInsight = () => {
    const news = useLoaderData();

    const {title, author} = news;

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div className="d-flex"> 
                <FaCalendar/>
                <p><small>{moment(author?.published_date).format('MMMM DD, YYYY')}</small></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div className="d-flex"> 
                <FaCalendar/>
                <p><small>{moment(author?.published_date).format('MMMM DD, YYYY')}</small></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div className="d-flex"> 
                <FaCalendar/>
                <p><small>{moment(author?.published_date).format('MMMM DD, YYYY')}</small></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
};

export default EditorInsight;
