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
    const response12 = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers:headers,
        data:payload
    });
    expect(response12.status()).toBe(200);
    expect(response12.ok()).toBeTruthy();
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

test("@newreg Create and Verify Booking Successfully", async ({ request }) => {
    const response = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers: headers,
        data: payload
    });
    
    expect(response.status()).toBe(200);
    expect(response.status()).toEqual(200);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).not.toBe(404);
    expect(response.status()).not.toBe(500);
    expect(response.status()).toBeLessThan(300);
    const responseBody = await response.json();
    expect(responseBody.bookingid).toBeDefined();
    console.log("Booking Created with ID:", responseBody.bookingid);

    const bookingDetails = await request.get(`https://restful-booker.herokuapp.com/booking/${responseBody.bookingid}`, {
        headers: {
            "Accept": "application/json"
        }
    });

    expect(bookingDetails.status()).toBe(200);
    expect(bookingDetails.status()).toEqual(200);
    expect(bookingDetails.ok()).toBeTruthy();
    expect(bookingDetails.status()).not.toBe(404);
    expect(bookingDetails.status()).not.toBe(500);
    expect(bookingDetails.status()).toBeLessThan(300);
    const bookingData = await bookingDetails.json();
    
    expect(bookingData.firstname).toBe(payload.firstname);
    expect(bookingData.lastname).toBe(payload.lastname);
    expect(bookingData.totalprice).toBe(payload.totalprice);
    expect(bookingData.depositpaid).toBe(payload.depositpaid);
    expect(bookingData.additionalneeds).toBe(payload.additionalneeds);
    
    console.log("Booking verified successfully:", bookingData);
});

