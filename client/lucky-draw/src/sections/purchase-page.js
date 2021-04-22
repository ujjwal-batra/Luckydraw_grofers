import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function PurchasePage() {
    const [username, setUsername] = React.useState("");

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    };

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
            console.log(response)
            if (response.data === "sent") {
              alert("Message Sent");
            } else if (response.data.status === "") {
              alert("Message Failed");
            }
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
                    placeholder="Buy this product"
                    onClick={onSubmitPurchase}
                />
            </div>
        </div>
    );
}

export default PurchasePage;
