webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account works!\n</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var user = this.tokenService.currentUserData;
        var link = ['/users', user.id];
        this.router.navigate(link);
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_token__["Angular2TokenService"]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/album/album-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"ui four stackable cards\">\n    <div class=\"card\" *ngFor='let album of albums'>\n      <a (click)=\"goToShow(album)\">\n        <div class=\"nim-dialog--photo\">\n          <div class=\"nim-peer _online _im_peer_online\">\n            <div class=\"nim-peer--photo-w\">\n              <div class=\"nim-peer--photo _im_dialog_photo\">\n                <div class=\"image_grid\" *ngFor='let photo of album.sample_photos'>\n                  <div class=\"dialogs_inline_chatter \" style=\"\">\n                    <img class=\"dialogs_inline_chatter \"\n                         src=\"/{{ photo.file.small_thumb.url }}\"\n                         width=\"100\" height=\"100\" alt=\"Photo\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <h3 class=\"card-title\">{{ album.title }}</h3>\n          <p>\n            <small>Last Updated: {{ album.updated_at | date:'medium' }}</small>\n          </p>\n          <p class=\"card-text\">{{ album.description }}</p>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/album/album-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album_service__ = __webpack_require__("../../../../../src/app/album/album.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumListComponent = (function () {
    function AlbumListComponent(albumService, router) {
        this.albumService = albumService;
        this.router = router;
    }
    AlbumListComponent.prototype.ngOnInit = function () {
        this.getAlbums();
    };
    AlbumListComponent.prototype.getAlbums = function () {
        var _this = this;
        this.albumService.getAlbums()
            .subscribe(function (albums) { return _this.albums = albums; });
    };
    AlbumListComponent.prototype.goToShow = function (album) {
        var link = ['/albums', album.id];
        this.router.navigate(link);
    };
    return AlbumListComponent;
}());
AlbumListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'album-list',
        template: __webpack_require__("../../../../../src/app/album/album-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/album/album.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__album_service__["a" /* AlbumService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AlbumListComponent);

var _a, _b;
//# sourceMappingURL=album-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/album/album-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-3 align-center\">Create a New Album</h1>\n    <p class=\"lead align-center\">What album or Idea for an App would you like to work on?</p>\n  </div>\n</div>\n\n<div class=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\n      <form (ngSubmit)=\"createAlbum(album); albumForm.reset()\" #albumForm='ngForm'>\n        <div class=\"form-group\">\n          <label for=\"album-title\">\n            <h3>What is your album about?\n            </h3>\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"album-title\" placeholder=\"e.g Build a Website\"\n                 required\n                 name=\"title\"\n                 #title='ngModel'\n                 [(ngModel)]='album.title'\n          >\n          <div [hidden]=\"title.valid ||   title.pristine\"\n               class=\"alert alert-danger\">\n            Name of album is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"album-description\"><h3>Describe your album</h3></label>\n          <textarea class=\"form-control\" id=\"album-description\" required\n                    name=\"description\"\n                    #description='ngModel'\n                    [(ngModel)]='album.description'\n                    rows=\"3\">\n          </textarea>\n          <div [hidden]=\"description.valid || description.pristine\"\n               class=\"alert alert-danger\">\n            Description of your album is important.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label><h3>Tags of album</h3></label>\n          <select2 [data]=\"tagsData | async\" id=\"album-tags\" [value]=\"selectedTags\" (valueChanged)=\"changedTags($event)\" [options]=\"optionsSelectTags\" class=\"form-control\" [width]=\"300\"></select2>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!albumForm.form.valid\"\n                [hidden]=\"submitted\">\n          Post Album\n        </button>\n\n        <!-- Stay hidden until submitted -->\n        <div [hidden]=\"!submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          Your Album has been successfully created. <a class=\"alert-link\" routerLink=\"/albums\"> View all Albums </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/album/album-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album__ = __webpack_require__("../../../../../src/app/album/album.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_service__ = __webpack_require__("../../../../../src/app/album/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tag_tag_service__ = __webpack_require__("../../../../../src/app/tag/tag.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumNewComponent = (function () {
    function AlbumNewComponent(albumService, tagService) {
        this.albumService = albumService;
        this.tagService = tagService;
        this.album = new __WEBPACK_IMPORTED_MODULE_2__album__["a" /* Album */];
        this.submitted = false; //check if the form is submitted
    }
    AlbumNewComponent.prototype.ngOnInit = function () {
        this.tagsData = this.tagService.getTagList();
        this.optionsSelectTags = {
            multiple: true,
            tags: true,
            closeOnSelect: false,
            tokenSeparators: [','],
        };
        this.selectedTags = [];
    };
    AlbumNewComponent.prototype.createAlbum = function (album) {
        var _this = this;
        this.albumService.createAlbum(album)
            .subscribe(function (data) {
            _this.submitted = true;
            return true;
        }, function (error) {
            console.log("Error creating album");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error);
        });
    };
    AlbumNewComponent.prototype.changedTags = function (data) {
        this.album.tag_list = data.value.map(function (name) { return ({ name: name }); });
    };
    return AlbumNewComponent;
}());
AlbumNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'album-new',
        template: __webpack_require__("../../../../../src/app/album/album-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/album/album.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__album_service__["a" /* AlbumService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__tag_tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tag_tag_service__["a" /* TagService */]) === "function" && _b || Object])
], AlbumNewComponent);

var _a, _b;
//# sourceMappingURL=album-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/album/album-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album_list_component__ = __webpack_require__("../../../../../src/app/album/album-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_show_component__ = __webpack_require__("../../../../../src/app/album/album-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__album_new_component__ = __webpack_require__("../../../../../src/app/album/album-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_logged_in_guard_service__ = __webpack_require__("../../../../../src/app/authentication/logged-in-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photo_photo_new_component__ = __webpack_require__("../../../../../src/app/album/photo/photo-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__photo_photo_show_component__ = __webpack_require__("../../../../../src/app/album/photo/photo-show.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__album_list_component__["a" /* AlbumListComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__album_new_component__["a" /* AlbumNewComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__album_show_component__["a" /* AlbumShowComponent */] },
    { path: ':album_id/photos/new', component: __WEBPACK_IMPORTED_MODULE_6__photo_photo_new_component__["a" /* PhotoNewComponent */] },
    { path: ':album_id/photos/:id', component: __WEBPACK_IMPORTED_MODULE_7__photo_photo_show_component__["a" /* PhotoShowComponent */] },
];
var AlbumRoutingModule = (function () {
    function AlbumRoutingModule() {
    }
    return AlbumRoutingModule;
}());
AlbumRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: 'albums',
                    canActivate: [__WEBPACK_IMPORTED_MODULE_5__authentication_logged_in_guard_service__["a" /* LoggedInGuard */]],
                    children: routes
                }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        providers: []
    })
], AlbumRoutingModule);

