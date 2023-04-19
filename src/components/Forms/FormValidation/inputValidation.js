export function emailInputValidation(userInput) {
  if (userInput) {
    //regex email test found from the api documentation
    if (/^[\w\-.]+@(stud\.)?noroff\.no$/.test(userInput)) {
      return;
    } else {
      return "Not a valid @noroff.no email";
    }
  } else {
    return "Please enter your Email";
  }
}
export function userNameValidation(userInput) {
  if (userInput) {
    if (userInput.length <= 20) {
      return;
    } else {
      return "Name cannot be greater than 20 characters";
    }
    return;
  } else {
    return "Please enter a username";
  }
}

export function passwordValidation(userInput) {
  if (userInput) {
    if (userInput.length >= 8) {
      return;
    } else {
      return "Password must be at least 8 characters";
    }
  } else {
    return "Please enter a password";
  }
}
