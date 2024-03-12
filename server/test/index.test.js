const server = require("../src/server");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
    //! ---- COUNTRY RUTES ------------------------------------------------------
    describe("GET /countries", () => {
        it("Responde con status: 200", async () => {
            await agent.get("/countries").expect(200);
        });
    });

    describe("GET /countries/country/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get("/countries/country/ARG").expect(200);
        });

        it('Responde un objeto con las propiedades: "name", "img", "continent", "capital", "subregion", "area" y "population"', async () => {
            const response = await agent.get("/countries/country/ARG");
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("img");
            expect(response.body).toHaveProperty("continent");
            expect(response.body).toHaveProperty("capital");
            expect(response.body).toHaveProperty("subregion");
            expect(response.body).toHaveProperty("area");
            expect(response.body).toHaveProperty("population");
        });

        it("Si hay un error responde con status: 404", async () => {
            await agent.get("/countries/country/ARGEN").expect(404);
        });
    });

    describe("GET /countries/name", () => {
        it("Responde con status: 200, si se encuentra el país con ese nombre", async () => {
            await agent.get("/countries/name?name=argentina").expect(200);
        });

        it("Si hay un error responde con status: 404", async () => {
            await agent.get("/countries/name?name=tucuman").expect(404);
        });
    });

    //! ---- ACTIVITIES RUTES ------------------------------------------------------
    describe("GET /activities", () => {
        it("Responde con status: 200", async () => {
            await agent.get("/activities").expect(200);
        });

        it("Responde con un array", async () => {
            const response = await agent.get("/activities");
            expect(typeof response.body).toBe("object");
        });
    });
});
