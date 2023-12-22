// pages/api/payment.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import { encrypt } from '../../lib/ccavUtil'; // Assuming ccavutil.js is in the 'lib' directory
import crypto from 'crypto';

export default async function Post(req: NextApiRequest, res: NextApiResponse) {
    let body = '';
    const workingKey = 'F02318AE235927742941A1E7C4035E61'; // Put in the 32-Bit key shared by CCAvenues.
    const accessCode = 'AVND20KJ29AX83DNXA'; // Put in the Access Code shared by CCAvenues.

    // Generate Md5 hash for the key and then convert it into a base64 string
    const md5 = crypto.createHash('md5').update(workingKey).digest();
    const keyBase64 = Buffer.from(md5).toString('base64');

    // Initializing Vector and then convert it into a base64 string
    const ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f]).toString('base64');

    // req.on('data', (data) => {
    //   body += data;
    //   const encRequest = encrypt(body, keyBase64, ivBase64);
    //   const formBody = `<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="${encRequest}"><input type="hidden" name="access_code" id="access_code" value="${accessCode}"><script language="javascript">document.redirect.submit();</script></form>`;
    //   res.status(200).send(formBody);
    // });

    const page = await fetch('https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction')
  return(
    page
  ) 
}
