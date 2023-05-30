//testing user login, this will fail if demo user is removed, error message will then show up in terminal
//I wanted to make this test with importing my login function but i had some issues with the react auth kit i used,
//that would not resolve when importing function, so i had to recreate it.

test("Test API response", async () => {
  const apiURL = "https://api.noroff.dev/api/v1/holidaze/auth/login";

  const logInInformation = {
    email: "avatar@noroff.no",
    password: "12345678",
  };
  const options = {
    method: "POST",
    body: JSON.stringify(logInInformation), // Convert body to JSON
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(apiURL, options);
  const json = await response.json();
  if (!response.ok) {
    console.log(json.errors[0].message);
  }
  console.log(response.status);
  expect(response.status).toBe(200);
});
