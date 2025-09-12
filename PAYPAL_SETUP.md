# PayPal Donation Setup Instructions

## Environment Variables Setup

To enable PayPal donations, you need to create a `.env.local` file in the root directory with your PayPal sandbox credentials.

### Steps:

1. **Create `.env.local` file** in the project root directory:
   ```bash
   touch .env.local
   ```

2. **Add the following content** to `.env.local`:
   ```
   # PayPal Sandbox Configuration
   VITE_PAYPAL_CLIENT_ID=your_paypal_sandbox_client_id_here
   VITE_PAYPAL_CURRENCY=USD
   VITE_PAYPAL_INTENT=capture
   ```

3. **Get your PayPal Sandbox Client ID**:
   - Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
   - Sign in with your PayPal account
   - Navigate to "My Apps & Credentials"
   - Create a new app or use an existing one
   - Copy the "Client ID" from the sandbox app
   - Replace `your_paypal_sandbox_client_id_here` with your actual Client ID

4. **Restart your development server** after adding the environment variables:
   ```bash
   npm run dev
   ```

## How it Works

- The PayPal donation button only appears when users select "Giving/Making a donation" from the topic dropdown
- Users can adjust the donation amount using the number input field
- The default donation amount is $25.00
- All donations are processed through PayPal's sandbox environment for testing

## Testing

- Use PayPal sandbox test accounts to test the donation flow
- The integration will show a warning message if the PayPal Client ID is not configured
- Check the browser console for donation success/error logs

## Production Deployment

When ready for production:
1. Replace the sandbox Client ID with your live PayPal Client ID
2. Update the currency if needed
3. Test thoroughly with real PayPal accounts
