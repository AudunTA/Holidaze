test("Test to see if API is up and running, expected to retun statuscode of 200", async () => {
  const request = await fetch(
    `https://nf-api.onrender.com/api/v1/holidaze/venues`
  );
  console.log(request.status);
  expect(request.status).toBe(200);
});
