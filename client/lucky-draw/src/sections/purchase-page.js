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
        // const requestOptions = {
        //     method: "POST",
        //     headers: {
        //     "Content-Type": "application/json; charset=utf-8",
        //     },
        //     body: JSON.stringify(details),
        // };
        // try {
        //     fetch("http://localhost:3000/purchase", requestOptions).then(
        //         async (response) => {
        //             const data = await response.json();
        //             console.log(data)
        //             // check for error response
        //             // if (!response.ok) {
        //             //     // get error message from body or default to response status
        //             //     const error = (data && data.message) || response.status;
        //             //     console.log(error);
        //             // } else alert(response);
        //         }
        //     );
        // } catch (err) {
        //     alert(err); // Failed to fetch
        // }
    };

    return (
        <div className="input">
            <form onSubmit={onSubmitPurchase} method="POST">
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
                />
            </form>
        </div>
    );
}

export default PurchasePage;
