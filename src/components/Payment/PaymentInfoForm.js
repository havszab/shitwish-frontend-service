import React, { Component } from "react";

class PaymentInfoForm extends Component {

    constructor () {
        super();
        this.state = {
            country: "",
            city: "",
            street: "",
            houseNumber: "",
            zipCode: "",
            creditCardNumber: "",
            firstName: "",
            lastName: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        console.log(name);
        this.setState({
            [name]: value
        });
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
                        <label htmlFor="lastName">Last Name</label>
                        <input type="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="country" name="country" value={this.state.country} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input type="city" name="city" value={this.state.city} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="street">Street</label>
                        <input type="street" name="street" value={this.state.street} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="houseNumber">House number</label>
                        <input type="houseNumber" name="houseNumber" value={this.state.houseNumber} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="zipCode">ZIP code</label>
                        <input type="zipCode" name="zipCode" value={this.state.zipCode} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="creditCardNumber">Credit card number</label>
                        <input type="creditCardNumber" name="creditCardNumber" value={this.state.creditCardNumber} onChange={this.handleChange}/>
                    </div>

                    <button>Pay {this.props.total}$</button>
                </form>
            </div>
        );
    }
}

export default PaymentInfoForm;
