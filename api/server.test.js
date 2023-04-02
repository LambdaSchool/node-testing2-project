const db = require("../data/dbConfig");
const request = require("supertest");
const server = require("./server");

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
})

beforeEach(async () => {
    await db.seed.run();
})

test("environment is testing", () => {
    expect(process.env.NODE_ENV).toBe("testing");
})

test("sanity", () => {
    expect(1).toBe(1);
})

describe("[GET] /api/coasters", () => {

    test("responds with 200 OK", async () => {
        const res = await request(server).get("/api/coasters");
        expect(res.status).toBe(200);
    })

    test("responds with all the coasters", async () => {
        const res = await request(server).get("/api/coasters");

        const coasters = res.body;

        expect(coasters).toHaveLength(6);
        expect(coasters[0].coaster_name).toBe("Steel Vengeance")
        expect(coasters[1].coaster_name).toBe("Millennium Force")
        expect(coasters[3].coaster_name).toBe("Kingda Ka")
        expect(coasters[4].abbrv).toBe("I305")
    })
})

describe("[GET] /api/coasters/:id", () => {
    
    test("responds with 200 OK", async () => {
        const res = await request(server).get("/api/coasters/1");
        expect(res.status).toBe(200);
    })

    test("responds with coasters matching given id", async () => {
        let res = await request(server).get("/api/coasters/1");
        expect(res.body.coaster_name).toBe("Steel Vengeance");

        res = await request(server).get("/api/coasters/2");
        expect(res.body.coaster_name).toBe("Millennium Force");

        res = await request(server).get("/api/coasters/6");
        expect(res.body.abbrv).toBe("SEFK");
    })

    test("responds with coasters matching given abbrv", async () => {
        let res = await request(server).get("/api/coasters/SV");
        expect(res.body.coaster_name).toBe("Steel Vengeance");

        res = await request(server).get("/api/coasters/KK");
        expect(res.body.coaster_name).toBe("Kingda Ka");

        res = await request(server).get("/api/coasters/I305");
        expect(res.body.coaster_name).toBe("Intimidator 305");
    })

    test("abbrv is case insensitive", async () => {

        let res = await request(server).get("/api/coasters/sV");
        expect(res.body.coaster_name).toBe("Steel Vengeance");

        res = await request(server).get("/api/coasters/mf");
        expect(res.body.coaster_name).toBe("Millennium Force");

        res = await request(server).get("/api/coasters/SefK");
        expect(res.body.coaster_name).toBe("Superman: Escape from Krypton");

    })

})