import React, { useState, useTransition } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import {object, string} from 'yup'
import Navbar from '../navbar/Navbar'
import "../navbar/navbar.scss"
import Button from '../button/Button'
import { InputField } from '../forms/textInput'
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../module/Module"
import { 
    familyMembersSelector, 
    addFamilyMemberHandler,
    addFamilyMemberRelationshipHandler,
    deleteFamilyMemberHandler
} from '../../store/databaseSlice'
import { 
    mockedAdminLogIn, 
    loggedInAdminStatusSelector
} from '../../store/userSlice'

const validationSchemaLogin = object().shape({
    adminCode: string()
        .min(11, 'Please use the provided administration code.')
        .required('Administration Clearance is required')
})

const validationSchemaAddMember = object().shape({
    name: string()
        .min(1, 'Please enter a name.')
        .required('Name is required'),
    gender: string()
        .min(1, 'Please enter a gender.')
        .required('Gender is required')
})

const validationSchemaDelete = object().shape({
    name: string()
        .min(1, 'Please enter a name.')
        .required('Name is required')
})

//@ts-check

const FamilyAdmin = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(true)
  const mockedLoginStatus = useSelector(loggedInAdminStatusSelector)
  const dispatch = useDispatch()

  const allFamilyMembers = useSelector(familyMembersSelector)

  const setShowModalTrue = () => {
    setShowModal(true)
  }

  const onSubmitLogin = (values, submitProps) => {
    console.log('onSubmit called')
    const { adminCode } = values
    submitProps.setSubmitting(true)
    submitProps.resetForm()
    dispatch(mockedAdminLogIn({
        adminCode: adminCode
    }))
    submitProps.setSubmitting(false)
  }

  const onSubmitAddMember = (values, submitProps) => {
    console.log('onSubmit called')
    const { name, gender, mother, father } = values
    submitProps.setSubmitting(true)
    submitProps.resetForm()
    dispatch(addFamilyMemberHandler({
        name: name,
        gender: gender
    }))
    dispatch(addFamilyMemberRelationshipHandler({
        name: name,
        payload: {
            relative: mother,
            relationship: 'motherOfMember'
        }
    }))
    dispatch(addFamilyMemberRelationshipHandler({
        name: name,
        payload: {
            relative: father,
            relationship: 'fatherOfMember'
        }
    }))
    submitProps.setSubmitting(false)
  }

  const onSubmitDeleteMember = (values, submitProps) => {
    console.log('onSubmit called')
    const { name } = values
    submitProps.setSubmitting(true)
    submitProps.resetForm()
    dispatch(deleteFamilyMemberHandler({
        name: name
    }))
    submitProps.setSubmitting(false)
  }
  
  const initialValuesLogin = {
    adminCode: 'Security Clearance Code: Archive Governance'
  }

  const initialValuesAddMember = {
    name: '',
    gender: ''
  }

  const initialValuesDelete = {
    name: ''
  }

  return (
    <>
        <div className="nav__container">
            <Navbar />
                {mockedLoginStatus === true ? (
                <Modal
                    show={showModal}
                    setShow={setShowModal}
                >
                    <ModalHeader>
                    <h2>Manage Family Members</h2>
                    </ModalHeader>
                    <ModalBody>
                        <>
                            <Formik
                                initialValues={initialValuesAddMember}
                                validationSchema={validationSchemaAddMember}
                                onSubmit={onSubmitAddMember}
                                enableReinitialize={false}
                            >
                                {formik => {

                                const checkErrors = async () => {
                                    if (!formik.errors.adminCode){
                                    console.log('api called with: ', formik)
                                    }
                                }
                                    return (
                                        <Form>

                                            <label>Add a Family Member</label>

                                            <InputField
                                                formik={formik}
                                                name='name'
                                                type='text'
                                                placeholder='Enter Name'
                                                label='Member Name'
                                                />

                                            <InputField
                                                formik={formik}
                                                name='gender'
                                                type='text'
                                                placeholder='Enter Gender'
                                                label='Member Gender'
                                                />

                                            <InputField
                                                formik={formik}
                                                name='mother'
                                                type='text'
                                                placeholder='Enter Mother'
                                                label='Member Mother'
                                                />

                                            <InputField
                                                formik={formik}
                                                name='father'
                                                type='text'
                                                placeholder='Enter Father'
                                                label='Member Father'
                                                />
                                                

                                            <div onClick={() => checkErrors()}>
                                            <Button type='submit'>Add Member</Button>
                                            </div>                  

                                        </Form>
                                    )
                                }}
                            </Formik>

                            <Formik
                                initialValues={initialValuesDelete}
                                validationSchema={validationSchemaDelete}
                                onSubmit={onSubmitDeleteMember}
                                enableReinitialize={false}
                            >
                                {formik => {

                                    const checkErrors = async () => {
                                        if (!formik.errors.adminCode){
                                        console.log('api called with: ', formik)
                                        }
                                    }
                                    return (
                                        <Form>

                                            <label>Delete a Family Member</label>

                                            <InputField
                                                formik={formik}
                                                name='adminCode'
                                                type='text'
                                                placeholder='Security Clearance Code: Archive Governance'
                                                label='Administration Code'
                                                />

                                            <div onClick={() => checkErrors()}>
                                            <Button type='submit'>Delete Member</Button>
                                            </div>                  

                                        </Form>
                                    )
                                }}
                            </Formik>
                        </>

                    </ModalBody>
                    <ModalFooter>
                        {allFamilyMembers && allFamilyMembers.map(familyMember => {
                            return (
                                <div>{familyMember.name}</div>
                            )
                        })}
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
                        initialValues={initialValuesLogin}
                        validationSchema={validationSchemaLogin}
                        onSubmit={onSubmitLogin}
                        enableReinitialize={false}
                    >
                        {formik => {

                        const checkErrors = async () => {
                            if (!formik.errors.adminCode){
                            console.log('api called with: ', formik)
                            }
                        }

                        return (
                            <Form>

                            <InputField
                                formik={formik}
                                name='adminCode'
                                type='text'
                                placeholder='Security Clearance Code: Archive Governance'
                                label='Administration Code'
                                />

                            <div onClick={() => checkErrors()}>
                                <Button type='submit'>Login</Button>
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
        </div>
        <Button onClick={() => setShowModalTrue()}>Manage Public Records</Button>
    </>
  )
}

export default FamilyAdmin
