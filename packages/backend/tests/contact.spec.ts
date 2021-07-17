import request from "supertest";

import app from "../src/app";

// mock the mail sending part
jest.mock("nodemailer");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");
const sendMailMock = jest.fn();
nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });
nodemailer.getTestMessageUrl.mockReturnValue("test-url");

describe("POST /contact", () => {
  it("should return 200 & valid response if request params are proper", async () => {
    const contactRequest = {
      name: "Akhil",
      email: "akhiltcs1988@gmail.com",
      message: "Hi there",
    };

    const contactResponse = await request(app)
      .post("/api/v1/contact")
      .send(contactRequest);

    expect(contactResponse.statusCode).toBe(200);
    expect(contactResponse.headers["content-type"]).toMatch(/json/);
    expect(contactResponse.body).toMatchObject({});
    expect(sendMailMock).toHaveBeenCalledTimes(1);
  });
});

// TODO: Write more tests for failures
