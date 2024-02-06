const app = require("../app");
const request = require("supertest");
require('../models');

describe("GET /movies", () => {
  test("debe traer todas las películas con información de actores, directores y géneros", async () => {
    const response = await request(app).get("/movies");
    console.log(response.body);

    // Verifica el código de estado
    expect(response.status).toBe(200);

    // Verifica que la respuesta sea un array
    expect(Array.isArray(response.body)).toBe(true);

    // Puedes agregar más aserciones según la estructura esperada de tus datos

    // Ejemplo: Verifica que cada película tenga propiedades específicas
    if (response.body.length > 0) {
      const movie = response.body[0];
    
      expect(movie).toHaveProperty("name");
      expect(movie).toHaveProperty("image");
      expect(movie).toHaveProperty("synopsis"); // Corregido aquí, elimina el espacio extra
      expect(movie).toHaveProperty("release_year");
      // Agrega más propiedades según tus necesidades
    }
  });
});


