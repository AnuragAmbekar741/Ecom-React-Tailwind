import * as crypto from 'crypto';

function getAlgorithm(keyBase64: string): string {
  const key = Buffer.from(keyBase64, 'base64');
  switch (key.length) {
    case 16:
      return 'aes-128-cbc';
    case 32:
      return 'aes-256-cbc';
  }
  throw new Error('Invalid key length: ' + key.length);
}

export function encrypt(plainText: string, keyBase64: string, ivBase64: string): string {
  const key = Buffer.from(keyBase64, 'base64');
  const iv = Buffer.from(ivBase64, 'base64');

  const cipher = crypto.createCipheriv(getAlgorithm(keyBase64), key, iv);
  let encrypted = cipher.update(plainText, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(messageBase64: string, keyBase64: string, ivBase64: string): string {
  const key = Buffer.from(keyBase64, 'base64');
  const iv = Buffer.from(ivBase64, 'base64');

  const decipher = crypto.createDecipheriv(getAlgorithm(keyBase64), key, iv);
  let decrypted = decipher.update(messageBase64, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
