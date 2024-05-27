try {
  const btn = document.querySelector(".sp");
  const result = document.querySelector(".resultxt");
  const input__description = document.querySelector(".input__description");

  btn.addEventListener("click", function () {
    input__description.innerHTML = "We are calculating, check on result card!";
    setTimeout(() => {
      const input = document.querySelector(".input").value;
      // user input
      let birthday = new Date(input);
      let userYear = birthday.getFullYear();
      let userMonth = birthday.getMonth();
      let userDate = birthday.getDate();

      // current date
      const fullDate = new Date();
      let currentYear = fullDate.getFullYear();
      let currentMonth = fullDate.getMonth();
      let currentDate = fullDate.getDate();

      // calculate age
      const age = currentYear - userYear;
      if (currentMonth < userMonth) --age;
      if (currentDate < userDate) --userMonth;
      input__description.innerHTML = "";
      result.innerHTML = `Your age is ${age} years ${userMonth} Months, ${userDate} days.`;
    }, 3000);
  });
} catch {
  console.log("something went wrong.");
}
