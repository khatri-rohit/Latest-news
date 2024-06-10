/* eslint-disable react/prop-types */

const NewsItem = ({ title, description, src, url }) => {
    const img = src ? src : '/News1.png'
    return (
        <div className="card my-2 bg-dark text-light m-3 p-3 d-inline-flex"
            style={{ maxWidth: "345px" }}>
            <img
                src={img}
                className="card-img-top p-1"
                alt="..."
                style={
                    { width: "310px", height: "200px" }
                } />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default NewsItem;