//# sourceMappingURL=album-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/album/album-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"album\">\n  <h2>\n    {{ album.title }}\n  </h2>\n  <p>{{ album.id }}</p>\n  <p>{{ album.description }}</p>\n\n  <button type=\"button\" (click)=\"deleteAlbum(album)\" class=\"btn btn-danger\" [hidden]=\"!album.can_delete\">Delete</button>\n  <button type=\"button\" (click)=\"editAlbum(album)\" class=\"btn btn-primary\" [hidden]=\"!album.can_update\">Edit</button>\n  <button type=\"button\" (click)=\"addPhoto(album)\" class=\"btn btn-info\" [hidden]=\"!album.can_add_photo\">Add Photo</button>\n\n\n  <div class=\"row\" [hidden]=\"!editBtnClicked\">\n    <div class=\"col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\n      <form #albumForm='ngForm'>\n        <div class=\"form-group\">\n          <label for=\"album-title\">\n            <h3>What is your album about?\n            </h3>\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"album-title\" placeholder=\"e.g Build a Website\"\n                 required\n                 name=\"title\"\n                 #title='ngModel'\n                 [(ngModel)]='album.title'\n          >\n          <div [hidden]=\"title.valid ||   title.pristine\"\n               class=\"alert alert-danger\">\n            Name of album is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"album-description\"><h3>Describe your album</h3></label>\n          <textarea class=\"form-control\" id=\"album-description\" required\n                    name=\"description\"\n                    #description='ngModel'\n                    [(ngModel)]='album.description'\n                    rows=\"3\">\n          </textarea>\n          <div [hidden]=\"description.valid || description.pristine\"\n               class=\"alert alert-danger\">\n            Description of your album is important.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label><h3>Tags of album</h3></label>\n          <select2 [data]=\"tagsData | async\" id=\"album-tags\" [value]=\"selectedTags | async\"\n                   (valueChanged)=\"changedTags($event)\" [options]=\"optionsTagsSelect\" class=\"form-control\"\n                   [width]=\"300\"></select2>\n        </div>\n\n        <button type=\"submit\" (click)=\"updateAlbum(album); onUpdateClicked()\" class=\"btn btn-primary\"\n                [disabled]=\"!albumForm.form.valid\">\n          Update Album\n        </button>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"ui four stackable cards photo-list\">\n    <div class=\"card\" *ngFor='let photo of photos'>\n      <a (click)=\"goToShowPhoto(photo)\">\n        <div class=\"photo\">\n          <img class=\"card-img-top\" src=\"/{{photo.file.small_thumb.url}}\" alt=\"Photo\"\n               style=\"max-width: 100px; max-height: 100px\">\n        </div>\n        <div class=\"card-block\">\n          <p class=\"card-text\">{{ photo.description }}</p>\n          <p>\n            <small>Last Updated: {{ photo.updated_at | date:'medium' }}</small>\n          </p>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/album/album-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album__ = __webpack_require__("../../../../../src/app/album/album.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__album_service__ = __webpack_require__("../../../../../src/app/album/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_tag_service__ = __webpack_require__("../../../../../src/app/tag/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photo_photo_service__ = __webpack_require__("../../../../../src/app/album/photo/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_album_photo_photo_modal_component__ = __webpack_require__("../../../../../src/app/album/photo/photo-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AlbumShowComponent = (function () {
    function AlbumShowComponent(route, router, albumService, photoService, tagService, dialogService) {
        this.route = route;
        this.router = router;
        this.albumService = albumService;
        this.photoService = photoService;
        this.tagService = tagService;
        this.dialogService = dialogService;
        this.editBtnClicked = false;
    }
    AlbumShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/albums';
        this.routeId = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.getPhotos();
        });
        var albumRequest = this.route.params
            .flatMap(function (params) {
            return _this.albumService.getAlbum(+params['id']);
        });
        albumRequest.subscribe(function (response) {
            _this.album = response.json();
        });
        this.tagsData = this.tagService.getTagList();
        this.selectedTags = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (obs) {
            _this.tagsData.subscribe(function () {
                obs.next(_this.album.tag_list);
                obs.complete();
            });
        });
        this.optionsTagsSelect = {
            multiple: true,
            tags: true,
            closeOnSelect: false,
            tokenSeparators: [','],
        };
    };
    AlbumShowComponent.prototype.getPhotos = function () {
        var _this = this;
        this.photoService.getPhotos(this.id)
            .subscribe(function (photos) { return _this.photos = photos; });
    };
    AlbumShowComponent.prototype.deleteAlbum = function (album) {
        var _this = this;
        this.albumService.deleteAlbum(this.album.id)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) { return _this.errorMessage = error; });
    };
    AlbumShowComponent.prototype.editAlbum = function (album) {
        this.editBtnClicked = true;
    };
    AlbumShowComponent.prototype.addPhoto = function (album) {
        var link = ['/albums', album.id, 'photos', 'new'];
        this.router.navigate(link);
    };
    AlbumShowComponent.prototype.updateAlbum = function (album) {
        this.albumService.updateAlbum(album)
            .subscribe(function (data) {
            return true;
        }, function (error) {
            console.log("Error Editing Album");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
        });
    };
    AlbumShowComponent.prototype.goToShowPhoto = function (photo) {
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_7_app_album_photo_photo_modal_component__["a" /* PhotoModalComponent */], { photo: photo }, { backdropColor: 'rgba(0, 0, 0, 0.7)', closeByClickingOutside: true });
    };
    AlbumShowComponent.prototype.onUpdateClicked = function () {
        //this.router.navigate([this.returnUrl]);
        this.editBtnClicked = false;
        // window.location.reload();
    };
    AlbumShowComponent.prototype.changedTags = function (data) {
        this.album.tag_list = data.value.map(function (name) { return ({ name: name }); });
    };
    return AlbumShowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__album__["a" /* Album */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__album__["a" /* Album */]) === "function" && _a || Object)
], AlbumShowComponent.prototype, "album", void 0);
AlbumShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'album-show',
        template: __webpack_require__("../../../../../src/app/album/album-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/album/album.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__album_service__["a" /* AlbumService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__photo_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__photo_photo_service__["a" /* PhotoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tag_tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_tag_service__["a" /* TagService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__["DialogService"]) === "function" && _g || Object])
], AlbumShowComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=album-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/album/album.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".album-list {\n  border: 1px solid black;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding: 5px;\n}\n.form-group select2 {\n  padding: 0;\n  border: none;\n}\n.photo-list {\n  margin-top: 10px;\n}\n.photo-list .photo {\n  text-align: center;\n}\n\n\n.image_grid {\n  display: block;\n  float: left;\n}\n.nim-peer .nim-peer--photo {\n  background-color: inherit;\n  overflow: hidden;\n  margin-left: -2px;\n  margin-bottom: -1px;\n}\n\n.nim-peer .nim-peer--photo-w {\n  overflow: hidden;\n  border-radius: 50%;\n}\n.nim-peer {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  border-color: inherit;\n  background-color: inherit;\n  margin: 10px auto;\n}\n.nim-dialog .nim-dialog--photo {\n  border-color: #fff;\n  padding: 9px 7px 8px 0;\n  float: left;\n}\n.nim-peer .image_grid>.dialogs_inline_chatter {\n  overflow: hidden;\n  width: 100px;\n  height: 99.5px;\n  margin-left: 1px;\n  margin-bottom: 1px;\n}\n.nim-dialog.nim-dialog_classic .nim-dialog--photo .nim-peer .image_grid>.dialogs_inline_chatter img {\n  margin-left: -11.5px;\n  margin-top: -12.5px;\n  width: 200px;\n  height: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/album/album.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_routing_module__ = __webpack_require__("../../../../../src/app/album/album-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__album_list_component__ = __webpack_require__("../../../../../src/app/album/album-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__album_new_component__ = __webpack_require__("../../../../../src/app/album/album-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__album_show_component__ = __webpack_require__("../../../../../src/app/album/album-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__album_service__ = __webpack_require__("../../../../../src/app/album/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tag_tag_service__ = __webpack_require__("../../../../../src/app/tag/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_select2__ = __webpack_require__("../../../../ng2-select2/ng2-select2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_select2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_select2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__photo_photo_new_component__ = __webpack_require__("../../../../../src/app/album/photo/photo-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__photo_photo_show_component__ = __webpack_require__("../../../../../src/app/album/photo/photo-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__photo_photo_service__ = __webpack_require__("../../../../../src/app/album/photo/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__photo_comments_comment_service__ = __webpack_require__("../../../../../src/app/album/photo/comments/comment.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AlbumModule = (function () {
    function AlbumModule() {
    }
    return AlbumModule;
}());
AlbumModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__album_routing_module__["a" /* AlbumRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_select2__["Select2Module"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__album_list_component__["a" /* AlbumListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__album_new_component__["a" /* AlbumNewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__album_show_component__["a" /* AlbumShowComponent */],
            __WEBPACK_IMPORTED_MODULE_12__photo_photo_new_component__["a" /* PhotoNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__photo_photo_show_component__["a" /* PhotoShowComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_10__tag_tag_service__["a" /* TagService */],
            __WEBPACK_IMPORTED_MODULE_14__photo_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_15__photo_comments_comment_service__["a" /* CommentService */]
        ]
    })
], AlbumModule);

//# sourceMappingURL=album.module.js.map

/***/ }),

/***/ "../../../../../src/app/album/album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumService = (function () {
    function AlbumService(tokenService) {
        this.tokenService = tokenService;
        this.albumsUrl = 'albums';
        this.usersUrl = 'users';
    }
    AlbumService.prototype.getAlbums = function () {
        return this.tokenService.get(this.albumsUrl)
            .map(function (response) { return response.json(); });
    };
    AlbumService.prototype.getUserAlbums = function (user_id) {
        return this.tokenService.get(this.usersUrl + "/" + user_id + "/" + this.albumsUrl)
            .map(function (response) { return response.json(); });
    };
    AlbumService.prototype.getAlbum = function (id) {
        return this.tokenService.get(this.albumsUrl + "/" + id + '.json');
    };
    AlbumService.prototype.createAlbum = function (album) {
        return this.tokenService.post(this.albumsUrl, JSON.stringify(album)).map(function (res) { return res.json(); });
    };
    AlbumService.prototype.deleteAlbum = function (id) {
        var url = this.albumsUrl + "/" + id;
        return this.tokenService.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AlbumService.prototype.updateAlbum = function (album) {
        var url = this.albumsUrl + "/" + album.id;
        return this.tokenService.put(url, JSON.stringify(album)).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AlbumService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AlbumService;
}());
AlbumService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"]) === "function" && _a || Object])
], AlbumService);

var _a;
//# sourceMappingURL=album.service.js.map

/***/ }),

/***/ "../../../../../src/app/album/album.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = (function () {
    function Album(id, title, description, tag_list, sample_photos, created_at, updated_at, can_update, can_delete, can_add_photo) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tag_list = tag_list;
        this.sample_photos = sample_photos;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.can_update = can_update;
        this.can_delete = can_delete;
        this.can_add_photo = can_add_photo;
    }
    return Album;
}());

//# sourceMappingURL=album.js.map

