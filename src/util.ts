export function verifyAamarpayData(data: any) {
  const validationChecks = [
    {
      field: "amount",
      type: "string",
      check: (value: string) => /^\d+(\.\d*)?$/.test(value),
      errorMessage:
        "🛑 amount should be a valid string representation of a number. 🛑",
    },
    {
      field: "currency",
      type: "string",
      errorMessage: "🛑 currency should be a string.",
    },
    {
      field: "desc",
      type: "string",
      errorMessage: "🛑 desc should be a string.",
    },
    {
      field: "cus_name",
      type: "string",
      errorMessage: "🛑 cus_name should be a string.",
    },
    {
      field: "cus_email",
      type: "string",
      check: isValidEmail,
      errorMessage: " 🛑 cus_email should be a valid email address.",
    },
    {
      field: "cus_phone",
      type: "string",
      errorMessage: " 🛑 cus_phone should be a string.",
    },
  ];

  for (const check of validationChecks) {
    const { field, type, check: validationCheck, errorMessage } = check;

    if (
      typeof data[field] !== type ||
      (validationCheck && !validationCheck(data[field]))
    ) {
      throw new Error(errorMessage);
    }
  }

  return data;
}

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
