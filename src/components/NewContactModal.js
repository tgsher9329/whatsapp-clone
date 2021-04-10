import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function NewContactModal({ closeModal }) {

    const idRef = useRef()
    const nameRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        // createContact(idRef.currentvalue, nameRef.current.value)
        closeModal()
    }

    return (
        <div>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </div>
    )
}