/***/ }),

/***/ "../../../../../src/app/album/photo/MyFileUploader.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFileUploader; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MyFileUploader = (function (_super) {
    __extends(MyFileUploader, _super);
    function MyFileUploader(tokenService, cookieService) {
        var _this = _super.call(this, {}) || this;
        _this.tokenService = tokenService;
        _this.cookieService = cookieService;
        return _this;
    }
    MyFileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        this._uploadedObserver.next(response);
        this.setAuthData(headers);
        return _super.prototype.onCompleteItem.call(this, item, response, status, headers);
    };
    MyFileUploader.prototype.onCompleteAll = function () {
        this._uploadedObserver.complete();
        return _super.prototype.onCompleteAll.call(this);
    };
    MyFileUploader.prototype.upload = function (url, data) {
        var _this = this;
        var options = {
            url: url,
            headers: this.getAuthHeaders(),
            additionalParameter: data,
        };
        this.setOptions(options);
        this.uploadAll();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._uploadedObserver = observer;
        });
    };
    MyFileUploader.prototype.getAuthHeaders = function () {
        var authHeaders = [];
        this.tokenService.currentAuthHeaders.forEach(function (value, name) {
            authHeaders.push({ name: name, value: value[0] });
        });
        authHeaders.push({ name: 'X-XSRF-TOKEN', value: this.cookieService.get('XSRF-TOKEN') });
        return authHeaders;
    };
    MyFileUploader.prototype.setAuthData = function (headers) {
        var authHeaders = {
            accessToken: headers['access-token'],
            client: headers['client'],
            expiry: headers['expiry'],
            tokenType: headers['token-type'],
            uid: headers['uid']
        };
        this.tokenService["setAuthData"](authHeaders);
    };
    return MyFileUploader;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_file_upload__["FileUploader"]));

//# sourceMappingURL=MyFileUploader.class.js.map

/***/ }),

