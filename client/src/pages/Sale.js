import React, { Component } from 'react';
import API from "../utils/API";

class Sale extends Component {
    state = {
        title: "",
        description: "",
        line1: "",
        line2: "",
        city: "",
        state: "",
        zip: ""
    }

    handleInputChange = event => {
        // console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.add(this.state)
            .then(response => {
                alert("Garage sale added!");
            })
    }

    render() {
        return (
            <div>
                <div className="page-container">
                    <h1 className="salehead" style={{ textAlign: "center" }}>ADD A SALE!</h1>
                    <div className="saleCard" style={{ width: "80rem" }}>
                        <form>
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input type="text" className="form-control" name="title" placeholder="Enter a title" value={this.state.title} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label for="description">Description</label>
                                <input type="text" className="form-control" name="description" placeholder="Enter a description" value={this.state.description} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label for="line1">Line 1</label>
                                <input type="text" className="form-control" name="line1" placeholder="1234 Main Street" value={this.state.line1} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label for="line2">Line 2 (Optional)</label>
                                <input type="text" className="form-control" name="line2" placeholder="Apartment #, Floor #, etc." value={this.state.line2} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="city">City</label>
                                    <input type="text" className="form-control" name="city" placeholder="Enter a city" value={this.state.city} onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="state">State</label>
                                    <input type="text" className="form-control" name="state" placeholder="Ex: CA" value={this.state.state} onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="zip">Zip</label>
                                    <input type="text" className="form-control" name="zip" placeholder="12345" value={this.state.zip} onChange={this.handleInputChange} required />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.handleFormSubmit}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Sale;