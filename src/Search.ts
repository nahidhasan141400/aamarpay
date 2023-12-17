import axios from "axios";
import { TransactionInfo } from "./Type";

export const Search = async ({
  live,
  request_id,
  store_id,
  signature_key,
}: {
  live: boolean;
  request_id: string;
  store_id: string;
  signature_key: string;
}): Promise<TransactionInfo> => {
  let apiUrl = "https://sandbox.aamarpay.com/api/v1/trxcheck/request.php";
  if (live) {
    apiUrl = "https://secure.aamarpay.com/api/v1/trxcheck/request.php";
  }
  try {
    const res = await axios.get(
      `${apiUrl}?request_id=${request_id}&store_id=${store_id}&signature_key=${signature_key}&type=json`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
