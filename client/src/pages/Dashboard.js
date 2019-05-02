import React, { Component } from 'react';



class Dashboard extends Component {

    render() {
        return (

            <wrapper>
            <div >
                <ul>
                    <button>add sale</button>
                    <button>your area</button>
                    <button>account preference</button>
                    <button>sign out</button>
                </ul>
                {/* insert a modal or carousel*/}
                <h1 className="dasbBoardh1">YOUR SALES</h1>
                <div className="card-deck">
                    <div className="card">
                        <img src="https://cdn.gobankingrates.com/wp-content/uploads/2018/03/00-shutterstock_295152104-848x477.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://cdn.gobankingrates.com/wp-content/uploads/2018/03/00-shutterstock_295152104-848x477.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://cdn.gobankingrates.com/wp-content/uploads/2018/03/00-shutterstock_295152104-848x477.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                    </div>
                </div>
            </div>

            </wrapper>
        )

    }

}

export default Dashboard;