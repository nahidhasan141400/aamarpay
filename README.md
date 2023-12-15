# aamarPay.v2

aamarpay.v2 is a library used for easy integration of aamarpay payment gateway with node applications

> aamarpay.v2 হল একটি লাইব্রেরি যা নোড অ্যাপ্লিকেশনের সাথে aamarpay পেমেন্ট গেটওয়ে সহজে ইন্টিগ্রেশন করার জন্য ব্যাবহৃত হয়

![image.png](https://eraser.imgix.net/workspaces/hHEwyT8y11OD7vgA7su7/tSznLtvMGrRi0MTceIR3wGwzYGg2/khgZy0EobEuJAicRUcEu8.png?ixlib=js-3.7.0 "image.png")

[﻿www.aamarpay.com/](https://www.aamarpay.com/)

## Features

- Easy setup and easy-to-use API
- Uses promises, so supports `async` `await` syntax

---

**Installation**

```bash
npm i aamarpay.v2
```

**Usage**

```js
import { Payment } from "aamarpay.v2";

const Start = async () => {
  try {
    const Pay = new Payment(
      "aamarpaytest", // store id
      "dbb74894e82415a2f7ff0ec3a97e4183", // signature key
      false // false = sandbox , true = live
    );

    const res = await Pay.init({
      data: {
        amount: "100",
        currency: "BDT",
        cus_email: "nahid@gmail.com",
        cus_name: "nahid hasan",
        cus_phone: "01XXXXXXXX",
        desc: "This is a demo",
        tran_id: "202312171066nahid",
        cus_add1: "demo address",
      },
      cancel_url: "/",
      fail_url: "/",
      success_url: "/",
    });
    console.log(res); //return the payment URL
  } catch (error) {
    console.log(error);
  }
};
```

```js
import { Payment } from "aamarpay.v2";
```

Payment is a class that makes an instance of a payment object that helps us to create a payment.

payment class Constructor has 3 Parameters

1. store id = string
2. signature key = string
3. is Live = Booleans

```js
new Payment("store_id", "signature_key", isLive);
```

**Example**

```js
new Payment("aamarpaytest", "dbb74894e82415a2f7ff0ec3a97e4183", false);
```

this credential was provided by Aamarpay Sandbox docs [﻿check here](https://aamarpay.readme.io/reference/initiate-payment-json)

**init method**

```js
[instance].init(payload);
```

> _replace instance to your payment object_

Payload is an Object that has property 4 property

1. data = object
2. cancel_url = URL to redirect when the payment was canceled
3. fail_url = URL to redirect when the payment was fail
4. success_url = URL to redirect when the payment was successful and this endpoint also work as [﻿webhooks](https://aamarpay.readme.io/reference/instant-payment-notification)

**Data Object Property :**

```ts
{
  amount: string;
  currency: "BDT" | "USD" | "EUR"| "INR" | "PKR" | "CAD"| "AUD" | "CNY" | "RUB"| "SAR" | "QAR";
  desc: string;
  cus_name: string;
  cus_email: string;
  cus_phone: string;
  tran_id: string; //this should uniq in every transaction
  cus_city?: string; // optional
  cus_state?: string; // optional
  cus_country?: string; // optional
  cus_postcode?: string; // optional
  cus_add1?: string; // optional
  cus_add2?: string; // optional
  opt_a?: string; // optional
  opt_b?: string; // optional
  opt_c?: string; // optional
  opt_d?: string; // optional
}
```

**typeScript type:**

```ts
import { AamarpayRequestData } from "aamarpay.v2";
```

and the `init()` method returned a promise and the result was a URL for the payment page

---

**Search method:**

```js
[instance].Search("transactions_id");
```

> _replace instance to your payment object_

this method is used to retrieve the transaction information base on transaction id;

this return a promise and result is

```ts
{
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
```

**typeScript type:**

```ts
import { TransactionInfo } from "aamarpay.v2";
```

if you want to know more check out aamarpay official website

## [﻿www.aamarpay.com/](https://www.aamarpay.com/)

terms

> _The software is given in its current state with no guarantees, whether explicitly stated or implied. This includes assurances of its suitability for a specific purpose, merchantability, or overall quality. The author or copyright holder cannot be held responsible for any claims, damages, or other liabilities arising from the use or transactions related to the software, whether through contract, tort, or any other legal grounds._
