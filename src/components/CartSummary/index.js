import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="total-heading">
            Order Total: <span className="total-price-heading">{total}/-</span>
          </h1>
          <p className="cart-items-count">{cartList.length} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
