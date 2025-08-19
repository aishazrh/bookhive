import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
    return (
        <section className="not-found">
            <h3>Sorry, we can't find the book you're searching for.</h3>
            <h6>Please keep on supporting us so we can update more books on here!</h6>
            <hr style={{ marginTop: "100px", marginBottom: "100px" }} />
            <h5>
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /> Thank you for using our services <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            </h5>
        </section>
    )
}