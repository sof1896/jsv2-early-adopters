/**
 * Initialize facets
 */
klevu.extend({
    facets: function (mainScope) {
        if (!mainScope.facets) {
            mainScope.facets = {};
        }
        mainScope.facets.base = {
            attachFacetItemsClickEvent: function () {
                var target = klevu.getSetting(mainScope.settings, "settings.search.searchBoxTarget");
                klevu.each(klevu.dom.find(".klevuFilterOption", target), function (key, value) {
                    klevu.event.attach(value, "click", function (event) {
                        event = event || window.event;
                        event.preventDefault();

                        var parentElem = klevu.dom.helpers.getClosest(this, ".klevuFilter");
                        if (parentElem !== null && (parentElem.dataset.singleselect === 'true') && !this.classList.contains("klevuFilterOptionActive")) {
                            var listSingleSelect = klevu.dom.find(".klevuFilterOptionActive", parentElem);
                            klevu.each(listSingleSelect, function (key, value) {
                                value.classList.remove("klevuFilterOptionActive");
                            });
                        }
                        this.classList.toggle("klevuFilterOptionActive");

                        //getScope
                        var target = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                        if (target === null) {
                            return;
                        }

                        var scope = target.kElem;
                        scope.kScope.data = scope.kObject.resetData(scope.kElem);
                        scope.kScope.data.context.keyCode = 0;
                        scope.kScope.data.context.eventObject = event;
                        scope.kScope.data.context.event = "keyUp";
                        scope.kScope.data.context.preventDefault = false;

                        //override local variables

                        var options = klevu.dom.helpers.getClosest(this, ".klevuMeta");
                        if (options === null) {
                            return;
                        }
                        //calculate new filters
                        //getAllActiveFilters
                        var listActive = klevu.dom.find(".klevuFilterOptionActive", options);
                        if (listActive.length > 0) {
                            var filterList = [];
                            klevu.each(listActive, function (key, value) {
                                var filter = klevu.dom.helpers.getClosest(value, ".klevuFilter");

                                if (filter !== null) {
                                    var objectToChange = filterList.filter(function (element) {
                                        return element.key == filter.dataset.filter
                                    });
                                    if (objectToChange.length === 0) {
                                        filterList.push({
                                            key: filter.dataset.filter,
                                            settings: {
                                                singleSelect: (klevu.isUndefined(filter.dataset.singleselect) ? false : filter.dataset.singleselect)
                                            },
                                            values: [(klevu.isUndefined(value.dataset.value) ? false : value.dataset.value)]
                                        });
                                    } else {
                                        objectToChange[0].values.push((klevu.isUndefined(value.dataset.value) ? false : value.dataset.value));
                                    }
                                }
                            });
                            klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + options.dataset.section + ".filters.applyFilters.filters", filterList);
                        } else {
                            klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + options.dataset.section + ".filters.applyFilters", {});
                        }
                        //reset offset after filter change
                        klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + options.dataset.section + ".settings.offset", 0);
                        klevu.event.fireChain(scope.kScope, "chains.events.keyUp", scope, scope.kScope.data, event);
                    }, true);
                });
            }
        };
    }
});