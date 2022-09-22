import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Timothy");
  expect(city).toEqual("Kitale");
  expect(image).toEqual("https://c.tenor.com/9mrybXRUAskAAAAC/deveendesign-light.gif");
});
