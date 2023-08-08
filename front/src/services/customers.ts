import axios from "axios";
const baseUrl = "/api/customers";

const create = async (name: string, phone: string, address: string) => {
  await axios.post(
    baseUrl,
    { name, phone, address },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export default {
  create,
};
