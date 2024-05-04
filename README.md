# MercadoPagoConnector

This repository contains a Node.js back-end REST API for integration with the Mercado Pago API. It facilitates payment operations, allowing users to perform and manage transactions efficiently.

## Features

- Full integration with Mercado Pago API.
- Secure and reliable payment operations.
- User management and authentication.
- Support for various payment options.

## Installation

To get the project up and running:

```bash
git clone https://github.com/YeffersonSilva/MercadoPagoConnector
cd MercadoPagoConnector
npm install
```
## Configuration
Create a .env file in the project root and add your API keys:
```bash
ACCESS_TOKEN=your_mercadopago_access_token
```
## Usage
Run the server with:
```bash
npm start
```
## Usage Examples
You can make API calls using tools like Postman or from your frontend, here's an example of how to create a payment:

```bash
POST /api/pagos
{
  "transaction_amount": 150.50,
  "token": "your_card_token",
  "description": "Product description",
  "installments": 1,
  "payment_method_id": "visa",
  "issuer_id": "123"
}
