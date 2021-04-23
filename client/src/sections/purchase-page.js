import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

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
            <Header />
            <div className="purchase-container">
                <div className="purchase-image">
                    <img src="https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg" width="200px" height="200px"/>
                </div>
                <div className="purchase-cost">
                    $1000
                </div>
                <div className="">
                    <input
                        className="purchase-input"
                        type="text"
                        name="username"
                        placeholder="Username..."
                        onChange={onChangeUsername}
                    />
                    <input
                        className="purchase-submit"
                        type="submit"
                        value="Buy &rarr;"
                        onClick={onSubmitPurchase}
                    />
                </div>
                <div className="purchase-link">
                    <Link className="purchase-page-link" to="/">
                        Try participating in Lucky-draw
                    </Link>
                </div>
                <div className="purchase-hint">
                    **To buy the ticket write ur username and proceed
                </div>
            </div>
        </div>
    );
}

export default PurchasePage;
