import React, { useState, useTransition } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import {object, string} from 'yup'
import "./navbar.scss"
import { setCurrentCategory, selectedFamilyActionSelector } from '../../store/databaseSlice'
import Button from '../button/Button'
import { InputField } from '../forms/textInput'
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../module/Module"
import { mockedLogIn, loggedInStatusSelector } from '../../store/userSlice'

const familyTree = [
  'Find Relatives',
  'Newborn',
  'Most Girls'
]

const validationSchema = object().shape({
  ship: string()
  .min(11, 'Please use the provided mocked ship.')
  .required('Ship is required'),
  soldierclass: string()
  .min(8, 'Please use the provided mocked class.')
  .required('Class is required'),
  job: string()
  .min(11, 'Please use the provided mocked job.')
  .required('Job is required'),
  soldier: string()
  .min(3, 'Please use the provided mocked soldier.')
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

//@ts-check

const Navbar = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const mockedLoginStatus = useSelector(loggedInStatusSelector)
  const currentSelectedFamilyAction = useSelector(selectedFamilyActionSelector)
  const dispatch = useDispatch()

  const onSubmit = (values, submitProps) => {
    console.log('onSubmit called')
    const { ship, soldierclass, job, soldier, password } = values
    submitProps.setSubmitting(true)
    submitProps.resetForm()
    dispatch(mockedLogIn({
      ship: ship,
      soldierclass: soldierclass,
      job: job,
      soldier: soldier,
      password: password
    }))
    submitProps.setSubmitting(false)
  }
  
  const initialValues = {
    ship: 'Rebel Alliance Command',
    soldierclass: 'Regional',
    job: 'Ground Crew',
    soldier: '103',
    password: 'fancyPassword#1'
  }

  const chooseCategory = (product) => {
    setShowModal(false)
    startTransition(() => {
      dispatch(setCurrentCategory(product))
    })
  }

  const navController = (product) => {
    setShowModal(true)
    mockedLoginStatus.payload === true && dispatch(setCurrentCategory(product.target.innerHTML))
  }

  const bounceOut = () => {
    dispatch(setCurrentCategory('Welcome! Pick a Category to Begin!'))
  }

  return (
    <div className="nav__container">
      {window.location.href === 'http://localhost:3000/legal' 
        ? (<Link to='/'>Home</Link>) 
        : (<Link to='/legal'>Legal Disclaimer</Link>)}
      <Button onClick={() => bounceOut()}>Home</Button>
      {familyTree && familyTree.map(product => {
        return (
          <div key={Math.random()}>
            <Button onClick={(product) => navController(product)}>{product}</Button>
          </div>
        )
      })}
            {mockedLoginStatus.payload === true ? (
              <Modal
                show={showModal}
                setShow={setShowModal}
              >
                <ModalHeader>
                  <h2>{currentSelectedFamilyAction && currentSelectedFamilyAction}</h2>
                </ModalHeader>
                <ModalBody>
                  <div>{currentSelectedFamilyAction && currentSelectedFamilyAction}</div>
                </ModalBody>
                <ModalFooter>
                  {currentSelectedFamilyAction !== 'Welcome! Pick a Category to Begin!' && <Button onClick={() => chooseCategory(currentSelectedFamilyAction)}>Choose Selection</Button>}
                </ModalFooter>            
              </Modal>
            ) : (            
              <Modal
                show={showModal}
                setShow={setShowModal}
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
                        if (!formik.errors.ship
                        && !formik.errors.soldierclass
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
                            name='soldierclass'
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
      {/* {mockedLoginStatus && (<Button onClick={() => handleLogout()}>Logout</Button>)} */}
      {window.location.href !== 'http://localhost:3000/archives' 
        ? (<Link to='/archives'>Family Achives</Link>) 
        : (<Link to='/'>Home</Link>)}
    </div>
  )
}

export default Navbar
