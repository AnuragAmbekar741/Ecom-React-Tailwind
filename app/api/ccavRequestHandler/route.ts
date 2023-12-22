// pages/api/ccav.js
import {encrypt} from '../../../lib/ccavUtil'; // Adjust the path accordingly
import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export default async function POST(req:NextRequest) {
    try{
        const data = await req.json();
        const workingKey = "F02318AE235927742941A1E7C4035E61"; 
        const accessCode = "AVND20KJ29AX83DNXA"; 
        let encRequest = '';
        let formbody = '';

        if(!workingKey||!accessCode) return NextResponse.json({msg:'Working key or access code not found',success:false})

        // Generate Md5 hash for the key and then convert it to a base64 string
        const md5 = crypto.createHash('md5').update(workingKey).digest();
        const keyBase64 = Buffer.from(md5).toString('base64');

        // Initializing Vector and then convert it to a base64 string
        const ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f]).toString('base64');

          encRequest = encrypt(data, keyBase64, ivBase64);
          formbody = `<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> 
                             <input type="hidden" id="encRequest" name="encRequest" value="${encRequest}">
                             <input type="hidden" name="access_code" id="access_code" value="${accessCode}">
                             <script language="javascript">document.redirect.submit();</script>
                         </form>`;


        return new NextResponse(formbody, { headers: { 'Content-Type': 'text/html' } });

    }catch(err){
        return  NextResponse.json({msg:'errror'});

    }
  
  } 

