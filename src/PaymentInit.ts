// validate function
import axios from "axios";
import { AamarpayPayload, PaymentInitPayload } from "./Type";
import { verifyAamarpayData } from "./util";

// Define the type for the request data

export const PaymentInit = async ({
  data,
  fail_url,
  cancel_url,
  success_url,
  store_id,
  signature_key,
  live,
}: PaymentInitPayload): Promise<string> => {
  try {
    let apiUrl = "https://sandbox.aamarpay.com/jsonpost.php";
    if (live) {
      apiUrl = "https://secure.aamarpay.com";
    }
    const requestData_pay: AamarpayPayload = {
      ...verifyAamarpayData(data),
      store_id: store_id,
      signature_key: signature_key,
      fail_url: fail_url,
      cancel_url: cancel_url,
      success_url: success_url,
      type: "json",
    };

    const response = await axios.post(apiUrl, requestData_pay);
    if (response.data?.result) {
      return response.data?.payment_url;
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw error;
  }
};
