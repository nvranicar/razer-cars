import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const id = this.paramsFor('car').id;
    return this.store.query('car', id);
  }
});
