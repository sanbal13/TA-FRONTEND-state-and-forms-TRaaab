import React from 'react';
import data from '../data.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      products: data.products,
      cart: {},
      showCart: false,
    };
  }
  /* Choose Size- X, XL, S ... */
  handleSize = (size) => {
    let sizes = this.state.sizes;
    sizes.includes(size)
      ? sizes.splice(sizes.indexOf(size), 1)
      : sizes.push(size);
    let products = [];
    sizes.forEach((size) => {
      products = products.concat(
        data.products.filter((product) => product.availableSizes.includes(size))
      );
    });
    let set = new Set(products);
    products = [...set];
    this.setState({
      products,
      sizes,
    });
  };
  /* Sort the items */
  handleDropBox = (event) => {
    let products = this.state.products;
    let value = event.target.value;
    products = products.sort((a, b) =>
      value === 'highest'
        ? b.price - a.price
        : value === 'lowest'
        ? a.price - b.price
        : 0
    );
    this.setState({
      products,
    });
  };
  /* Add items to cart */
  handleAddToCart = (event) => {
    let id = event.target.parentElement.id;
    let cart = this.state.cart;
    cart[id] = cart[id] ? cart[id] + 1 : 1;
    this.setState({
      cart,
    });
  };
  /* Show/Close Cart */
  handleCartOpen = () => {
    this.setState({
      showCart: true,
    });
  };
  handleCartClose = (event) => {
    this.setState({
      showCart: false,
    });
  };
  /* Delete Item from Cart */
  handleDelete = (id) => {
    let cart = this.state.cart;
    delete cart[id];
    this.setState({
      cart,
    });
  };
  /* Increase the count of Product in the cart */
  handleIncrease = (id) => {
    let cart = this.state.cart;
    cart[id] = cart[id] + 1;
    this.setState({
      cart,
    });
  };
  /* Decrease the count of Product in the cart */
  handleDecrease = (id) => {
    let cart = this.state.cart;
    cart[id] = cart[id] - 1;
    if (cart[id] === 0) {
      delete cart[id];
    }
    this.setState({
      cart,
    });
  };
  /* render() method */
  render() {
    let allSizes = ['S', 'SX', 'M', 'X', 'L', 'XL', 'XXL'];
    const { cart, products, sizes, showCart } = this.state;
    let productIds = Object.keys(this.state.cart);
    let allProducts = data.products;
    let cartProducts = allProducts.filter((product) => {
      return productIds.includes(String(product.id));
    });

    let count = Object.values(cart).reduce((acc, val) => {
      return acc + val;
    }, 0);
    let subtotal = cartProducts.reduce((price, product) => {
      return price + product.price * cart[product.id];
    }, 0);
    return (
      <>
        <div
          className={showCart ? 'cart cart-expand' : 'cart'}
          onClick={() => this.handleCartOpen()}
        >
          <img src="./static/bag-icon.png" alt="Shopping Cart" />
          <div className={showCart ? 'items-expand' : 'items center'}>
            {count}
          </div>
          <div
            className={showCart ? 'close' : 'no-display'}
            onClick={() =>
              setTimeout(() => {
                this.handleCartClose();
              }, 100)
            }
          >
            X
          </div>
        </div>
        <div className="container">
          <div className="drop-down">
            <span className="orderBy">Order by</span>
            <select name="sort" id="sort" onChange={this.handleDropBox}>
              <option>Select</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>
            </select>
          </div>
          <div className="flex container">
            <div className="sizes flex">
              {allSizes.map((size) => {
                return (
                  <div
                    key={size}
                    onClick={() => this.handleSize(size)}
                    className={
                      sizes.includes(size)
                        ? 'active size center'
                        : 'size center'
                    }
                  >
                    {size}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap cards flex-start">
              {products.map((product) => {
                return (
                  <div key={product.id} id={product.id} className="card">
                    <div className="free-shipping">Free Shipping</div>
                    <img
                      src={`./static/products/${product.sku}_1.jpg`}
                      alt={product.title}
                    />
                    <h3>{product.title}</h3>
                    <div className="border-bottom" />
                    <div className="price">
                      {product.currencyFormat + product.price}
                    </div>
                    <div className="availableSizes">
                      {product.availableSizes
                        .filter((size) => sizes.includes(size))
                        .join('-')}
                    </div>
                    <button className="addCart" onClick={this.handleAddToCart}>
                      Add To Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={this.state.showCart ? 'modal' : 'no-display'}>
          {cartProducts.map((product) => {
            return (
              <div key={product.id} className="cartCard flex">
                <img
                  src={`./static/products/${product.sku}_2.jpg`}
                  alt={product.title}
                />
                <div className="description">
                  <h4>{product.title}</h4>

                  <div className="orderedSize">
                    {product.availableSizes + '|' + product.style}
                  </div>
                  <div className="quantity">
                    {'PrintQuantity: ' + cart[product.id]}
                  </div>
                </div>
                <div className="price-section">
                  <div className="price">
                    {product.currencyFormat + ' ' + product.price}
                  </div>
                  <div className="quantity flex">
                    <div
                      className="add center"
                      onClick={() => this.handleIncrease(product.id)}
                    >
                      +
                    </div>
                    <div
                      className="remove center"
                      onClick={() => this.handleDecrease(product.id)}
                    >
                      -
                    </div>
                  </div>
                  <div
                    className="delete"
                    onClick={() => this.handleDelete(product.id)}
                  >
                    ✖
                  </div>
                </div>
              </div>
            );
          })}
          <div className="subtotal">{'Subtotal: $ ' + subtotal.toFixed(2)}</div>
        </div>
      </>
    );
  }
}
export default App;
