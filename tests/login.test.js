import { useLogInUser } from "../src/components/API/auth/login";

jest.mock("../src/components/API/auth/login");

test("Test API response", async () => {
  // Define the expected response from the API
  const expectedResponse = {
    status: 200,
    message: "Success",
    data: { userId: "123", username: "example" },
  };

  // Mock the useLogInUser function and define its return value
  useLogInUser.mockResolvedValue(expectedResponse);

  // Call the useLogInUser function
  const response = await useLogInUser("avatar", "12345678");

  // Verify the API response
  expect(response).toEqual(expectedResponse);
});
