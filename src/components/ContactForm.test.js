import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm'

test('contact form without errors', () => {
    render (<ContactForm />);
})

test('user can fill out and submit form', async ()=> {
    render (<ContactForm />);

    const firstNameInput = screen.getByLabelText(/First Name/i)
    fireEvent.change(firstNameInput, {target:{name:"firstName", value: "Tom"}})

    const lastNameInput = screen.getByLabelText(/Last Name/i)
    fireEvent.change(lastNameInput, {target:{name:"lastName", value: "Segura"}})

    const emailInput = screen.getByLabelText(/Email/i)
    fireEvent.change(emailInput, {target:{name:"email", value: "test@test.com"}})

    const messageInput = screen.getByLabelText(/Message/i)
    fireEvent.change(messageInput, {target:{name:"message", value: "This is a message lawl"}})

    const button = screen.getByRole("button", {name:/Submit/i})
    fireEvent.click(button);
})