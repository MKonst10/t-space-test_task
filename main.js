document.addEventListener("DOMContentLoaded", () => {
  const chat = document.querySelector(".main-messages");
  const userAnswers = {
    "Чи був у вас досвід пов'язаний із Арбітражем трафіку?": "",
    "Скільки часу ви могли б приділяти на день?": "",
  };

  const userData = {
    "Ім'я": "",
    "Прізвище": "",
    "Пошта": "",
    "Телефон": "",
  };

  const firstMessages = [
    "Запускаємо курс з арбітражу трафіку! Отримайте цінні знання від експертів. Поглиблене вивчення сучасних стратегій.",
    "Приєднуйтесь до нашого нового курсу! Інтерактивні заняття, практичні завдання, сертифікат. Відмінна можливість підвищити кваліфікацію.",
    "Учасники отримають доступ до ексклюзивних матеріалів, консультацій та мережі контактів. Вивчайте нові тенденції арбітражу трафіку.",
    "Хочете дізнатися більше?",
  ];

  function createMessage(message, delay = 800) {
    const div = document.createElement("div");
    div.classList.add("message");

    const svg = document.createElement("img");
    svg.setAttribute("src", "./img/icons/tail.svg");
    svg.classList.add("message-tail");
    div.appendChild(svg);

    const messageP = document.createElement("p");
    messageP.classList.add("message-text");
    messageP.textContent = message;
    div.appendChild(messageP);

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("time");

    let currTime = new Date();
    let hours = currTime.getHours().toString().padStart(2, "0");
    let minutes = currTime.getMinutes().toString().padStart(2, "0");
    let time = `${hours}:${minutes}`;

    timeSpan.textContent = time;
    div.appendChild(timeSpan);
    chat.appendChild(div);

    setTimeout(() => {
      div.classList.add("visible");
    }, delay);
  }

  function createQuestion(message, delay = 800) {
    const div = document.createElement("div");
    div.classList.add("message");

    const svg = document.createElement("img");
    svg.setAttribute("src", "./img/icons/tail.svg");
    svg.classList.add("message-tail");
    div.appendChild(svg);

    const messageP = document.createElement("p");
    messageP.classList.add("message-text");
    messageP.textContent = message;
    div.appendChild(messageP);

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("time");

    let currTime = new Date();
    let hours = currTime.getHours().toString().padStart(2, "0");
    let minutes = currTime.getMinutes().toString().padStart(2, "0");
    let time = `${hours}:${minutes}`;

    timeSpan.textContent = time;
    div.appendChild(timeSpan);
    chat.appendChild(div);

    setTimeout(() => {
      div.classList.add("visible");
    }, delay);
  }

  firstMessages.forEach((message, i) => {
    createMessage(message, i * 800);
  });

  const answers = document.createElement("div");
  answers.classList.add("answers");

  const buttonYes = document.createElement("button");
  const buttonNo = document.createElement("button");
  buttonYes.textContent = "Так";
  buttonNo.textContent = "Ні";

  answers.appendChild(buttonYes);
  answers.appendChild(buttonNo);
  chat.appendChild(answers);

  setTimeout(() => {
    answers.classList.add("visible");
  }, 2400);

  const handleClickYes = () => {
    onButtonClick("Так");
    createQuestion("Чи був у вас досвід пов'язаний із Арбітражем трафіку?");

    const answers = document.createElement("div");
    answers.classList.add("answers");

    const handleButton1Click = () => {
      onButtonClick("Так");
      userAnswers["Чи був у вас досвід пов'язаний із Арбітражем трафіку?"] =
        "Так";
      button1.removeEventListener("click", handleButton1Click);
      button2.removeEventListener("click", handleButton2Click);
      button3.removeEventListener("click", handleButton3Click);

      createQuestion("Скільки часу ви могли б приділяти на день?");
      createTimeButtons();
    };

    const handleButton2Click = () => {
      onButtonClick("Ні");
      userAnswers["Чи був у вас досвід пов'язаний із Арбітражем трафіку?"] =
        "Ні";

      button1.removeEventListener("click", handleButton1Click);
      button2.removeEventListener("click", handleButton2Click);
      button3.removeEventListener("click", handleButton3Click);

      createQuestion("Скільки часу ви могли б приділяти на день?");
      createTimeButtons();
    };

    const handleButton3Click = () => {
      onButtonClick("Чув про це");
      userAnswers["Чи був у вас досвід пов'язаний із Арбітражем трафіку?"] =
        "Чув про це";

      button1.removeEventListener("click", handleButton1Click);
      button2.removeEventListener("click", handleButton2Click);
      button3.removeEventListener("click", handleButton3Click);

      createQuestion("Скільки часу ви могли б приділяти на день?");
      createTimeButtons();
    };

    const button1 = document.createElement("button");
    button1.textContent = "Так";
    button1.addEventListener("click", handleButton1Click);

    const button2 = document.createElement("button");
    button2.textContent = "Ні";
    button2.addEventListener("click", handleButton2Click);

    const button3 = document.createElement("button");
    button3.textContent = "Чув про це";
    button3.addEventListener("click", handleButton3Click);

    answers.appendChild(button1);
    answers.appendChild(button2);
    answers.appendChild(button3);
    chat.appendChild(answers);

    setTimeout(() => {
      answers.classList.add("visible");
    }, 800);
  };

  function createTimeButtons() {
    const answers = document.createElement("div");
    answers.classList.add("answers");

    const handleHourClick = () => {
      onButtonClick("Одна година");
      userAnswers["Скільки часу ви могли б приділяти на день?"] = "Одна година";
      removeEventListeners();
      createQuestion(
        "Дякую! Наша компанія дуже зацікавлена вами, для подальшої підтримки зв'язку, будь ласка, заповніть форму."
      );
      createForm();
    };

    const handleTwoHoursClick = () => {
      onButtonClick("2-3 години");
      userAnswers["Скільки часу ви могли б приділяти на день?"] = "2-3 години";
      removeEventListeners();
      createQuestion(
        "Дякую! Наша компанія дуже зацікавлена вами, для подальшої підтримки зв'язку, будь ласка, заповніть форму."
      );
      createForm();
    };

    const handleFiveHoursClick = () => {
      onButtonClick("5 і більше");
      userAnswers["Скільки часу ви могли б приділяти на день?"] = "5 і більше";
      removeEventListeners();
      createQuestion(
        "Дякую! Наша компанія дуже зацікавлена вами, для подальшої підтримки зв'язку, будь ласка, заповніть форму."
      );
      createForm();
    };

    const buttonHour = document.createElement("button");
    buttonHour.textContent = "Одна година";
    buttonHour.addEventListener("click", handleHourClick);

    const buttonTwoHours = document.createElement("button");
    buttonTwoHours.textContent = "2-3 години";
    buttonTwoHours.addEventListener("click", handleTwoHoursClick);

    const buttonFiveHours = document.createElement("button");
    buttonFiveHours.textContent = "5 і більше";
    buttonFiveHours.addEventListener("click", handleFiveHoursClick);

    answers.appendChild(buttonHour);
    answers.appendChild(buttonTwoHours);
    answers.appendChild(buttonFiveHours);
    chat.appendChild(answers);

    setTimeout(() => {
      answers.classList.add("visible");
    }, 800);
    
    function removeEventListeners() {
      buttonHour.removeEventListener("click", handleHourClick);
      buttonTwoHours.removeEventListener("click", handleTwoHoursClick);
      buttonFiveHours.removeEventListener("click", handleFiveHoursClick);
    }
  }

  const handleClickNo = () => {
    onButtonClick("Ні");
    createQuestion("Дякую за вашу відповідь, чекаємо на ваше повернення");
  };

  buttonYes.addEventListener("click", handleClickYes);
  buttonNo.addEventListener("click", handleClickNo);

  function onButtonClick(buttonValue) {
    const answer = document.createElement("div");
    answer.classList.add("answer");

    const svg = document.createElement("img");
    svg.setAttribute("src", "./img/icons/tail.svg");
    svg.classList.add("answer-tail");
    answer.appendChild(svg);

    const answerText = document.createElement("p");
    answerText.textContent = buttonValue;
    answer.appendChild(answerText);

    chat.appendChild(answer);

    buttonNo.removeEventListener("click", handleClickNo);
    buttonYes.removeEventListener("click", handleClickYes);

    setTimeout(() => {
      answer.classList.add("visible");
    }, 400);
  }

  function createForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const form = document.createElement("form");
    form.classList.add("form");

    function createFormField(labelText, inputType, name) {
      const fieldWrapper = document.createElement("div");
      fieldWrapper.classList.add("form-field");

      const label = document.createElement("label");
      label.textContent = labelText;
      label.setAttribute("for", name);

      const input = document.createElement("input");
      input.type = inputType;
      input.name = name;
      input.id = name;
      input.required = true;

      fieldWrapper.appendChild(label);
      fieldWrapper.appendChild(input);

      return fieldWrapper;
    }

    form.appendChild(createFormField("Ім'я", "text", "firstName"));
    form.appendChild(createFormField("Прізвище", "text", "lastName"));
    form.appendChild(createFormField("Пошта", "email", "email"));
    form.appendChild(createFormField("Телефон", "tel", "phone"));

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Надіслати";
    form.appendChild(submitButton);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const formValues = {};
      formData.forEach((value, key) => {
        formValues[key] = value;
      });

      const validationErrors = [];
      if (!formValues.firstName) {
        validationErrors.push("Ім'я не може бути порожнім");
      }
      if (!formValues.lastName) {
        validationErrors.push("Прізвище не може бути порожнім");
      }
      if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
        validationErrors.push("Невірний формат пошти");
      }
      if (!formValues.phone || !/^\+?\d{10,15}$/.test(formValues.phone)) {
        validationErrors.push("Невірний формат телефону. Приклад: +1234567890");
      }

      if (validationErrors.length > 0) {
        alert("Помилки валідації:\n" + validationErrors.join("\n"));
      } else {
        alert("Форма успішно відправлена!");
        userData["Ім'я"] = formValues.firstName;
        userData["Прізвище"] = formValues.lastName;
        userData["Пошта"] = formValues.email;
        userData["Телефон"] = formValues.phone;
        form.reset();
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "./success.html";
      }
    });

    formContainer.appendChild(form);
    chat.appendChild(formContainer);
  }
});
