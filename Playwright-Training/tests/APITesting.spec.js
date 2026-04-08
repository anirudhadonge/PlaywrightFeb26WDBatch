import { test, expect } from "@playwright/test";

test("API Testing", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/productsList",
  );
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);
});

const headers ={
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const payload = {
    "firstname" : "Anirudha",
    "lastname" : "Donge ",
    "totalprice" : 145676,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-06-04",
        "checkout" : "2026-07-04"
    },
    "additionalneeds" : "Breakfast"
}
test("@Regression Create Booking using API", async ({ request }) => {
    const response = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers:headers,
        data:payload
    });
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);

    const bookingDetails = await request.get(`https://restful-booker.herokuapp.com/booking/${responseBody.bookingid}`,{
        headers:{
            "Accept": "application/json"
        }
    });

    expect(bookingDetails.status()).toBe(200);
    expect(bookingDetails.ok()).toBeTruthy();
    const bookingDetailsResponse = await bookingDetails.json();
    expect(bookingDetailsResponse.firstname).toBe(responseBody.booking.firstname);
});
