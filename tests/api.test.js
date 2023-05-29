test("API request returns OK response", async () => {
  const request = await fetch(
    `https://nf-api.onrender.com/api/v1/holidaze/venues`
  );
  console.log(request.status);
  expect(request.status).toBe(200);
});
