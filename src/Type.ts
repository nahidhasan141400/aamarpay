export interface PaymentResponse {
  pg_service_charge_bdt: string;
  amount_original: string;
  gateway_fee: string;
  pg_service_charge_usd: string;
  pg_card_bank_name: string;
  pg_card_bank_country: string;
  card_number: string;
  card_holder: string;
  status_code: string;
  pay_status: string;
  success_url: string;
  fail_url: string;
  cus_name: string;
  cus_email: string;
  cus_phone: string;
  currency_merchant: string;
  convertion_rate: string;
  ip_address: string;
  other_currency: string;
  pg_txnid: string;
  epw_txnid: string;
  mer_txnid: string;
  store_id: string;
  merchant_id: string;
  currency: string;
  store_amount: string;
  pay_time: string;
  amount: string;
  bank_txn: string;
  card_type: string;
  reason: string;
  pg_card_risklevel: string;
  pg_error_code_details: string;
  opt_a: string;
  opt_b: string;
  opt_c: string;
  opt_d: string;
}
export interface AamarpayRequestData {
  amount: string;
  currency:
    | "BDT"
    | "USD"
    | "EUR"
    | "INR"
    | "PKR"
    | "CAD"
    | "AUD"
    | "CNY"
    | "RUB"
    | "SAR"
    | "QAR";
  desc: string;
  cus_name: string;
  cus_email: string;
  cus_phone: string;
  tran_id: string;
  cus_city?: string;
  cus_state?: string;
  cus_country?: string;
  cus_postcode?: string;
  cus_add1?: string;
  cus_add2?: string;
  opt_a?: string;
  opt_b?: string;
  opt_c?: string;
  opt_d?: string;
}
export interface TransactionInfo {
  pg_txnid: string;
  mer_txnid: string;
  risk_title: string;
  risk_level: string | null;
  cus_name: string;
  cus_email: string;
  cus_phone: string;
  cus_add1: string;
  cus_add2: string;
  cus_city: string;
  cus_state: string;
  cus_postcode: string;
  cus_country: string;
  cus_fax: string;
  ship_name: string | null;
  ship_add1: string | null;
  ship_add2: string | null;
  ship_city: string | null;
  ship_state: string | null;
  ship_postcode: string | null;
  ship_country: string | null;
  desc: string | null;
  merchant_id: string;
  store_id: string;
  amount: string;
  amount_bdt: string;
  pay_status: string;
  status_code: string;
  status_title: string;
  cardnumber: string;
  approval_code: string;
  payment_processor: string;
  bank_trxid: string;
  payment_type: string;
  error_code: string;
  error_title: string;
  bin_country: string;
  bin_issuer: string;
  bin_cardtype: string;
  bin_cardcategory: string;
  date: string;
  date_processed: string;
  amount_currency: string;
  rec_amount: string;
  processing_ratio: string;
  processing_charge: string;
  ip: string;
  currency: string;
  currency_merchant: string;
  convertion_rate: string;
  opt_a: string;
  opt_b: string;
  opt_c: string;
  opt_d: string;
  verify_status: string;
  call_type: string;
  email_send: string;
  doc_recived: string;
  checkout_status: string;
}

export interface AamarpayPayload extends AamarpayRequestData {
  store_id: string;
  fail_url: string;
  cancel_url: string;
  success_url: string;
  signature_key: string;
  type: string;
}

export interface PaymentInitI {
  data: AamarpayRequestData;
  fail_url: string;
  cancel_url: string;
  success_url: string;
  live?: boolean | undefined;
}

export interface PaymentInitPayload extends PaymentInitI {
  signature_key: string;
  store_id: string;
}
