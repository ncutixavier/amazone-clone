import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider' // Homework - import useStateValue from StateProvider
function Subtotal() {
    
    const [{basket}] = useStateValue() // Pull the basket from useStateValue

    // Homework - Calculate basket total
    const calculateSubTotal = (basket) => {
        let total = 0
        basket.map(el=>total +=el.price)
        return total.toFixed(2)
    }

    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>${calculateSubTotal(basket)}</strong> 
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