/***/ "../../../../../src/app/album/photo/comments/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = (function () {
    function CommentService(tokenService) {
        this.tokenService = tokenService;
        this.albumUrl = 'albums';
        this.photosUrl = 'photos';
        this.commentsUrl = 'comments';
    }
    CommentService.prototype.getComments = function (photo) {
        return this.tokenService.get(this.albumUrl + "/" + photo.album_id + "/" + this.photosUrl + "/" + photo.id + "/" + this.commentsUrl)
            .map(function (response) { return response.json(); });
    };
    CommentService.prototype.getComment = function (id) {
        return this.tokenService.get(this.commentsUrl + "/" + id + '.json');
    };
    CommentService.prototype.createComment = function (comment) {
        return this.tokenService.post(this.albumUrl + "/" + comment.photo.album_id + "/" + this.photosUrl + "/" + comment.photo.id + "/" + this.commentsUrl, JSON.stringify(comment)).map(function (res) { return res.json(); });
    };
    CommentService.prototype.deleteComment = function (photo, id) {
        var url = this.albumUrl + "/" + photo.album_id + "/" + this.photosUrl + "/" + photo.id + "/" + this.commentsUrl + "/" + id;
        return this.tokenService.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.updateComment = function (comment) {
        var url = this.albumUrl + "/" + comment.photo.album_id + "/" + this.photosUrl + "/" + comment.photo.id + "/" + this.commentsUrl + "/" + comment.id;
        return this.tokenService.put(url, JSON.stringify(comment)).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CommentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CommentService;
}());
CommentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/album/photo/comments/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(id, user, user_id, photo, photo_id, text, created_at, updated_at) {
        this.id = id;
        this.user = user;
        this.user_id = user_id;
        this.photo = photo;
        this.photo_id = photo_id;
        this.text = text;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/album/photo/photo-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"photo-modal-wrapper\">\n  <div class=\"photo-modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"photo-modal-body\">\n        <div class=\"photo-img-wrapper\">\n          <img class=\"photo-img\" src=\"/{{photo.file.url}}\" alt=\"Photo\"></div>\n        <div class=\"right-block\">\n          <div class=\"photo-user\">\n            <a (click)=\"goToUser(photo.user)\">\n              <span class=\"photo-user-img-wrapper\"><img class=\"photo-user-img\" src=\"{{photo.user.image}}\"\n                                                        alt=\"User\"></span>\n              <span class=\"photo-user-name\">{{photo.user.first_name }} {{ photo.user.last_name }}</span></a>\n          </div>\n          <div class=\"photo-time\"><span>{{ photo.created_at | timeAgo }}</span></div>\n        </div>\n        <div class=\"right-block-bottom\">\n          <div class=\"right-block-bottom-content\">\n            <div class=\"photo-description\">{{photo.description }}</div>\n            <div class=\"media comment\" *ngFor='let comment of comments'>\n              <img class=\"d-flex mr-3 comment-user-img\"\n                   src=\"{{ comment.user.image }}\"\n                   alt=\"Photo\">\n              <div class=\"media-body\">\n                <h5 class=\"mt-0\">{{ comment.user.first_name }} {{ comment.user.last_name }}\n                  <small>{{ comment.created_at | date:'medium' }}</small>\n                  <button [hidden]=\"!comment.can_delete\" type=\"button\" (click)=\"deleteComment(comment)\"\n                          class=\"btn btn-danger btn-sm\" aria-label=\"Delete\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </h5>\n                {{ comment.text }}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"comment-add-form\">\n            <form (ngSubmit)=\"createComment(comment); commentForm.reset()\" #commentForm='ngForm'>\n            <textarea class=\"form-control\" id=\"comment-text\" required\n                      name=\"description\"\n                      #description='ngModel'\n                      [(ngModel)]='comment.text'\n                      rows=\"3\">\n          </textarea>\n\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!commentForm.form.valid\"\n                      [hidden]=\"submitted\">></button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/album/photo/photo-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_comment_service__ = __webpack_require__("../../../../../src/app/album/photo/comments/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_comment__ = __webpack_require__("../../../../../src/app/album/photo/comments/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoModalComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotoModalComponent = (function (_super) {
    __extends(PhotoModalComponent, _super);
    function PhotoModalComponent(dialogService, commentService, tokenService, router) {
        var _this = _super.call(this, dialogService) || this;
        _this.commentService = commentService;
        _this.tokenService = tokenService;
        _this.router = router;
        _this.comment = new __WEBPACK_IMPORTED_MODULE_3__comments_comment__["a" /* Comment */];
        _this.submitted = false;
        return _this;
    }
    PhotoModalComponent.prototype.ngOnInit = function () {
        this.getComments();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('modal-open');
    };
    PhotoModalComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('modal-open'); //remove the class
    };
    PhotoModalComponent.prototype.goToUser = function (user) {
        var link = ['/users', user.id];
        this.dialogService.removeAll();
        this.router.navigate(link);
    };
    PhotoModalComponent.prototype.getComments = function () {
        var _this = this;
        this.commentService.getComments(this.photo)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    PhotoModalComponent.prototype.createComment = function (comment) {
        var _this = this;
        this.submitted = true;
        comment.photo = this.photo;
        comment.photo_id = this.photo.id;
        this.commentService.createComment(comment)
            .subscribe(function (data) {
            _this.getComments();
            _this.comment = new __WEBPACK_IMPORTED_MODULE_3__comments_comment__["a" /* Comment */];
            _this.submitted = false;
            return true;
        }, function (error) {
            console.log("Error creating comment");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    PhotoModalComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        this.commentService.deleteComment(this.photo, comment.id)
            .subscribe(function (data) {
            _this.getComments();
            return true;
        }, function (error) { return _this.errorMessage = error; });
    };
    return PhotoModalComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
PhotoModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirm',
        template: __webpack_require__("../../../../../src/app/album/photo/photo-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/album/photo/photo-modal.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__comments_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__comments_comment_service__["a" /* CommentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_token__["Angular2TokenService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PhotoModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=photo-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/album/photo/photo-modal.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo-modal-wrapper {\n  padding: 0 40px;\n  pointer-events: none;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100%;\n  overflow: auto;\n  width: auto;\n  z-index: 1;\n}\n\n.photo-modal-dialog {\n  margin: auto;\n  max-width: 935px;\n  pointer-events: auto;\n  width: 100%;\n  position: relative;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  background-color: #fff;\n  padding: 5px;\n  border: 1px solid #e6e6e6;\n  border-radius: 3px;\n}\n\n.photo-img-wrapper {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\n.photo-img {\n  height: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 100%;\n}\n\n@media (min-width: 736px) {\n  .photo-modal-body {\n    width: 100%;\n    padding: 0 335px 0 0;\n    position: relative;\n  }\n\n  .right-block {\n    border-bottom: 1px solid #efefef;\n    height: 48px;\n    padding: 10px 5px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 335px;\n  }\n\n  .right-block-bottom {\n    bottom: 73px;\n    box-sizing: border-box;\n    position: absolute;\n    right: 0;\n    top: 48px;\n    width: 335px;\n    padding: 5px 5px 0;\n  }\n\n  .comment-add-form {\n    margin-bottom: 5px;\n  }\n}\n\n@media (max-width: 735px) {\n  .right-block-bottom {\n    padding: 0 16px;\n  }\n\n  .right-block {\n    height: 64px;\n    padding: 18px 16px;\n    border-bottom: 1px solid #efefef;\n    margin-bottom: 10px;\n  }\n\n  .comment-add-form {\n    margin-bottom: 16px;\n  }\n}\n\n.photo-description {\n  padding: 7px;\n  border-bottom: 1px solid #efefef;\n  margin-bottom: 10px;\n}\n\n.photo-user {\n  padding: 0 5px;\n  float: left;\n  height: 100%;\n}\n\n.photo-user-img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\n\n.photo-user-name {\n  margin-left: 5px;\n  font-weight: bold;\n}\n\n.photo-user a {\n  cursor: pointer;\n}\n\n.photo-time {\n  float: right;\n}\n\n.photo-time {\n  padding: 5px;\n  height: 100%\n}\n\n.photo-time span {\n  vertical-align: middle;\n  color: #999;\n}\n\n.right-block-bottom-content {\n  overflow: auto;\n  padding-bottom: 20px;\n  position: relative;\n  height: 100%;\n}\n\n.comment-add-form {\n  min-height: 68px;\n  margin-top: auto;\n  position: relative;\n}\n\n.comment-add-form textarea {\n  width: 90%;\n  float: left;\n}\n\n.comment-add-form button {\n  width: 7%;\n  min-height: 68px;\n  height: 100%;\n  margin-left: 5px;\n  padding: 0;\n  float: left;\n}\n\n.comment {\n  margin-bottom: 7px;\n  position: relative;\n  word-wrap: break-word;\n}\n\n.comment-user-img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/album/photo/photo-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-3 align-center\">Create a New Photo</h1>\n    <p class=\"lead align-center\">What photo or Idea for an App would you like to work on?</p>\n  </div>\n</div>\n\n<div class=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\n      <form (ngSubmit)=\"createPhoto(photo);\" #photoForm='ngForm'>\n\n\n\n        <div class=\"form-group\">\n          <label for=\"photo-description\"><h3>Describe your photo</h3></label>\n          <textarea class=\"form-control\" id=\"photo-description\" required\n                    name=\"description\"\n                    #description='ngModel'\n                    [(ngModel)]='photo.description'\n                    rows=\"3\">\n          </textarea>\n          <div [hidden]=\"description.valid || description.pristine\"\n               class=\"alert alert-danger\">\n            Description of your photo is important.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label><h3>Tags of photo</h3></label>\n          <select2 [data]=\"tagsData | async\" id=\"photo-tags\" [value]=\"selectedTags\" (valueChanged)=\"changedTags($event)\" [options]=\"optionsSelectTags\" class=\"form-control\" [width]=\"300\"></select2>\n        </div>\n        <div class=\"form-group\">\n          <label><h3>Photo</h3></label>\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!photoForm.form.valid\"\n                [hidden]=\"submitted\">\n          Post Photo\n        </button>\n\n        <!-- Stay hidden until submitted -->\n        <div [hidden]=\"!completed\"\n             class=\"alert alert-success\" role=\"alert\">\n          Your Photo has been successfully created. <a class=\"alert-link\" [routerLink]=\"['/albums', photo.album_id]\"> View all Photos </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/album/photo/photo-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo__ = __webpack_require__("../../../../../src/app/album/photo/photo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_service__ = __webpack_require__("../../../../../src/app/album/photo/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tag_tag_service__ = __webpack_require__("../../../../../src/app/tag/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MyFileUploader_class__ = __webpack_require__("../../../../../src/app/album/photo/MyFileUploader.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PhotoNewComponent = (function () {
    function PhotoNewComponent(route, photoService, tagService, tokenService, cookieService) {
        this.route = route;
        this.photoService = photoService;
        this.tagService = tagService;
        this.tokenService = tokenService;
        this.cookieService = cookieService;
        this.photo = new __WEBPACK_IMPORTED_MODULE_2__photo__["a" /* Photo */];
        this.submitted = false;
        this.completed = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_7__MyFileUploader_class__["a" /* MyFileUploader */](tokenService, cookieService);
    }
    PhotoNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagsData = this.tagService.getTagList();
        this.optionsSelectTags = {
            multiple: true,
            tags: true,
            closeOnSelect: false,
            tokenSeparators: [','],
        };
        this.selectedTags = [];
        this.routeId = this.route.params.subscribe(function (params) {
            _this.photo.album_id = +params['album_id'];
        });
    };
    PhotoNewComponent.prototype.createPhoto = function (photo) {
        var _this = this;
        this.submitted = true;
        var url = __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* GlobalVariable */].BASE_API_URL + "/albums/" + photo.album_id + "/photos";
        var data = {
            album_id: photo.album_id,
            description: photo.description,
            tag_list: JSON.stringify(photo.tag_list),
        };
        this.uploader.upload(url, data).subscribe(function (data) {
            console.log(data);
            _this.completed = true;
            return true;
        }, function (error) {
            console.log("Error creating photo");
            _this.submitted = false;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error);
        });
    };
    PhotoNewComponent.prototype.changedTags = function (data) {
        this.photo.tag_list = data.value.map(function (name) { return ({ name: name }); });
    };
    return PhotoNewComponent;
}());
PhotoNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'photo-new',
        template: __webpack_require__("../../../../../src/app/album/photo/photo-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/album/photo/photo.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__tag_tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tag_tag_service__["a" /* TagService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_token__["Angular2TokenService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__["CookieService"]) === "function" && _e || Object])
], PhotoNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=photo-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/album/photo/photo-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"photo\">\n  <p>\n    <img src=\"/{{photo.file.thumb.url}}\" alt=\"Photo\"\n         style=\"max-width: 500px; max-height: 500px\">\n  </p>\n  <p>{{ photo.id }}</p>\n  <p>{{ photo.description }}</p>\n\n  <button type=\"button\" (click)=\"deletePhoto(photo)\" class=\"btn btn-danger\" [hidden]=\"!photo.can_delete\">Delete</button>\n  <button type=\"button\" (click)=\"editPhoto(photo)\" class=\"btn btn-primary\" [hidden]=\"!photo.can_update\">Edit</button>\n\n\n  <div class=\"row\" [hidden]=\"!editBtnClicked\">\n    <div class=\"col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\n      <form #photoForm='ngForm'>\n        <div class=\"form-group\">\n          <label for=\"photo-description\"><h3>Describe your photo</h3></label>\n          <textarea class=\"form-control\" id=\"photo-description\" required\n                    name=\"description\"\n                    #description='ngModel'\n                    [(ngModel)]='photo.description'\n                    rows=\"3\">\n          </textarea>\n          <div [hidden]=\"description.valid || description.pristine\"\n               class=\"alert alert-danger\">\n            Description of your photo is important.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label><h3>Tags of photo</h3></label>\n          <select2 [data]=\"tagsData | async\" id=\"photo-tags\" [value]=\"selectedTags | async\"\n                   (valueChanged)=\"changedTags($event)\" [options]=\"optionsTagsSelect\" class=\"form-control\"\n                   [width]=\"300\"></select2>\n        </div>\n\n        <button type=\"submit\" (click)=\"updatePhoto(photo); onUpdateClicked()\" class=\"btn btn-primary\"\n                [disabled]=\"!photoForm.form.valid\">\n          Update Photo\n        </button>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"right-block-bottom-content\">\n    <h2>Comments</h2>\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\n        <form (ngSubmit)=\"createComment(comment); commentForm.reset()\" #commentForm='ngForm'>\n          <div class=\"form-group\">\n            <label for=\"comment-text\"><h3>Your comment text</h3></label>\n            <textarea class=\"form-control\" id=\"comment-text\" required\n                      name=\"description\"\n                      #description='ngModel'\n                      [(ngModel)]='comment.text'\n                      rows=\"3\">\n          </textarea>\n            <div [hidden]=\"description.valid || description.pristine\"\n                 class=\"alert alert-danger\">\n              Text\n            </div>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!commentForm.form.valid\"\n                  [hidden]=\"submitted\">\n            Post Comment\n          </button>\n        </form>\n      </div>\n    </div>\n    <div class=\"media comment\" *ngFor='let comment of comments'>\n      <img class=\"d-flex mr-3\"\n           src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15c0af23f95%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15c0af23f95%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.40625%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n           alt=\"Generic placeholder image\">\n      <div class=\"media-body\">\n        <h5 class=\"mt-0\">{{ comment.user.first_name }} {{ comment.user.last_name }}\n          <small>{{ comment.created_at | date:'medium' }}</small>\n          <button [hidden]=\"!comment.can_delete\" type=\"button\" (click)=\"deleteComment(comment)\" class=\"btn btn-danger btn-sm\" aria-label=\"Delete\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </h5>\n        {{ comment.text }}\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/album/photo/photo-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo__ = __webpack_require__("../../../../../src/app/album/photo/photo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photo_service__ = __webpack_require__("../../../../../src/app/album/photo/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_tag_service__ = __webpack_require__("../../../../../src/app/tag/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments_comment__ = __webpack_require__("../../../../../src/app/album/photo/comments/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comments_comment_service__ = __webpack_require__("../../../../../src/app/album/photo/comments/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PhotoShowComponent = (function () {
    function PhotoShowComponent(route, router, photoService, commentService, tagService, tokenService) {
        this.route = route;
        this.router = router;
        this.photoService = photoService;
        this.commentService = commentService;
        this.tagService = tagService;
        this.tokenService = tokenService;
        this.editBtnClicked = false;
        this.comment = new __WEBPACK_IMPORTED_MODULE_6__comments_comment__["a" /* Comment */];
        this.submitted = false;
        this.completed = false;
    }
    PhotoShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/photos';
        this.routeId = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        var photoRequest = this.route.params
            .flatMap(function (params) {
            return _this.photoService.getPhoto(+params['id']);
        });
        photoRequest.subscribe(function (response) {
            _this.photo = response.json();
            _this.getComments();
        });
        this.tagsData = this.tagService.getTagList();
        this.selectedTags = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (obs) {
            _this.tagsData.subscribe(function () {
                obs.next(_this.photo.tag_list);
                obs.complete();
            });
        });
        this.optionsTagsSelect = {
            multiple: true,
            tags: true,
            closeOnSelect: false,
            tokenSeparators: [','],
        };
    };
    PhotoShowComponent.prototype.getComments = function () {
        var _this = this;
        this.commentService.getComments(this.photo)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    PhotoShowComponent.prototype.createComment = function (comment) {
        var _this = this;
        this.submitted = true;
        comment.photo = this.photo;
        comment.photo_id = this.photo.id;
        this.commentService.createComment(comment)
            .subscribe(function (data) {
            _this.getComments();
            _this.comment = new __WEBPACK_IMPORTED_MODULE_6__comments_comment__["a" /* Comment */];
            _this.submitted = false;
            return true;
        }, function (error) {
            console.log("Error creating comment");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
        });
    };
    PhotoShowComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        this.commentService.deleteComment(this.photo, comment.id)
            .subscribe(function (data) {
            _this.getComments();
            return true;
        }, function (error) { return _this.errorMessage = error; });
    };
    PhotoShowComponent.prototype.deletePhoto = function (photo) {
        var _this = this;
        this.photoService.deletePhoto(this.photo.album_id, this.photo.id)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) { return _this.errorMessage = error; });
    };
    PhotoShowComponent.prototype.editPhoto = function (photo) {
        this.editBtnClicked = true;
    };
    PhotoShowComponent.prototype.updatePhoto = function (photo) {
        this.photoService.updatePhoto(photo)
            .subscribe(function (data) {
            return true;
        }, function (error) {
            console.log("Error Editing Photo");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
        });
    };
    PhotoShowComponent.prototype.onUpdateClicked = function () {
        //this.router.navigate([this.returnUrl]);
        this.editBtnClicked = false;
        // window.location.reload();
    };
    PhotoShowComponent.prototype.changedTags = function (data) {
        this.photo.tag_list = data.value.map(function (name) { return ({ name: name }); });
    };
    return PhotoShowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__photo__["a" /* Photo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__photo__["a" /* Photo */]) === "function" && _a || Object)
], PhotoShowComponent.prototype, "photo", void 0);
PhotoShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'photo-show',
        template: __webpack_require__("../../../../../src/app/album/photo/photo-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/album/photo/photo.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__photo_service__["a" /* PhotoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__comments_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__comments_comment_service__["a" /* CommentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tag_tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_tag_service__["a" /* TagService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular2_token__["Angular2TokenService"]) === "function" && _g || Object])
], PhotoShowComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=photo-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/album/photo/photo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment {\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/album/photo/photo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoService = (function () {
    function PhotoService(tokenService) {
        this.tokenService = tokenService;
        this.albumsUrl = 'albums';
        this.photosUrl = 'photos';
    }
    PhotoService.prototype.getPhotos = function (album_id) {
        return this.tokenService.get(this.albumsUrl + "/" + album_id + "/" + this.photosUrl)
            .map(function (response) { return response.json(); });
    };
    PhotoService.prototype.getPhotoFeed = function () {
        return this.tokenService.get(this.photosUrl + "/feed")
            .map(function (response) { return response.json(); });
    };
    PhotoService.prototype.getPhoto = function (id) {
        return this.tokenService.get(this.photosUrl + "/" + id + '.json');
    };
    PhotoService.prototype.createPhoto = function (photo) {
        return this.tokenService.post(this.albumsUrl + "/" + photo.album_id + "/" + this.photosUrl, JSON.stringify(photo)).map(function (res) { return res.json(); });
    };
    PhotoService.prototype.deletePhoto = function (album_id, id) {
        var url = this.albumsUrl + "/" + album_id + "/" + this.photosUrl + "/" + id;
        return this.tokenService.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PhotoService.prototype.updatePhoto = function (photo) {
        var url = this.albumsUrl + "/" + photo.album_id + "/" + this.photosUrl + "/" + photo.id;
        return this.tokenService.put(url, JSON.stringify(photo)).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PhotoService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    PhotoService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PhotoService;
}());
PhotoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"]) === "function" && _a || Object])
], PhotoService);

var _a;
//# sourceMappingURL=photo.service.js.map

/***/ }),

