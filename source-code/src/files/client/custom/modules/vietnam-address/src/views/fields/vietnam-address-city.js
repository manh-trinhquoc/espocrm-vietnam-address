console.log("vietnam-address:views/fields/vietnam-address-city")
define('vietnam-address:views/fields/vietnam-address-city', ['views/fields/varchar'], function (Dep) {

    return Dep.extend({

        setupOptions: function () {
            var cityList = this.getConfig().get('addressCityList') || [];

            if (cityList.length) {
                this.params.options = Espo.Utils.clone(cityList);
            }
        },
    });
});
