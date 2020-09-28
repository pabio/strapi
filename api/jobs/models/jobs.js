"use strict";

const slugify = require("@sindresorhus/slugify");
const cryptoRandomString = require("crypto-random-string");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title) {
        data.slug = `${slugify(data.title)}-${cryptoRandomString()}`;
      }
    },
    beforeUpdate: async (_, data) => {
      data.slug = data.slug || `${slugify(data.title)}-${cryptoRandomString()}`;
    },
  },
};
