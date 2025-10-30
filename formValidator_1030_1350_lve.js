// 代码生成时间: 2025-10-30 13:50:56
const Joi = require('@hapi/joi');

// FormValidator class definition
class FormValidator {
  /**
   * Validates the form data based on a schema
   *
   * @param {Object} data - The form data to validate
   * @param {Object} schema - The Joi schema for validation
   */
  validate(data, schema) {
    return new Promise((resolve, reject) => {
      Joi.validate(data, schema, { abortEarly: false }, (error, value) => {
        if (error) {
          reject(error.details.map(detail => ({
            path: detail.path,
            message: detail.message,
            type: detail.type
          }));
        } else {
          resolve(value);
        }
      });
    });
  }
}

// Example usage of FormValidator with a simple schema for demonstration
const validator = new FormValidator();

// Define a Joi schema for the form
const registrationSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().label('Username'),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().label('Email'),
  password: Joi.string().min(8).max(50).required().label('Password'),
  age: Joi.number().integer().min(18).max(99).required().label('Age')
});

// Test the validation function with some sample data
validator.validate(
  { username: 'JohnDoe', email: 'johndoe@example.com', password: 'securepassword123', age: 25 },
  registrationSchema
).then(
  function (value) {
    console.log('Validation succeeded:', value);
  },
  function (errors) {
    console.error('Validation failed:', errors);
  }
);

// Export FormValidator for use in other Nuxt components or modules
module.exports = FormValidator;