import Payment from "../src/index";

const init = async () => {
  const pay = new Payment(
    "aamarpaytest",
    "dbb74894e82415a2f7ff0ec3a97e4183",
    false
  );

  try {
    // const res = await pay.init({
    //   data: {
    //     amount: "100",
    //     currency: "BDT",
    //     cus_email: "nahid@gmail.com",
    //     cus_name: "nahid hasan",
    //     cus_phone: "01741013363",
    //     desc: "this i a demo",
    //     tran_id: "202312171058nahid",
    //     cus_add1: "demo address",
    //   },
    //   cancel_url: "/",
    //   fail_url: "/",
    //   success_url: "/",
    // });

    const res = await pay.Search("202312171058nahid");
    console.log("🚀 ~ file: test.ts:21 ~ init ~ res:", res);
  } catch (error) {
    console.log("🚀 ~ file: test.ts:24 ~ init ~ error:", error);
  }
};
init();
