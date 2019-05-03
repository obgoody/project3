import React from "react";

function List(props) {
    return (
        <ul className="list-group">
        {this.state.sales.map(sale => {
            return (
                <li key={sale._id} className="list-group-item">
                    <h5><strong>{sale.title}</strong></h5>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={sale.image1} class="d-block w-100" alt={sale._id} />
                            </div>
                            <div class="carousel-item">
                                <img src={sale.image2} class="d-block w-100" alt={sale._id} />
                            </div>
                            <div class="carousel-item">
                                <img src={sale.image3} class="d-block w-100" alt={sale._id} />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <p>Description: {sale.description}</p>
                    <p>Start: {sale.startTime}</p>
                    <p>End: {sale.endTime}</p>
                    <p>Address: {sale.address}, {sale.city}, {sale.state} {sale.zip}</p>
                    <p>Posted on {sale.createdAt}</p>
                </li>
            )
        })}
    </ul>
    )
}

export default List;