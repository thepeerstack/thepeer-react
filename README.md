# thepeer-react

> Official React package for Thepeer

# Thepeer React package

Thepeer is a quick and secure way to send money across any business. The SDK handles connecting other businesses to your app.

<img width="510" alt="Send SDK" src="https://user-images.githubusercontent.com/23347440/128957185-e12ae9cb-8a11-4188-bd52-4412a9ff4215.png">
<img width="510" alt="Direct charge SDK" src="https://user-images.githubusercontent.com/23347440/128957237-6b83b2d9-4a36-44b2-b147-e4e556eb1d11.png">
<img width="510" alt="Checkout SDK" src="https://user-images.githubusercontent.com/23347440/149753259-01f927a2-22ac-4f07-9224-6c1b5694ecf1.png">

## Installation

```sh
npm install thepeer-react
```

## Usage

```js
import React from 'react'
import { useSend, useDirectCharge, useCheckout } from 'thepeer-react'
// ...

export default function App() {
  const config = {
    publicKey: 'PUBLIC_KEY',
    amount: 'AMOUNT_IN_KOBO',
    currency: 'NGN',
    meta: {
      discount: 'black friday'
    }
  }

  const handleSendPayment = useSend({
    ...config,
    userReference: 'USER_REFERENCE'
  })
  const handleDirectChargePayment = useDirectCharge({
    ...config,
    userReference: 'USER_REFERENCE'
  })
  const handleCheckoutPayment = useCheckout(config)
  return (
    <div className='App'>
      <h1>Thepeer SDKs </h1>
      <button onClick={handleSendPayment}>Send</button>
      <button onClick={handleDirectChargePayment}>Direct Charge</button>
      <button onClick={handleCheckoutPayment}>Checkout</button>
    </div>
  )
}
```

## Configuration Options

- [`publicKey`](#publicKey)
- [`userReference`](#userReference)
- [`amount`](#amount)
- [`currency`](#currency)
- [`onSuccess`](#onSuccess)
- [`onError`](#onError)
- [`onClose`](#onClose)
- [`meta`](#meta)

### <a name="publicKey"></a> `publicKey`

**string: Required**
Your public key can be found on your [dashboard](https://dashboard.thepeer.co) settings.

### <a name="userReference"></a> `userReference`

**string: Required**
The user reference returned by Thepeer API when a user has been indexed

### <a name="amount"></a> `amount`

**string | number: Required**
The amount you intend to send in kobo

### <a name="currency"></a> `currency`

**string: Optional**
The currency being used. Defaults to **NGN**

### <a name="onSuccess"></a> `onSuccess`

**(response) => void: Required**
This is called when a transaction is successfully. It returns a response with event type and transaction details.

See the [event details](#thepeerEvent) below.

### <a name="onError"></a> `onError `

**(response) => void: Required**
This is called when a transaction fails. It returns a response with event type

See the [event details](#thepeerEvent) below.

### <a name="onClose"></a> `onClose `

**(response) => void: Required**
This is called when a user clicks on the close button.

### <a name="meta"></a> `meta`

**object: Optional**
This object should contain additional/optional attributes you would like to have on your transaction response

## Support

If you're having trouble with Thepeer React or your integration, please reach out to us at <support@thepeer.co>. We're more than happy to help you out.

## Thepeer API References

- [Thepeer API Docs](https://docs.thepeer.co)
- [Thepeer Dashboard](https://dashboard.thepeer.co)

## License

[MIT](https://github.com/thepeerstack/thepeer-react/blob/master/LICENSE) for more information.
