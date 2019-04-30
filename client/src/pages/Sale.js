import React, { Component } from 'react';




class Sale extends Component {

    render() {
        return (
            <div>
            <h1 className="salehead" style={{textAlign:"center"}}>ADD A SALE!</h1>

            <div className="saleCard" style={{width: "80rem"}}>

                

                <form>
                <div className="form-group">
                        <label for="inputAddress">Title</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Title" />
                    </div>
                <div className="form-group">
                        <label for="inputAddress">Description</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Line 1</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Line 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </form>
            </div>
            </div>

        )
    }
}

export default Sale;