import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const renderedComponent = render(<CheckoutForm />)
    renderedComponent.getByText('Checkout Form')
});

test("form shows success message on submit with form details", async () => {
    const renderedComponent = render(<CheckoutForm />)
    let successMsg = renderedComponent.queryByTestId('successMessage')
    expect(successMsg === null)
    /* Get all fields for component */
    const firstNameField = renderedComponent.getByLabelText(/First Name:/);
    const lastNameField = renderedComponent.getByLabelText(/Last Name:/);
    const addressField = renderedComponent.getByLabelText(/Address:/);
    const cityField = renderedComponent.getByLabelText(/City:/);
    const stateField = renderedComponent.getByLabelText(/Zip:/);
    const submitButton = renderedComponent.getByRole('button')

    /* FIll out all fields for component */
    userEvent.type(firstNameField, 'FirstName');
    userEvent.type(lastNameField, 'LastName');
    userEvent.type(addressField, '1234 Address');
    userEvent.type(cityField, 'BABYLON 5');
    userEvent.type(stateField, 'Solis Planum');

    /* Submit Form */
    userEvent.click(submitButton)
    
    /* Verify Success Message appears */
    let nSuccessMsg = await renderedComponent.findByTestId('successMessage');
    expect(nSuccessMsg);

});
