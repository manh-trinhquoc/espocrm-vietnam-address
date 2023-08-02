define('vietnam-address:views/fields/vietnam-address', ['views/fields/base', 'views/fields/varchar', 'vietnam-address:libs/admin-unit'], function (Dep, Varchar, AdminUnit) {

    /**
     * An address field.
     *
     * @class
     * @name Class
     * @extends module:views/fields/base.Class
     * @memberOf module:views/fields/address
     */
    return Dep.extend( /** @lends module:views/fields/address.Class# */ {

        type: 'vietnam-address',

        listTemplate: 'vietnam-address:fields/address/detail',
        detailTemplate: 'vietnam-address:fields/address/detail',
        editTemplate: 'vietnam-address:fields/address/edit',
        searchTemplate: 'vietnam-address:fields/address/search',

        /**
         * @inheritDoc
         */
        validations: [
            'required',
            'pattern',
        ],

        /**
         * @inheritDoc
         */
        events: {
            'click [data-action="viewMap"]': function (e) {
                e.preventDefault();
                e.stopPropagation();

                this.viewMapAction();
            },
        },

        data: function () {
            var data = Dep.prototype.data.call(this);

            data.ucName = Espo.Utils.upperCaseFirst(this.name);

            this.addressPartList.forEach(item => {
                data[item + 'Value'] = this.model.get(this[item + 'Field']);
            });

            if (this.mode === this.MODE_DETAIL || this.mode === this.MODE_LIST) {
                data.formattedAddress = this.getFormattedAddress();

                data.isNone = data.formattedAddress === null;

                if (data.formattedAddress === -1) {
                    data.formattedAddress = null;
                    data.isLoading = true;
                }

                if (this.params.viewMap && this.canBeDisplayedOnMap()) {
                    data.viewMap = true;

                    data.viewMapLink = '#AddressMap/view/' +
                        this.model.entityType + '/' +
                        this.model.id + '/' +
                        this.name;
                }
            }

            if (this.isEditMode()) {
                data.streetMaxLength = this.streetMaxLength;
                data.cityMaxLength = this.cityMaxLength;
                data.districtMaxLength = this.districtMaxLength;
                data.wardMaxLength = this.wardMaxLength;
                data.cityOptions = AdminUnit.getCityList();
                console.log(data.cityOptions);
                data.districtOptions = AdminUnit.getDistrictListOfCity(data.cityValue);
                console.log(data.districtOptions);
                data.wardOptions = AdminUnit.getWardListOfDistrict(data.cityValue, data.districtValue);
                console.log(data.wardOptions);
            }

            return data;
        },

        setupSearch: function () {
            this.searchData.value = this.getSearchParamsData().value || this.searchParams.additionalValue;
        },

        canBeDisplayedOnMap: function () {
            return !!this.model.get(this.name + 'City');
        },

        getFormattedAddress: function () {
            var isNotEmpty = false;
            var isSet = false;

            this.addressAttributeList.forEach(attribute => {
                isNotEmpty = isNotEmpty || this.model.get(attribute);
                isSet = isSet || this.model.has(attribute);
            });

            var isEmpty = !isNotEmpty;

            if (isEmpty) {
                if (this.mode === this.MODE_LIST) {
                    return '';
                }

                if (!isSet) {
                    return -1;
                }

                return null;
            }

            var methodName = 'getFormattedAddress' + this.getAddressFormat().toString();

            if (methodName in this) {
                return this[methodName]();
            }
        },

        getFormattedAddress1: function () {
            var streetValue = this.model.get(this.streetField);
            var cityValue = this.model.get(this.cityField);
            var districtValue = this.model.get(this.districtField);
            var wardValue = this.model.get(this.wardField);

            var html = '';

            if (streetValue) {
                html += streetValue;
            }

            if (cityValue || districtValue || wardValue) {
                if (html !== '') {
                    html += '\n';
                }

                if (cityValue) {
                    html += cityValue;
                }

                if (districtValue) {
                    if (cityValue) {
                        html += ', ';
                    }
                    html += districtValue;
                }

                if (wardValue) {
                    if (cityValue || stateValue) {
                        html += ' ';
                    }
                    html += wardValue;
                }
            }

            return html;
        },

        _getTemplateName: function () {
            if (this.mode === this.MODE_EDIT) {
                var prop = 'editTemplate' + this.getAddressFormat().toString();

                if (prop in this) {
                    return this[prop];
                }
            }

            return Dep.prototype._getTemplateName.call(this);
        },

        getAddressFormat: function () {
            return this.getConfig().get('addressFormat') || 1;
        },

        afterRender: function () {
            if (this.mode === this.MODE_EDIT) {
                this.$street = this.$el.find('[data-name="' + this.streetField + '"]');
                this.$city = this.$el.find('[data-name="' + this.cityField + '"]');
                this.$district = this.$el.find('[data-name="' + this.districtField + '"]');
                this.$ward = this.$el.find('[data-name="' + this.wardField + '"]');

                this.$street.on('change', () => {
                    this.trigger('change');
                });


                this.$city.on('change', () => {
                    this.trigger('change');
                });

                this.$district.on('change', () => {
                    this.trigger('change');
                });

                this.$ward.on('change', () => {
                    this.trigger('change');
                });





                this.controlStreetTextareaHeight();

                this.$street.on('input', () => {
                    this.controlStreetTextareaHeight();
                });
            }
        },

        controlStreetTextareaHeight: function (lastHeight) {
            var scrollHeight = this.$street.prop('scrollHeight');
            var clientHeight = this.$street.prop('clientHeight');

            if (typeof lastHeight === 'undefined' && clientHeight === 0) {
                setTimeout(this.controlStreetTextareaHeight.bind(this), 10);

                return;
            }

            if (clientHeight === lastHeight) return;

            if (scrollHeight > clientHeight + 1) {
                var rows = this.$street.prop('rows');
                this.$street.attr('rows', rows + 1);

                this.controlStreetTextareaHeight(clientHeight);
            }

            if (this.$street.val().length === 0) {
                this.$street.attr('rows', 1);
            }
        },

        setup: function () {
            Dep.prototype.setup.call(this);

            var actualAttributePartList = this.getMetadata().get(['fields', this.type, 'actualFields']) || [];
            this.addressAttributeList = [];
            this.addressPartList = [];

            actualAttributePartList.forEach(item => {
                var attribute = this.name + Espo.Utils.upperCaseFirst(item);

                this.addressAttributeList.push(attribute);
                this.addressPartList.push(item);

                this[item + 'Field'] = attribute;

                this[item + 'MaxLength'] =
                    this.getMetadata().get(['entityDefs', this.model.name, 'fields', attribute, 'maxLength']);
            });
        },

        validateRequired: function () {
            var validate = name => {
                if (this.model.isRequired(name)) {
                    if (this.model.get(name) === '') {
                        var msg = this.translate('fieldIsRequired', 'messages')
                            .replace('{field}', this.translate(name, 'fields', this.model.name));

                        this.showValidationMessage(msg, '[data-name="' + name + '"]');

                        return true;
                    }
                }
            };

            var result = false;

            result = validate(this.streetField) || result;
            result = validate(this.cityField) || result;
            result = validate(this.districtField) || result;
            result = validate(this.wardField) || result;

            return result;
        },

        isRequired: function () {
            return this.model.getFieldParam(this.streetField, 'required') ||
                this.model.getFieldParam(this.cityField, 'required') ||
                this.model.getFieldParam(this.districtField, 'required') ||
                this.model.getFieldParam(this.wardField, 'required');
        },

        validatePattern: function () {
            let fieldList = [
                this.cityField,
                this.districtField,
                this.wardField,
            ];

            let result = false;

            for (let field of fieldList) {
                result = Varchar.prototype.fieldValidatePattern.call(this, field) || result;
            }

            return result;
        },

        fetch: function () {
            var data = {};

            console.log('streetField')
            data[this.streetField] = this.$street.val().toString().trim();
            console.log('cityField')
            data[this.cityField] = this.$city.val().toString().trim();
            console.log('districtField')
            data[this.districtField] = this.$district.val().toString().trim();
            console.log('wardField')
            data[this.wardField] = this.$ward.val().toString().trim();
            console.log('all field')

            let attributeList = [
                this.streetField,
                this.cityField,
                this.districtField,
                this.wardField,
            ];

            attributeList.forEach(attribute => {
                if (data[attribute] === '') {
                    data[attribute] = null;
                }
            });

            return data;
        },

        fetchSearch: function () {
            var value = this.$el.find('input.main-element')
                .val()
                .toString()
                .trim();

            if (value) {
                var data = {
                    type: 'or',
                    value: [{
                            type: 'like',
                            field: this.streetField,
                            value: value + '%'
                        },
                        {
                            type: 'like',
                            field: this.cityField,
                            value: value + '%'
                        },
                        {
                            type: 'like',
                            field: this.districtField,
                            value: value + '%'
                        },
                        {
                            type: 'like',
                            field: this.wardField,
                            value: value + '%'
                        }
                    ],
                    data: {
                        value: value
                    }
                };

                return data;
            }

            return false;
        },

        viewMapAction: function () {
            this.createView('mapDialog', 'views/modals/view-map', {
                model: this.model,
                field: this.name,
            }, view => view.render());
        },
    });
});
