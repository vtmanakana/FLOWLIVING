import { Link } from "react-router-dom";

const FlatItem = ({flat}) => {

    const formattedPrice = (amount) => {
        return amount.toLocaleString('en-ZA', {
            style: 'currency',
            currency: 'ZAR'
        });
    };

       // Function to truncate text to a specified length and add an ellipsis
    const truncatedDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        } else {
            return text;
        }
    };

    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src={flat.images[0]} alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-4">
                    <span className="item-title">{flat.title}</span>
                    <span className="item-price">{flat.unit.price}</span>
                    {/* <span className="item-price">{formattedPrice(flat.unit.price)}</span> */}
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                           <i className="fas fa-check-circle"></i> <span>{truncatedDescription(flat.description, 30)}</span>
                        </div>
                        <Link to={`/flat/${flat._id}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlatItem