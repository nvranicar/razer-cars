import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('string'),
  hp: DS.attr('number'),
  price: DS.attr('number'),
  brand: DS.belongsTo('brand'),
});
