System.register(['angular2/core', 'angular2/common', './lang.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, lang_service_1;
    var PropertyElementComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            }],
        execute: function() {
            PropertyElementComponent = (function () {
                function PropertyElementComponent(_langService) {
                    this._langService = _langService;
                    this.pushdata = new core_1.EventEmitter();
                    this.validated = new core_1.EventEmitter();
                    this.sendData = new core_1.EventEmitter();
                }
                PropertyElementComponent.prototype.setData = function () {
                    if (this.jsonValue &&
                        this.jsonValue !== '')
                        this.sendData.next(this.jsonValue);
                    else
                        this.sendData.next(null);
                };
                PropertyElementComponent.prototype.ngOnInit = function () {
                    this.jsonValue = {};
                    this.setData();
                };
                PropertyElementComponent = __decorate([
                    core_1.Component({
                        selector: 'property-element',
                        templateUrl: 'templates/property-element.html',
                        inputs: ['section', 'sectionTitle', 'sectionParent'],
                        outputs: ['sendData'],
                        directives: [
                            common_1.NgClass,
                            PropertyElementComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService])
                ], PropertyElementComponent);
                return PropertyElementComponent;
            }());
            exports_1("PropertyElementComponent", PropertyElementComponent);
        }
    }
});
