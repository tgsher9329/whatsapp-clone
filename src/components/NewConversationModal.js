import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts } from "../contexts/ContactsProvider"
import { useConversations } from "../contexts/ConversationsProvider"

export default function NewConversationModal({ closeModal }) {

    const [selectedContactIds, setSlectedContactIds] = useState([])
    const { contacts } = useContacts()
    const { createConversation } = useConversations()

    function handleCheckboxChange(contactId) {
        setSlectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        createConversation(selectedContactIds)
        closeModal()
    }

    return (
        <div>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </div>
    )
}
