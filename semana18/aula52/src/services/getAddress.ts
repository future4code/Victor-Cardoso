import axios from "axios";
import { Address } from "../types/address";

const baseUrl = "https://viacep.com.br/ws";

const getAddress = async (cep: string): Promise<Address | null> => {
  try {
    const response = await axios.get(`${baseUrl}/${cep}/json`);
    const { logradouro, bairro, localidade, uf } = response.data;

    const address: Address = {
      street: logradouro,
      neighbourhood: bairro,
      city: localidade,
      state: uf,
    };

    console.log(address);

    return address;
  } catch (err) {
    return null;
  }
};

export default getAddress;
