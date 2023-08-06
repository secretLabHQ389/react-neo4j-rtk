import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import {object, string} from 'yup'
import Apartments from '../../images/Apartments.png'
import Hostels from '../../images/Hostels.png'
import Dormatory from '../../images/Dormatory.png'
import "./navbar.scss"
import { setCurrentProperty } from '../../store/databaseSlice'
import Button from '../button/Button'
import { InputField } from '../forms/textInput'
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../module/Module"
import { mockedLogIn, loggedInStatusSelector } from '../../store/userSlice'

const validationSchema = object().shape({
  ship: string()
  .min(11, 'Please use the provided mocked ship.')
  .required('Ship is required'),
  class: string()
  .min(11, 'Please use the provided mocked class.')
  .required('Class is required'),
  job: string()
  .min(11, 'Please use the provided mocked job.')
  .required('Job is required'),
  soldier: string()
  .min(11, 'Please use the provided mocked soldier.')
  .required('Soldier is required'),
  password: string()
  .min(13, 'Please use the provided mocked password.')
  .matches(/[!@#$%^&*()+`~<>?,./''[{/|\\=^-_-{}]+/,
  'Requires one special character')
  .matches(/[0-9]+/,
  'Requires one number')
  .matches(/[A-Z]+/,
  'Requires one uppercase.')
  .required('Password is required')
})

const NavigationModal = props => {

  const {product} = props
  //startTransition for the modules and RTK for the map:
  const [showModal, setShowModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const mockedLoginStatus = useSelector(loggedInStatusSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('mockedLoginStatus: ', mockedLoginStatus)
    setLoggedIn(mockedLoginStatus)
  }, [])

  const onSubmit = (values, submitProps) => {
    console.log('onSubmit called')
    const { ship, password } = values
    submitProps.setSubmitting(true)
    submitProps.resetForm()
    dispatch(mockedLogIn({
      ship: 'Rebel Alliance Command',
      class: 'Regional',
      job: 'Ground Crew',
      soldier: '103',
      password: 'fancyPassword#1'
    }))
    submitProps.setSubmitting(false)
  }
  
  const initialValues = {
    ship: 'Rebel Alliance Command',
    class: 'Regional',
    job: 'Ground Crew',
    soldier: '103',
    password: 'fancyPassword#1'
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  const chooseCategory = (product) => {
    setShowModal(false)
    //startTransition- changing tabs and product pages
    dispatch(setCurrentProperty(product))
  }

  return (
    <div className="nav__container">
      {window.location.href === 'http://localhost:3000/legal' 
        ? (<Link to='/'>Home</Link>) 
        : (<Link to='legal'>Legal Disclaimer</Link>)}
        return (
            <>
            {loggedIn ? (
              <Modal
                show={showModal}
                setShow={setShowModal}
                // hideCloseButton
              >
                <ModalHeader>
                  <h2>{product}</h2>
                </ModalHeader>
                <ModalBody>
                  <div>Modal Body</div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={(product) => chooseCategory(product)}>Choose Selection</Button>
                </ModalFooter>            
              </Modal>
            ) : (            
              <Modal
                show={showModal}
                setShow={setShowModal}
                // hideCloseButton
              >
                <ModalHeader>
                  <h2>Login</h2>
                </ModalHeader>
                <ModalBody>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize={false}
                  >
                    {formik => {

                      const checkErrors = async () => {
                        console.log('api called with: ', formik)
                        if (!formik.errors.ship
                        && !formik.errors.class
                        && !formik.errors.job
                        && !formik.errors.soldier
                        && !formik.errors.password){
                          console.log('api called with: ', formik)
                        }
                      }

                      return (
                        <Form>

                          <InputField
                            formik={formik}
                            name='ship'
                            type='text'
                            placeholder='Rebel Alliance Command'
                            label='Ship'
                            />

                          <InputField
                            formik={formik}
                            name='class'
                            type='text'
                            placeholder='Regional'
                            label='Class'
                            />

                          <InputField
                            formik={formik}
                            name='job'
                            type='text'
                            placeholder='Ground Crew'
                            label='Job'
                            />

                          <InputField
                            formik={formik}
                            name='soldier'
                            type='text'
                            placeholder='103'
                            label='Soldier'
                            />

                          <InputField
                            formik={formik}
                            name='password'
                            type='text'
                            placeholder='fancyPassword#1'
                            label='Password'
                            />

                          <div onClick={() => checkErrors()}>
                            <Button disabled={!formik.values.password} type='submit'>Login</Button>
                          </div>                  

                          </Form>
                        )
                      }}
                    </Formik>

                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </ModalFooter>            
              </Modal>
            )}
          </>)
      {loggedIn && (<Button onClick={() => handleLogout()}>Logout</Button>)}
    </div>
  )
}

export default NavigationModal
