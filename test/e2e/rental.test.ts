import request from "supertest";
import app from "../../src/app";

const agent = request.agent(app);

describe("GET /rentals", () => {
    it("should return 200 OK", (done) => {
        agent.get("/rentals")
            .expect(200, done);
    });
});

describe("GET /rentals/id ", () => {
    it("with valid id should return 200 OK", (done) => {
        agent.get("/rentals/288be150-c451-42c8-8f64-61be45237203")
            .expect(200, done);
    });

    it("with invalid id should return 404 not found", (done) => {
        agent.get("/rentals/1234")
            .expect(404, done);
    });
});

//Todo Avec plus de temps j'aurais fais des tests e2e pour les filters
