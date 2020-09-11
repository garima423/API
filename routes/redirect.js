async function routes(fastify, options) {
  fastify.get("/", async (req, res) => {
    res.redirect("https://www.google.com/");
  });
}

module.exports = routes;