/***/ "../../../../../src/app/album/photo/photo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photo; });
var Photo = (function () {
    function Photo(id, album_id, album, file, description, user, tag_list, created_at, updated_at, can_update, can_delete) {
        this.id = id;
        this.album_id = album_id;
        this.album = album;
        this.file = file;
        this.description = description;
        this.user = user;
        this.tag_list = tag_list;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.can_update = can_update;
        this.can_delete = can_delete;
    }
    return Photo;
}());

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_show_component__ = __webpack_require__("../../../../../src/app/user/user-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_feed_component__ = __webpack_require__("../../../../../src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_logged_in_guard_service__ = __webpack_require__("../../../../../src/app/authentication/logged-in-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
];
var routesLoggedIn = [
    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_5__feed_feed_component__["a" /* FeedComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__account_account_component__["a" /* AccountComponent */] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_4__user_user_show_component__["a" /* UserShowComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '',
                    canActivate: [__WEBPACK_IMPORTED_MODULE_6__authentication_logged_in_guard_service__["a" /* LoggedInGuard */]],
                    children: routesLoggedIn
                }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n          aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n      </li> <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/feed\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Feed</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/albums\" routerLinkActive=\"active\">Albums</a>\n      </li>\n    </ul>\n    <ng2-completer [datasource]=\"dataService\" [minSearchLength]=\"0\"\n                   [inputClass]=\"['form-control']\" (selected)=\"onSearchSelected($event)\"\n                   [clearUnselected]=\"true\" [clearSelected]=\"true\"\n                   [fillHighlighted]=\"false\"></ng2-completer>\n  </div>\n  <form class=\"form-inline my-2 my-lg-0\">\n    <app-auth-links></app-auth-links>\n  </form>\n</nav>\n\n\n<router-outlet></router-outlet>\n<toaster-container></toaster-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cable_js__ = __webpack_require__("../../../../ng2-cable/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cable_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cable_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_data__ = __webpack_require__("../../../../../src/app/search/search-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_service__ = __webpack_require__("../../../../../src/app/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(_tokenService, ng2cable, broadcaster, toasterService, searchService, router) {
        var _this = this;
        this._tokenService = _tokenService;
        this.ng2cable = ng2cable;
        this.broadcaster = broadcaster;
        this.toasterService = toasterService;
        this.searchService = searchService;
        this.router = router;
        this.title = 'app works!';
        this._tokenService.init({
            apiBase: __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* GlobalVariable */].BASE_API_URL,
            signOutFailedValidate: true,
        });
        this.dataService = new __WEBPACK_IMPORTED_MODULE_5__search_search_data__["a" /* SearchCompleterData */](searchService, router);
        if (this._tokenService.userSignedIn()) {
            var authData = this._tokenService.currentAuthData;
            var authDataUrlQuery = "?access-token=" + authData.accessToken + "&client=" + authData.client + "&uid=" + authData.uid;
            this.ng2cable.subscribe(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* GlobalVariable */].BASE_API_URL + "/cable" + authDataUrlQuery, 'CommentsChannel');
            this.broadcaster.on('CommentsChannel').subscribe(function (message) {
                var comment = (message.comment);
                var user = (message.user);
                comment.photo = (message.photo);
                var toast = {
                    type: 'info',
                    title: 'New Comment on Photo #' + comment.photo_id,
                    body: '<strong>' + user.first_name + ' ' + user.last_name + '</strong>:' + comment.text,
                    bodyOutputType: __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* BodyOutputType */].TrustedHtml,
                    clickHandler: _this.returnHandlerCommentPushClick(comment)
                };
                _this.toasterService.pop(toast);
            });
        }
    }
    AppComponent.prototype.returnHandlerCommentPushClick = function (comment) {
        var router = this.router;
        return function (toast, isCloseButton) {
            if (!isCloseButton) {
                var link = ['/albums', comment.photo.album_id, 'photos', comment.photo.id];
                router.navigate(link);
            }
            return true;
        };
    };
    AppComponent.prototype.onSearchSelected = function (selected) {
        this.dataService.goTo(selected);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_token__["Angular2TokenService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_cable_js__["Ng2Cable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_cable_js__["Ng2Cable"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_cable_js__["Broadcaster"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_cable_js__["Broadcaster"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__search_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__search_search_service__["a" /* SearchService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_auth_links_component__ = __webpack_require__("../../../../../src/app/authentication/auth-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__album_album_module__ = __webpack_require__("../../../../../src/app/album/album.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_cable_js__ = __webpack_require__("../../../../ng2-cable/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_cable_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_cable_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_search_service__ = __webpack_require__("../../../../../src/app/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__feed_feed_component__ = __webpack_require__("../../../../../src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__album_photo_photo_modal_component__ = __webpack_require__("../../../../../src/app/album/photo/photo-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__authentication_auth_links_component__["a" /* AuthLinksComponent */],
            __WEBPACK_IMPORTED_MODULE_19__feed_feed_component__["a" /* FeedComponent */],
            __WEBPACK_IMPORTED_MODULE_20_time_ago_pipe__["TimeAgoPipe"],
            __WEBPACK_IMPORTED_MODULE_22__album_photo_photo_modal_component__["a" /* PhotoModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11__authentication_authentication_module__["a" /* AuthenticationModule */],
            __WEBPACK_IMPORTED_MODULE_13__album_album_module__["a" /* AlbumModule */],
            __WEBPACK_IMPORTED_MODULE_15_angular2_toaster__["a" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_completer__["a" /* Ng2CompleterModule */],
            __WEBPACK_IMPORTED_MODULE_18__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_modal__["BootstrapModalModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_angular2_token__["Angular2TokenService"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_14_ng2_cable_js__["Ng2Cable"],
            __WEBPACK_IMPORTED_MODULE_14_ng2_cable_js__["Broadcaster"],
            __WEBPACK_IMPORTED_MODULE_15_angular2_toaster__["b" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_17__search_search_service__["a" /* SearchService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_22__album_photo_photo_modal_component__["a" /* PhotoModalComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/auth-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthLinksComponent = (function () {
    function AuthLinksComponent(authService) {
        this.authService = authService;
    }
    AuthLinksComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthLinksComponent.prototype.isLoggedOut = function () {
        return !this.authService.isLoggedIn();
    };
    AuthLinksComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    return AuthLinksComponent;
}());
AuthLinksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth-links',
        template: "\n   <div class=\"ui form\">\n    <div class=\"fields\">\n      <div class=\"field\">\n        <button routerLink=\"/log-in\" routerLinkActive=\"active\" *ngIf=\"isLoggedOut()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Log In</button>\n      </div>\n      <div class=\"field\">\n        <button routerLink=\"/sign-up\" routerLinkActive=\"active\" *ngIf=\"isLoggedOut()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Sign Up</button>\n      </div>\n      <div class=\"field\"> \n        <button (click)=\"logOut()\" *ngIf=\"isLoggedIn()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Log Out</button>   \n      </div>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthLinksComponent);

var _a;
//# sourceMappingURL=auth-links.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    AuthService.prototype.logIn = function (email, password) {
        return this.tokenService.signIn({
            email: email,
            password: password
        });
    };
    AuthService.prototype.signUp = function (email, password, first_name, last_name) {
        return this.tokenService.registerAccount({
            email: email,
            password: password,
            passwordConfirmation: password,
            first_name: first_name,
            last_name: last_name
        });
    };
    AuthService.prototype.logOut = function () {
        this.redirectUrl = undefined;
        this.tokenService.signOut();
        this.router.navigate(['/']);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.tokenService.userSignedIn();
    };
    AuthService.prototype.redirectAfterLogin = function () {
        var redirectTo = this.redirectUrl ? this.redirectUrl : '/';
        this.redirectUrl = undefined;
        this.router.navigate([redirectTo]);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_token__["Angular2TokenService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logged_in_guard_service__ = __webpack_require__("../../../../../src/app/authentication/logged-in-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logged_out_guard_service__ = __webpack_require__("../../../../../src/app/authentication/logged-out-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/authentication/sign-up/sign-up.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'log-in', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'login', redirectTo: '/log-in' },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'signup', redirectTo: '/sign-up' }
];
var AuthenticationRoutingModule = (function () {
    function AuthenticationRoutingModule() {
    }
    return AuthenticationRoutingModule;
}());
AuthenticationRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '',
                    canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__logged_out_guard_service__["a" /* LoggedOutGuard */]],
                    children: routes
                }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__logged_in_guard_service__["a" /* LoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__logged_out_guard_service__["a" /* LoggedOutGuard */]
        ]
    })
], AuthenticationRoutingModule);

//# sourceMappingURL=authentication-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_routing_module__ = __webpack_require__("../../../../../src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/authentication/sign-up/sign-up.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_routing_module__["a" /* AuthenticationRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */]
        ],
        providers: []
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/logged-in-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    LoggedInGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    LoggedInGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    LoggedInGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/log-in']);
        return false;
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=logged-in-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/logged-out-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedOutGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedOutGuard = (function () {
    function LoggedOutGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedOutGuard.prototype.canActivateChild = function (route, state) {
        if (!this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    return LoggedOutGuard;
}());
LoggedOutGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoggedOutGuard);

var _a, _b;
//# sourceMappingURL=logged-out-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body > .grid {\n  height: 100%;\n}\n.image {\n  margin-top: -100px;\n}\n.column {\n  max-width: 450px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid\">\n  <div class=\"column\">\n    <h2 class=\"ui image header\">\n      <div class=\"content\">\n        Log-in to your account\n      </div>\n    </h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm.value)\" class=\"ui large form\">\n      <app-error-label [control]=\"loginForm\" [submitted]=\"submitted\"></app-error-label>\n      <div class=\"ui stacked secondary  segment\">\n        <div class=\"field\">\n          <app-input-field [attribute]=\"'Email'\"\n                           [type]=\"'email'\"\n                           [placeholder]=\"'Email Address'\"\n                           [icon]=\"'user icon'\"\n                           [control]=\"loginForm.controls['email']\"\n                           [submitted]=\"submitted\">\n          </app-input-field>\n        </div>\n        <div class=\"field\">\n          <app-input-field [attribute]=\"'Password'\"\n                           [type]=\"'password'\"\n                           [placeholder]=\"'Password'\"\n                           [icon]=\"'lock icon'\"\n                           [control]=\"loginForm.controls['password']\"\n                           [submitted]=\"submitted\">\n          </app-input-field>\n        </div>\n        <button class=\"ui positive basic button\" type=\"submit\">Submit</button>\n      </div>\n\n      <div class=\"ui error message\"></div>\n\n    </form>\n\n    <div class=\"ui message\">\n      New to us? <a routerLink=\"/signup\">Register</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    LoginComponent.prototype.submit = function (value) {
        this.submitted = true;
        if (!this.loginForm.valid) {
            return;
        }
        this.authService.logIn(value.email, value.password).subscribe(this.authService.redirectAfterLogin.bind(this.authService), this.afterFailedLogin.bind(this));
    };
    LoginComponent.prototype.afterFailedLogin = function (errors) {
        var parsed_errors = JSON.parse(errors._body).errors;
        for (var attribute in this.loginForm.controls) {
            if (parsed_errors[attribute]) {
                this.loginForm.controls[attribute].setErrors(parsed_errors[attribute]);
            }
        }
        this.loginForm.setErrors(parsed_errors);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/authentication/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body > .grid {\n  height: 100%;\n}\n.image {\n  margin-top: -100px;\n}\n.column {\n  max-width: 450px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid\">\n  <div class=\"column\">\n    <h2 class=\"ui image header\">\n      <div class=\"content\">\n        Create an account\n      </div>\n    </h2>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"submit(signupForm.value)\" class=\"ui large form\">\n      <app-error-label [control]=\"signupForm\" [submitted]=\"submitted\"></app-error-label>\n      <div class=\"ui stacked secondary  segment\">\n        <div class=\"field\">\n          <app-input-field [attribute]=\"'Email'\"\n                           [type]=\"'email'\"\n                           [placeholder]=\"'Email Address'\"\n                           [icon]=\"'user icon'\"\n                           [control]=\"signupForm.controls['email']\"\n                           [submitted]=\"submitted\">\n          </app-input-field>\n        </div>\n        <div class=\"field\">\n          <app-input-field [attribute]=\"'Password'\"\n                           [type]=\"'password'\"\n                           [placeholder]=\"'Password'\"\n                           [icon]=\"'lock icon'\"\n                           [control]=\"signupForm.controls['password']\"\n                           [submitted]=\"submitted\">\n          </app-input-field>\n        </div>\n        <div class=\"field\">\n          <app-input-field [attribute]=\"'First Name'\"\n                           [type]=\"'text'\"\n                           [placeholder]=\"'First Name'\"\n                           [icon]=\"'user icon'\"\n                           [control]=\"signupForm.controls['first_name']\"\n                           [submitted]=\"submitted\">\n          </app-input-field>\n        </div>\n        <div class=\"field\">\n          <app-input-field [attribute]=\"'Last Name'\"\n                           [type]=\"'text'\"\n                           [placeholder]=\"'Last Name'\"\n                           [icon]=\"'user icon'\"\n                           [control]=\"signupForm.controls['last_name']\"\n                           [submitted]=\"submitted\">\n          </app-input-field>\n        </div>\n        <button class=\"ui positive basic button\" type=\"submit\">Submit</button>\n      </div>\n\n      <div class=\"ui error message\"></div>\n\n    </form>\n\n    <div class=\"ui message\">\n      Have an account? <a routerLink=\"/login\">Login</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authentication/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/authentication/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = (function () {
    function SignUpComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.signupForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            first_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    SignUpComponent.prototype.submit = function (value) {
        this.submitted = true;
        if (!this.signupForm.valid) {
            return;
        }
        this.authService.signUp(value.email, value.password, value.first_name, value.last_name).subscribe(this.authService.redirectAfterLogin.bind(this.authService), this.afterFailedLogin.bind(this));
    };
    SignUpComponent.prototype.afterFailedLogin = function (errors) {
        var parsed_errors = JSON.parse(errors._body).errors;
        for (var attribute in this.signupForm.controls) {
            if (parsed_errors[attribute]) {
                this.signupForm.controls[attribute].setErrors(parsed_errors[attribute]);
            }
        }
        this.signupForm.setErrors(parsed_errors);
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/authentication/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === "function" && _b || Object])
], SignUpComponent);

