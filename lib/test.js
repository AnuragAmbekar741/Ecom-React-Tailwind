const { default: axios } = require("axios");
const ccav = new nodeCCAvenue.Configure({
    working_key: "9507DA15241756DEAD3AB3E19FDE1C53",
});
// const { StaffForm } = require("./model/staff/staffModel");
// const sendEmail = require("./utils/sendMail");
function encrypt(plainText, key = "9507DA15241756DEAD3AB3E19FDE1C53") {
    const keyHash = crypto.createHash("md5").update(key).digest();
    const initVector = Buffer.from([
        0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b,
        0x0c, 0x0d, 0x0e, 0x0f,
    ]);
    const cipher = crypto.createCipheriv("aes-128-cbc", keyHash, initVector);
    let encrypted = cipher.update(plainText, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}
function decrypt(encryptedText, key = "9507DA15241756DEAD3AB3E19FDE1C53") {
    const keyHash = crypto.createHash("md5").update(key).digest();
    const initVector = Buffer.from([
        0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b,
        0x0c, 0x0d, 0x0e, 0x0f,
    ]);
    const encryptedTextBuffer = Buffer.from(encryptedText, "hex");
    const decipher = crypto.createDecipheriv("aes-128-cbc", keyHash, initVector);
    let decrypted = decipher.update(encryptedTextBuffer, "binary", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}
// exports.postRes = async (request, response) => {
try {
    // #####################################
    const access_code = "AVLE58KE33AK44ELKA";
    const params = { order_no: req.params['order_id'], reference_no: '' };
    const encReq = encrypt(JSON.stringify(params));
    const final_data = qs.stringify({
        enc_request: encReq,
        access_code: access_code,
        command: "orderStatusTracker",
        request_type: "JSON",
        response_type: "JSON",
    });
    const ccavenue_res = await axios.post(
        `https://apitest.ccavenue.com/apis/servlet/DoWebTrans`,
        final_data,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    const info = qs.parse(ccavenue_res.data);
    console.log("INFo : ", info);
    const payment_status = decrypt(info.enc_response);
    console.log('PS : ', payment_status);
    res.send(payment_status)
} catch (error) {
    return res.status(500).send(error);
}