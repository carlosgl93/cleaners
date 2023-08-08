import axios from "axios";
const baseUrl = "http://localhost:3003/api/email";

const sendEmail = async (name: string, phone: string, address: string) => {
  const contact = {
    name,
    phone,
    address,
  };
  const request = await axios.post(baseUrl, contact);
  return request.data;
};

export default {
  sendEmail,
};
