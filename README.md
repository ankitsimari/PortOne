 <h1>Stripe Payment API Server</h1>

  <p>This is a simple Express.js server for handling payments using the Stripe API.</p>

  <h2>Prerequisites</h2>
  <p>Before running the server, make sure to set up your environment variables by creating a <code>.env</code> file and adding your Stripe secret key:</p>

  <pre><code>SECRET_KEY=your_stripe_secret_key</code></pre>

  <h2>Installation</h2>
  <p>Follow these steps to set up and run the server:</p>

  <pre><code>npm install</code></pre>
  <pre><code>node app.js</code></pre>

  <h2>Endpoints</h2>

  <h3>Create Payment Intent</h3>
  <pre><code>POST /v1/create_intent</code></pre>
  <p>Create a payment intent in Indian Rupees.</p>

  <h3>Capture Payment Intent</h3>
  <pre><code>POST /v1/capture_intent/:id</code></pre>
  <p>Capture a payment intent with the specified ID.</p>

  <h3>Create Refund</h3>
  <pre><code>POST /v1/create_refund/:id</code></pre>
  <p>Create a refund for a payment intent with the specified ID.</p>

  <h3>Get Payment Intents</h3>
  <pre><code>GET /v1/get_intents</code></pre>
  <p>Get a list of payment intents.</p>

  <h2>Usage</h2>
  <p>Make requests to the defined endpoints using a tool like cURL or Postman. Don't forget to replace placeholders like <code>:id</code> with actual values.</p>


