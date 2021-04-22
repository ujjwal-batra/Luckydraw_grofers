import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PurchasePage() {
    const [username, setUsername] = React.useState("");

    // function to check for username input
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    };

    // function to post call the purchase api
    const onSubmitPurchase = () => {
        const details = {
            userName: username
        };
        console.log(details)
        axios({
            method: "POST",
            url: "http://localhost:3000/purchase",
            data: username
          }).then((response) => {
                alert(response.data);
        });
    };

    return (
        <div className="input">
            <div>
                <input
                    className=""
                    type="text"
                    name="username"
                    placeholder="Username..."
                    onChange={onChangeUsername}
                />
                <input
                    className="submitSignupInput"
                    type="submit"
                    value="Buy this product"
                    onClick={onSubmitPurchase}
                />
            </div>
            <div>
                <Link className="purchase-page-link" to="/events">
                    Try participating in Lucky-draw
                </Link>
            </div>
        </div>
    );
}

export default PurchasePage;
