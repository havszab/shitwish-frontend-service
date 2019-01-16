import React, { Component } from "react";

class PaymentInfoForm extends Component {
    state = {
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zipCode: "",
        creditCardNumber: "",
        firstName: "",
        lastName: ""
    }

    handleChange = () => {

    }

    render() {
        return (
            <div>
                <form action="">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="lastName">First Name</label>
                        <input type="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="country">Last Name</label>
                        <input type="country" name="country" value={this.state.country} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input type="city" name="city" value={this.state.city} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="street">Street</label>
                        <input type="street" name="street" value={this.state.city} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="street">Street</label>
                        <input type="street" name="street" value={this.state.city} onChange={this.handleChange}/>
                    </div>

                </form>
            </div>
        );
    }
}

export default PaymentInfoForm;
