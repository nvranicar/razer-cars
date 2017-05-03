import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const id = this.paramsFor('brands.car').id;
    return this.store.find('brand', id);
  }
});
