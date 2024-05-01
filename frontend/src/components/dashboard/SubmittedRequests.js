import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { useProperty } from '../../utils/hooks/PropertyContext'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  ListGroup,
  Accordion,
  Table,
} from 'react-bootstrap'
import LargeTitle from '../LargeTitle.js'
import { useProfile } from '../../utils/hooks/ProfileContext.js'

const SubmittedRequests = () => {
  const { role, fetchProfileRole } = useProfile()
  let navigate = useNavigate()
  useEffect(() => {
    const id = localStorage.getItem('ID')
    //get the id from local storage
    //fetch profile role from the profile context
    fetchProfileRole()
  }, [])
  function handleGoToCreateRequest() {
    navigate('/property-page/:propertyId/create-request')
  }
  function handleGoToEditRequest() {
    navigate('/property-page/:propertyId/edit-request')
  }
  return (
    <Container style={{ width: '100%' }}>
      <Card style={{ minHeight: '70vh', maxHeight: '70vh' }}>
        <div className='d-flex justify-content-center'>
          {/* Title for the requests with styling */}
          <Card.Title>
            <h1
              style={{
                fontSize: '40px',
                fontWeight: 'bold',
                marginTop: '15px',
              }}
            >
              Requests
            </h1>
          </Card.Title>
        </div>

        <Accordion
          defaultActiveKey='0'
          style={{ maxHeight: '600px', overflowY: 'scroll' }}
        >
          <Accordion.Item>
            <Accordion.Header>
              <Row style={{ width: '100%' }}>
                <Col>Request Sender</Col>
              </Row>
            </Accordion.Header>

            <Accordion.Body style={{ maxHeight: '200px', overflowY: 'scroll' }}>
              <Table bordered hover>
                <thead></thead>
                <tbody>
                  <tr>
                    <th>Request Type</th>
                    <th style={{ width: '50%', textAlign: 'center' }}>Type</th>
                  </tr>
                  <tr>
                    <th>Request Date</th>
                    <th style={{ width: '50%', textAlign: 'center' }}>Date</th>
                  </tr>
                  <tr>
                    <th>Request Description</th>
                    <th style={{ width: '50%', textAlign: 'center' }}>
                      Description
                    </th>
                  </tr>
                  <tr>
                    <th>Completed Status</th>
                    <th style={{ width: '50%', textAlign: 'center' }}>
                      True/False
                    </th>
                  </tr>
                  <tr>
                    <th>Completion Date</th>
                    <th style={{ width: '50%', textAlign: 'center' }}>
                      Date if completed
                    </th>
                  </tr>
                  {role === 'COMPANY' && (
                    <tr>
                      <th>Assigned Employee</th>
                      <th style={{ width: '50%', textAlign: 'center' }}>
                        Assigned Employee Identifier
                      </th>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
      {role === 'PUBLIC' && (
        <div className='mt-5 diplay-flex text-center'>
          <Button
            variant='primary'
            style={{ width: '150px', marginRight: '60px' }}
            onClick={handleGoToCreateRequest}
            data-testid='create-request-button'
          >
            New request
          </Button>
          <Button
            variant='primary'
            style={{ width: '150px' }}
            onClick={handleGoToEditRequest}
            data-testid='edit-request-button'
          >
            Edit request
          </Button>
        </div>
      )}
    </Container>
  )
}

export default SubmittedRequests
