test("Test API response", async () => {
  const testVenueId = "5d1e9398-ef54-451e-b9c9-1fce6585d94a";
  const apiVenue = `https://api.noroff.dev/api/v1/holidaze/venues/${testVenueId}?_bookings=true&_owner=true`;
  const response = await fetch(apiVenue);
  const json = await response.json();
  if (!response.ok) {
    console.log(json.errors[0].message);
  }
  expect(response.status).toBe(200);
});
