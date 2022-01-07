'use strict';

module.exports = {
  up: async (queryInterface) => {
  const data = [
    {name:'Adm Wonder', email:'wonder@email.com', password:'e10adc3949ba59abbe56e057f20f883e', role:'administrator'},
    {name:'Vend Batman', email:'batman@email.com', password:'e10adc3949ba59abbe56e057f20f883e', role:'seller'},
    {name:'Cliente Hulk', email:'hulk@email.com', password:'e10adc3949ba59abbe56e057f20f883e', role:'customer'},
    {name:'Cliente Spider', email:'spider@email.com', password:'e10adc3949ba59abbe56e057f20f883e', role:'customer'},
    {name:'Vend Iron', email:'iron@email.com', password:'e10adc3949ba59abbe56e057f20f883e', role:'seller'},
  ];
    return queryInterface.bulkInsert('users', data, {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {})

};
