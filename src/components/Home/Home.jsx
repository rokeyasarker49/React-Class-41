import { useLoaderData } from "react-router-dom";

const Home = () => {

    const Data = useLoaderData();


    return (
        <div className="container py-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    Data.map(sData=> <div key={sData.id} className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name: <span className="fw-normal">{sData.name}</span></h5>
                        <p className="card-text fw-semibold">UserName: <span className="fw-normal">{sData.username}</span></p>
                        <p className="card-text fw-semibold">Email: <span className="fw-normal">{sData.email}</span></p>
                        <p className="card-text fw-semibold">Phone: <span className="fw-normal">{sData.phone}</span></p>
                        <p className="card-text fw-semibold">Website: <span className="fw-normal">{sData.website}</span></p>
                        <h6>Address: </h6>
                        <p className="card-text fw-semibold ms-3">
                            <span className="fw-normal"><b className="fw-semibold">Street :</b> {sData.address.street}</span>,
                            <span className="fw-normal"><b className="fw-semibold">City :</b> {sData.address.city}</span>, <span className="fw-normal"><b className="fw-semibold">ZipCode :</b> {sData.address.zipcode}</span>
                        </p>

                        <h6>Company: </h6>
                        <p className="card-text fw-semibold ms-3">
                            <span className="fw-normal"><b className="fw-semibold">Name :</b> {sData.company.name}</span>,
                            <br/>
                            <span className="fw-normal"><b className="fw-semibold">BS :</b> {sData.company.bs}</span>
                        </p>

                    </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Home;