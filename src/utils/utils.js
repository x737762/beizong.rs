import crypto from "crypto";
// import fs from "fs";

export const getCurrentTime = () => {
  const date = new Date();

  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)} ${date
    .getHours()
    .toString()
    .padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)}:${date
    .getSeconds()
    .toString()
    .padStart(2, 0)}`;
};

// 加密用户信息
export const encryptUserInfo = (userInfo) => {
  const iv = crypto.randomBytes(16);
  const sk = crypto.randomBytes(32);
  const cipher = crypto.createCipheriv("aes-256-cbc", sk, iv);
  let encrypted = cipher.update(userInfo, "utf8", "hex");
  encrypted += cipher.final("hex");
  return {
    iv: iv.toString("hex"),
    sk: sk.toString("hex"),
    encrypted,
  };
};

// 解密用户信息
export const decryptUserInfo = (encryptedData, secretKey) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    secretKey,
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

// 生成MD5
export const generateMD5 = (data) => {
  const hash = crypto.createHash("md5");
  hash.update(data);
  return hash.digest("hex");
};

// 生成随机密钥
// export const generateRandomKey = (keyLength) => {
//   return crypto.randomBytes(Math.ceil(keyLength / 8)).toString("hex");
// };

// const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
//   modulusLength: 2048,
// });

// console.log(222, privateKey);
// console.log(222, publicKey);

// fs.writeFileSync(
//   "private.pem",
//   privateKey.export({ type: "pkcs1", format: "pem" })
// );
// fs.writeFileSync(
//   "public.pem",
//   publicKey.export({ type: "pkcs1", format: "pem" })
// );