var _a, _b;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"photos\">\n    <div class=\"photo\" *ngFor='let photo of photos'>\n      <a (click)=\"goToShow(photo)\">\n          <div class=\"photo-img-wrapper\">\n          <img class=\"photo-img\" src=\"/{{photo.file.thumb.url}}\" alt=\"Photo\"></div>\n        <div class=\"photo-info\">\n          <div class=\"photo-user\">\n            <a (click)=\"goToUser(photo.user)\">\n            <span class=\"photo-user-img-wrapper\"><img class=\"photo-user-img\" src=\"{{photo.user.image}}\" alt=\"User\"></span>\n            <span class=\"photo-user-name\">{{photo.user.first_name }} {{ photo.user.last_name }}</span></a>\n          </div>\n          <div class=\"photo-time\"><span>{{ photo.created_at | timeAgo }}</span></div>\n          <div class=\"photo-album\">\n            <a (click)=\"goToAlbum(photo.album)\"><i\n              class=\"fa fa-book\" aria-hidden=\"true\"></i> {{ photo.album.title }}</a>\n          </div>\n        </div>\n      </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_album_photo_photo_service__ = __webpack_require__("../../../../../src/app/album/photo/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__album_photo_photo_modal_component__ = __webpack_require__("../../../../../src/app/album/photo/photo-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedComponent = (function () {
    function FeedComponent(photoService, router, dialogService) {
        this.photoService = photoService;
        this.router = router;
        this.dialogService = dialogService;
    }
    FeedComponent.prototype.ngOnInit = function () {
        //let timer = Observable.timer(0, 30000);
        // timer.subscribe(() => this.getFeed());
        this.getFeed();
    };
    FeedComponent.prototype.getFeed = function () {
        var _this = this;
        this.photoService.getPhotoFeed()
            .subscribe(function (photos) { return _this.photos = photos; });
    };
    FeedComponent.prototype.goToShow = function (photo) {
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__album_photo_photo_modal_component__["a" /* PhotoModalComponent */], { photo: photo }, { backdropColor: 'rgba(0, 0, 0, 0.7)', closeByClickingOutside: true });
    };
    FeedComponent.prototype.goToUser = function (user) {
        var link = ['/users', user.id];
        this.router.navigate(link);
    };
    FeedComponent.prototype.goToAlbum = function (album) {
        var link = ['/albums', album.id];
        this.router.navigate(link);
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'feed',
        template: __webpack_require__("../../../../../src/app/feed/feed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feed/feed.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_album_photo_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_album_photo_photo_service__["a" /* PhotoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], FeedComponent);

var _a, _b, _c;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ "../../../../../src/app/feed/feed.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photos {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  margin: 0 auto;\n  max-width: 500px;\n  width: 100%;\n  padding: 0;\n}\n.photo {\n  background-color: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 3px;\n  margin-left: -1px;\n  margin-right: -1px;\n  margin-bottom: 20px;\n}\n.photo-img-wrapper {\n  display: block;\n  overflow: hidden;\n}\n.photo-img {\n  height: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 100%;\n}\n.photo-info {\n  display: block;\n  width: 100%;\n  border-top: 1px solid #e6e6e6;\n  height: 40px;\n}\n.photo-user {\n  padding: 5px;\n  float: left;\n  height: 100%;\n}\n.photo-user-img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\n.photo-user a {\n  vertical-align: middle;\n}\n.photo-user-name {\n  margin-left: 5px;\n  font-weight: bold;\n}\n.photo-user a {\n  cursor: pointer;\n}\n.photo-album {\n  float: left;\n  padding: 5px;\n  height: 100%;\n}\n.photo-album a {\n  vertical-align: middle;\n  cursor: pointer;\n}\n.photo-time {\n  float: right;\n}\n.photo-time {\n  padding: 5px;\n  height: 100%\n}\n.photo-time span {\n  vertical-align: middle;\n  color: #999;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariable; });
var GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://mbvgram.mbv-soft.ru/api/v1',
});
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  homepage works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCompleterData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SearchCompleterData = (function (_super) {
    __extends(SearchCompleterData, _super);
    function SearchCompleterData(searchService, router) {
        var _this = _super.call(this) || this;
        _this.searchService = searchService;
        _this.router = router;
        return _this;
    }
    SearchCompleterData.prototype.search = function (term) {
        var _this = this;
        this.searchService.search(term).subscribe(function (data) {
            var matches = data.map(function (result) {
                return {
                    title: SearchCompleterData.titleByType(result),
                    description: SearchCompleterData.descriptionByType(result),
                    image: SearchCompleterData.imageByType(result),
                    originalObject: result,
                };
            });
            _this.next(matches);
        });
    };
    SearchCompleterData.prototype.goTo = function (selected) {
        if (!selected) {
            return;
        }
        var o = selected.originalObject;
        switch (o.object_type) {
            case 'User': {
                var link = ['/users', o.id];
                this.router.navigate(link);
                break;
            }
            case 'Album': {
                var link = ['/albums', o.id];
                this.router.navigate(link);
                break;
            }
            case 'Photo': {
                var link = ['/albums', o.album_id, 'photos', o.id];
                this.router.navigate(link);
                break;
            }
        }
    };
    SearchCompleterData.titleByType = function (o) {
        switch (o.object_type) {
            case 'User': {
                return o.first_name + ' ' + o.last_name;
            }
            case 'Photo': {
                return 'Photo #' + o.id;
            }
            case 'Album': {
                return o.title;
            }
            default: {
                return 'Empty';
            }
        }
    };
    SearchCompleterData.descriptionByType = function (o) {
        switch (o.object_type) {
            case 'User': {
                return 'User';
            }
            case 'Photo': {
                return o.tag_list.join(', ');
            }
            case 'Album': {
                return o.tag_list.join(', ');
            }
            default: {
                return null;
            }
        }
    };
    SearchCompleterData.imageByType = function (o) {
        switch (o.object_type) {
            case 'User': {
                return (o.image) ? ('/' + o.image) : null;
            }
            case 'Photo': {
                return '/' + o.file.small_thumb.url;
            }
            default: {
                return null;
            }
        }
    };
    SearchCompleterData.prototype.cancel = function () {
        // Handle cancel
    };
    return SearchCompleterData;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));

