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
                <h1>Delivery and payment details: </h1>
                <form action="">
                    <div>
                        <input placeholder={"First name"} type="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input placeholder={"Last name"} type="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input placeholder={"Country"} type="country" name="country" value={this.state.country} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input placeholder={"City"} type="city" name="city" value={this.state.city} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input placeholder={"Street"} type="street" name="street" value={this.state.street} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input placeholder={"House number"} type="houseNumber" name="houseNumber" value={this.state.houseNumber} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input placeholder={"ZIP code"} type="zipCode" name="zipCode" value={this.state.zipCode} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input placeholder={"Credit card number"} type="creditCardNumber" name="creditCardNumber" value={this.state.creditCardNumber} onChange={this.handleChange}/>
                    </div>

                    <button>Pay {this.props.total}$</button>
                </form>
            </div>
        );
    }
}

export default PaymentInfoForm;
