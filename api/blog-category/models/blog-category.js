"use strict";

const slugify = require("@sindresorhus/slugify");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title) {
        data.slug = slugify(data.title);
      }
    },
    beforeUpdate: async (_, data) => {
      data.slug = data.slug || slugify(data.title);
    },
  },
};