//# sourceMappingURL=search-data.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(tokenService) {
        this.tokenService = tokenService;
        this.searchUrl = 'search';
    }
    SearchService.prototype.search = function (text) {
        return this.tokenService.get(this.searchUrl + "/" + text)
            .map(function (response) { return response.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error-label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorLabelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorLabelComponent = (function () {
    function ErrorLabelComponent() {
    }
    return ErrorLabelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) === "function" && _a || Object)
], ErrorLabelComponent.prototype, "control", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ErrorLabelComponent.prototype, "submitted", void 0);
ErrorLabelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-label',
        template: "\n    <div *ngIf=\"control.errors && (submitted || control.dirty || control.touched)\" class=\"alert alert-danger\">\n      <div *ngFor=\"let error of (control.errors | errorMessages)\">\n        {{ error }}\n      </div>\n    </div>\n  "
    })
], ErrorLabelComponent);

var _a;
//# sourceMappingURL=error-label.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error-messages.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessagesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorMessagesPipe = (function () {
    function ErrorMessagesPipe() {
    }
    ErrorMessagesPipe.prototype.transform = function (value) {
        if (Array.isArray(value)) {
            return value;
        }
        return this.parseErrorObject(value);
    };
    ErrorMessagesPipe.prototype.parseErrorObject = function (value) {
        var errors = [];
        for (var key in value) {
            if (this.knownErrors()[key]) {
                var error_messages = this.knownErrors()[key].call(this, value[key]);
                errors = errors.concat(error_messages);
            }
        }
        return errors;
    };
    ErrorMessagesPipe.prototype.knownErrors = function () {
        return {
            'pattern': this.patternError,
            'minlength': this.minLengthError,
            'maxlength': this.maxLengthError,
            'required': this.requiredError,
            'full_messages': this.fullMessages
        };
    };
    ErrorMessagesPipe.prototype.patternError = function (error) {
        return "must match /" + error['requiredPattern'] + "/ pattern";
    };
    ErrorMessagesPipe.prototype.maxLengthError = function (error) {
        return "must be shorter than " + (error['requiredLength'] + 1);
    };
    ErrorMessagesPipe.prototype.minLengthError = function (error) {
        return "must be longer than " + (error['requiredLength'] - 1);
    };
    ErrorMessagesPipe.prototype.requiredError = function (_error) {
        return 'is required';
    };
    ErrorMessagesPipe.prototype.fullMessages = function (error) {
        return error;
    };
    return ErrorMessagesPipe;
}());
ErrorMessagesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'errorMessages' })
], ErrorMessagesPipe);

