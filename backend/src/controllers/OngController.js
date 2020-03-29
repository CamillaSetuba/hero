
const connection = require('../database/connection');
const crypto = require ('crypto');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
          return response.json(ongs);
      },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //armazenando cada dado em uma variável

   const id = crypto.randomBytes(4).toString('HEX');//Comando para que o crypto possa criar os ids

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

   return response.json({ id });

    }
};
