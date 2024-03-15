function formatToINR(number) {
  // Check if the input is not a number

  if (isNaN(number)) {
    return "Invalid input";
  }

  // Create a new number formatter for Indian Rupees (INR) currency

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  // Format the number into INR currency format

  return formatter.format(number);
}

export default formatToINR;
