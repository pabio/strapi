"use strict";

const cryptoRandomString = require("crypto-random-string");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title) {
        data.slug = data.slug || cryptoRandomString({ length: 10 });
      }
    },
    beforeUpdate: async (_, data) => {
      data.slug = data.slug || cryptoRandomString({ length: 10 });
    },
  },
};
