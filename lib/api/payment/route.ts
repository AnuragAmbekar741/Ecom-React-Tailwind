// pages/api/payment/create.js
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { MerchantId, Currency, Amount, RedirectURL, CancelURL, Language } = await req.json();

    // Placeholder: Additional logic for payment gateway integration
    const workingKey = process.env.WORKING_KEY
    const accessCode = process.env.ACCESS_CODE

    if(!workingKey || !accessCode) throw new Error('Working key or access code is not defined')

    // Generate Md5 hash for the key and then convert it to a base64 string
    const md5 = crypto.createHash('md5').update(workingKey).digest();
    const keyBase64 = Buffer.from(md5).toString('base64');

    // Initialize Vector and then convert it to a base64 string
    const ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f]).toString('base64');

    // Example: Encrypt data with your encryption logic (replace with actual logic)
    const encryptedData = crypto.createCipheriv('aes-256-cbc', Buffer.from(keyBase64, 'base64'), Buffer.from(ivBase64, 'base64'));
    let encryptedRequest = encryptedData.update(JSON.stringify({ MerchantId, Currency, Amount }), 'utf-8', 'base64');
    encryptedRequest += encryptedData.final('base64');

    // Placeholder: Build HTML form for redirection
    const formBody = `
      <form id="paymentForm" method="post" action="https://payment-gateway-url">
        <input type="hidden" name="encRequest" value="${encryptedRequest}">
        <input type="hidden" name="access_code" value="${accessCode}">
        <!-- Add other necessary hidden fields -->
        <script type="text/javascript">
          document.getElementById("paymentForm").submit();
        </script>
      </form>
    `;

    // Send the HTML form in the response
    return new NextResponse(formBody, { headers: { 'Content-Type': 'text/html' } });
    // return NextResponse.json(formBody);
  } catch (error) {
    console.error('Error handling payment request:', error);
    return NextResponse.json({ msg: ['Error handling payment request'], success: false }, { status: 500 });
  }
}
