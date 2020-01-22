'use strict';
const { sanitizeEntity } = require('strapi-utils');


/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    ctx.set('Content-Range', await strapi.services.edificio.count()); // <--- Add this guy
    if (ctx.query._q) {
      entities = await strapi.services.edificio.search(ctx.query);
    } else {
      entities = await strapi.services.edificio.find(ctx.query);
    }

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.edificio })
    );
  },
};