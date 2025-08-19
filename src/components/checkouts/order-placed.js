import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Order() {
    return (
        <section className="order">
            <h3>Your order has been placed!</h3>
            <h5>Please wait for your book to arrive.</h5>
            <hr style={{ marginTop: "100px", marginBottom: "100px" }} />
            <h5>
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /> Thank you for using our services <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            </h5>
        </section>
    )
}