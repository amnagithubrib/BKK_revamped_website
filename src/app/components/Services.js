"use client";
import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Services.module.css';

const services = [
  {
    title: "Farmers app",
    description: "Lorem ipsum dolor sit amet consectetur. Tellus venenatis magna ultrices dignissim. Sapien tempor",
    icon: "/images/app.png"
  },
  {
    title: "GIS Services",
    description: "Lorem ipsum dolor sit amet consectetur. Tellus venenatis magna ultrices dignissim. Sapien tempor",
    icon: "/images/sattelite.png"
  },
  {
    title: "Telecom solution",
    description: "Lorem ipsum dolor sit amet consectetur. Tellus venenatis magna ultrices dignissim. Sapien tempor",
    icon: "/images/telecom.png"
  },
  {
    title: "Agri Shop",
    description: "Lorem ipsum dolor sit amet consectetur. Tellus venenatis magna ultrices dignissim. Sapien tempor",
    icon: "/images/store.png"
  }
];

const Services = () => {
  return (
    <Container className={styles['services-container']}>
      <h2 className={styles['services-title']}>Our Comprehensive Services</h2>
      <p className={styles['services-subtitle']}>
        Enhance Your Farming Experience with Our Comprehensive Services
      </p>
      <Row>
        {services.map((service, index) => (
          <Col key={index} xs="12" sm="6" md="3" className="d-flex align-items-stretch">
            <Card className={styles['service-card']}>
              <img src={service.icon} alt={service.title} className={styles['service-icon']} />
              <CardBody>
                <h4 className={styles['service-title']}>{service.title}</h4>
                <p className={styles['service-description']}>{service.description}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
