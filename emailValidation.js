// JavaScript Program to Validate An Email Address

const emailValidation = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reg.test(email)) {
    console.log(`${email} this is valid Email address`);
  } else {
    console.log(`${email} this is not valid Email address`);
  }
};

emailValidation("abc@mail.com");
emailValidation("abc@com");
