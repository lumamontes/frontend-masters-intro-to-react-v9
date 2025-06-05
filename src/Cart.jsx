const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function Cart({ cart, checkout }) {
  let total = 0;
  for(const item of cart) {
    const current = cart[i]
    total += item.pizza.sizes[item.size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            <span className="size">{item.size}</span>
            <span className="type">{item.pizza.name}</span>
            <span className="price">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
      <p> Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  )

}