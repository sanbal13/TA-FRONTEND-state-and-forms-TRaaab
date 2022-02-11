import { Component } from 'react';

class Controlled extends Component {
  obj = {
    address: '',
    zipCode: '',
    city: '',
    country: '',
  };
  constructor() {
    super();
    this.state = {
      isSame: false,
      billing: { ...this.obj },
      shipping: { ...this.obj },
      billingErrors: { ...this.obj },
      shippingErrors: { ...this.obj },
    };
  }
  handleCb = (event) => {
    const { address, zipCode, city, country } = this.state.shipping;
    !this.state.isSame
      ? this.setState({
          isSame: !this.state.isSame,
          billing: {
            address,
            zipCode,
            city,
            country,
          },
          billingErrors: { ...this.obj },
        })
      : this.setState({
          isSame: !this.state.isSame,
          billing: { ...this.obj },
        });
  };

  handleChange = (event) => {
    const { name, value, parentNode } = event.target;
    let errorsVar = parentNode.id + 'Errors';
    let errors = this.state[errorsVar];
    switch (name) {
      case 'address':
        errors.address =
          value.length < 8 ? 'Atleast 8 characters required' : '';
        break;
      case 'zipCode':
        errors.zipCode = value.length !== 6 ? 'Should be 6 digits long' : '';
        break;
      case 'city':
        errors.city = value.length < 3 ? 'Atleast 3 characters required' : '';
        break;
      case 'country':
        errors.city = value.length < 3 ? 'Atleast 3 characters required' : '';
        break;
      default:
        break;
    }

    this.setState(
      {
        [parentNode.id]: {
          ...this.state[parentNode.id],
          [name]: value,
        },
        [errorsVar]: errors,
      },
      () => {
        if (this.state.isSame) {
          this.setState({
            billing: {
              ...this.state.billing,
              [name]: value,
            },
          });
        }
      }
    );
  };

  render() {
    let forms = ['Shipping', 'Billing'];
    return (
      <div className="flex container">
        {forms.map((form) => {
          let errors = this.state[form.toLowerCase() + 'Errors'];
          let states = this.state[form.toLowerCase()];
          return (
            <form key={form} id={form.toLowerCase()}>
              <h3>{form + ' Address'}</h3>
              {form === 'Billing' && (
                <label htmlFor="cb">
                  <input
                    type="checkbox"
                    name="cb"
                    id="cb"
                    onChange={this.handleCb}
                  />
                  {'Same as Shipping Address?'}
                </label>
              )}

              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                disabled={form === 'Billing' && this.state.isSame}
                onChange={this.handleChange}
                value={states.address}
                className={errors.address && 'error'}
              />
              <span>{errors.address}</span>
              <label htmlFor="zipCode">ZIP/Postal Code</label>
              <input
                type="number"
                name="zipCode"
                id="zipCode"
                disabled={form === 'Billing' && this.state.isSame}
                onChange={this.handleChange}
                value={states.zipCode}
                className={errors.zipCode && 'error'}
              />
              <span>{errors.zipCode}</span>

              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                disabled={form === 'Billing' && this.state.isSame}
                onChange={this.handleChange}
                value={states.city}
                className={errors.city && 'error'}
              />
              <span>{errors.city}</span>

              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                disabled={form === 'Billing' && this.state.isSame}
                onChange={this.handleChange}
                value={states.country}
                className={errors.country && 'error'}
              />
              <span>{errors.country}</span>
            </form>
          );
        })}
      </div>
    );
  }
}

export default Controlled;
