import { PaymentInit } from "./PaymentInit";
import { Search } from "./Search";
import { PaymentInitI } from "./Type";

export class Payment {
  constructor(
    private storeID: string,
    private signature_key: string,
    public live: boolean
  ) {}

  public async init({ data, fail_url, cancel_url, success_url }: PaymentInitI) {
    return PaymentInit({
      data,
      fail_url,
      cancel_url,
      success_url,
      live: this.live,
      signature_key: this.signature_key,
      store_id: this.storeID,
    });
  }
  public Search(transition_id: string) {
    return Search({
      live: this.live,
      request_id: transition_id,
      store_id: this.storeID,
      signature_key: this.signature_key,
    });
  }
}
