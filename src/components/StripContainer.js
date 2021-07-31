import React, { useState } from 'react'

import {Form} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PUBLIC_KEY = "pk_test_51I5nHHJWb59ee2STsi8TaZZvW3Iqm0s0BloeS13FpsCmAH6hm8fUmDKXKAr4Gb4lBrsM7cy9lUsbNvc7XmsxNNZs00ZDUnjErB"

toast.configure()
function StripContainer({ ELEMENTS_OPTIONS }) {

    const [amount,setAmount] = useState(1);
    const [item,setItem] = useState("Desktop")
    
    const setProductAmount = (event) => {
        setAmount(event.target.value)
    }
    const product= {};
    async function handleToken(token, address) {
        
        product["name"] = item;
        product["price"] = amount;
        const response = await axios.post("https://zbbrj.sse.codesandbox.io/checkout", {
            token,
            product
        });
        console.log({ token, address })
        const { status } = response.data;
        if (status === 'success') {
            toast('Transction successfull ! ', { type: 'success' });
        } else {
            toast("Something went wrong", { type: 'error' });
        }
    }
    return (<>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="$10" value = {amount} onChange = {setProductAmount} />
            </Form.Group>
        </Form>
        <StripeCheckout
            stripeKey={PUBLIC_KEY}
            token={handleToken}
            billingAddress
            amount={product.price}
            name={product.name}
        />
    </>
    )
}

export default StripContainer