//# sourceMappingURL=error-messages.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/input-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <label [attr.for]=attribute>{{attribute}}</label>\n  <div class=\"ui left icon input\">\n    <i class={{icon}}></i>\n    <input id={{attribute}} type={{type}} [formControl]=\"control\" name={{type}} placeholder={{placeholder}}>\n  </div>\n  <app-error-label [control]=\"control\" [submitted]=\"submitted\"></app-error-label>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/input-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputFieldComponent = (function () {
    function InputFieldComponent() {
        this.type = 'text';
    }
    return InputFieldComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFieldComponent.prototype, "attribute", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFieldComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFieldComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFieldComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], InputFieldComponent.prototype, "submitted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) === "function" && _a || Object)
], InputFieldComponent.prototype, "control", void 0);
InputFieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-field',
        template: __webpack_require__("../../../../../src/app/shared/input-field.component.html")
    })
], InputFieldComponent);

var _a;
//# sourceMappingURL=input-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_field_component__ = __webpack_require__("../../../../../src/app/shared/input-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_label_component__ = __webpack_require__("../../../../../src/app/shared/error-label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_messages_pipe__ = __webpack_require__("../../../../../src/app/shared/error-messages.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__input_field_component__["a" /* InputFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_4__error_label_component__["a" /* ErrorLabelComponent */],
            __WEBPACK_IMPORTED_MODULE_5__error_messages_pipe__["a" /* ErrorMessagesPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__input_field_component__["a" /* InputFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_4__error_label_component__["a" /* ErrorLabelComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/tag/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagService = (function () {
    function TagService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.albumsUrl = 'tags';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    TagService.prototype.getTags = function () {
        return this.tokenService.get(this.albumsUrl)
            .map(function (response) { return response.json(); });
    };
    TagService.prototype.getTagList = function () {
        return this.tokenService.get(this.albumsUrl)
            .map(function (response) { return response.json().map(function (tag) { return ({ id: tag.name, text: tag.name }); }); });
    };
    TagService.prototype.getTag = function (id) {
        return this.tokenService.get(this.albumsUrl + "/" + id + '.json');
    };
    TagService.prototype.createTag = function (tag) {
        return this.tokenService.post(this.albumsUrl, JSON.stringify(tag), this.options).map(function (res) { return res.json(); });
    };
    TagService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TagService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TagService;
}());
TagService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_token__["Angular2TokenService"]) === "function" && _b || Object])
], TagService);

var _a, _b;
//# sourceMappingURL=tag.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user\">\n  <h2>\n    {{ user.first_name }} {{ user.last_name }}\n  </h2>\n  <img src=\"{{ user.image }}\" alt=\"Photo\"/>\n  <p>\n    {{ user.address }}\n  </p>\n\n  <button type=\"button\" (click)=\"followUser(user)\" class=\"btn btn-info\" [hidden]=\"!user.can_follow\">Follow</button>\n  <button type=\"button\" (click)=\"unfollowUser(user)\" class=\"btn btn-danger\" [hidden]=\"!user.can_unfollow\">Unfollow\n  </button>\n  <div class=\"user-content\" [hidden]=\"!user.can_show_content\">\n    <p>\n      Albums:\n    </p>\n    <div class=\"albums\">\n      <div class=\"ui four stackable cards\">\n        <div class=\"card\" *ngFor='let album of albums'>\n          <a (click)=\"goToShowAlbum(album)\">\n            <div class=\"photo-collage-wrapper\">\n              <div class=\"photo-collage\">\n                <div class=\"photo-wrapper\">\n                  <div class=\"photo\">\n                    <div class=\"image_grid\" *ngFor='let photo of album.sample_photos'>\n                      <div class=\"photo-img-wrapper\">\n                        <img class=\"photo-img\"\n                             src=\"/{{ photo.file.small_thumb.url }}\"\n                             width=\"100\" height=\"100\" alt=\"Photo\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-block\">\n              <h3 class=\"card-title\">{{ album.title }}</h3>\n              <p>\n                <small>Last Updated: {{ album.updated_at | date:'medium' }}</small>\n              </p>\n              <p class=\"card-text\">{{ album.description }}</p>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__album_album_service__ = __webpack_require__("../../../../../src/app/album/album.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserShowComponent = (function () {
    function UserShowComponent(route, router, userService, albumService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.albumService = albumService;
    }
    UserShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/users';
        this.routeId = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.getUser(+params['id']);
            _this.getAlbums(+params['id']);
        });
    };
    UserShowComponent.prototype.getUser = function (id) {
        var _this = this;
        this.userService.getUser(id).subscribe(function (response) {
            _this.user = response.json();
        });
    };
    UserShowComponent.prototype.followUser = function (user) {
        var _this = this;
        this.userService.followUser(user.id).subscribe(function (u) { return _this.getUser(user.id); });
    };
    UserShowComponent.prototype.unfollowUser = function (user) {
        var _this = this;
        this.userService.unfollowUser(user.id).subscribe(function (u) { return _this.getUser(user.id); });
    };
    UserShowComponent.prototype.getAlbums = function (user_id) {
        var _this = this;
        this.albumService.getUserAlbums(user_id)
            .subscribe(function (albums) { return _this.albums = albums; });
    };
    UserShowComponent.prototype.goToShowAlbum = function (album) {
        var link = ['/albums', album.id];
        this.router.navigate(link);
    };
    return UserShowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]) === "function" && _a || Object)
], UserShowComponent.prototype, "user", void 0);
UserShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-show',
        template: __webpack_require__("../../../../../src/app/user/user-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__album_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__album_album_service__["a" /* AlbumService */]) === "function" && _e || Object])
], UserShowComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image_grid {\n  display: block;\n  float: left;\n}\n.photo-collage .photo {\n  background-color: inherit;\n  overflow: hidden;\n  margin-left: -2px;\n  margin-bottom: -1px;\n}\n\n.photo-collage .photo-wrapper {\n  overflow: hidden;\n  border-radius: 50%;\n}\n.photo-collage {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  border-color: inherit;\n  background-color: inherit;\n  margin: 10px auto;\n}\n.photo-collage .image_grid>.photo-img-wrapper {\n  overflow: hidden;\n  width: 100px;\n  height: 99.5px;\n  margin-left: 1px;\n  margin-bottom: 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_show_component__ = __webpack_require__("../../../../../src/app/user/user-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__user_show_component__["a" /* UserShowComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token__ = __webpack_require__("../../../../angular2-token/angular2-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_token__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(tokenService) {
        this.tokenService = tokenService;
        this.usersUrl = 'users';
    }
    UserService.prototype.getUser = function (id) {
        return this.tokenService.get(this.usersUrl + "/" + id + '.json');
    };
    UserService.prototype.followUser = function (id) {
        var url = this.usersUrl + "/follow";
        var data = JSON.stringify({ id: id });
        return this.tokenService.patch(url, data)
            .catch(this.handleError);
    };
    UserService.prototype.unfollowUser = function (id) {
        var url = this.usersUrl + "/unfollow";
        var data = JSON.stringify({ id: id });
        return this.tokenService.patch(url, data)
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_token__["Angular2TokenService"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, first_name, last_name, image, created_at, updated_at, can_follow, can_unfollow, can_show_content) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.image = image;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.can_follow = can_follow;
        this.can_unfollow = can_unfollow;
        this.can_show_content = can_show_content;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map