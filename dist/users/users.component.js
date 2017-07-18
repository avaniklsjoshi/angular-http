"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/services/user.service");
var UsersComponent = (function () {
    function UsersComponent(service) {
        this.service = service;
        this.successMessage = '';
        this.errorMessage = '';
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.userCreated$.subscribe(function (user) {
            _this.successMessage = user.name + " has been created";
            _this.clearMessages();
        });
        this.service.userDeleted$.subscribe(function (user) {
            _this.successMessage = "the user has been Deleted";
            _this.clearMessages();
        });
    };
    /**
     * Clear all messages after 5  secs
     */
    UsersComponent.prototype.clearMessages = function () {
        var _this = this;
        setTimeout(function () {
            _this.successMessage = '';
            _this.errorMessage = '';
        }, 5000);
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'my-users',
            templateUrl: './app/users/users.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map