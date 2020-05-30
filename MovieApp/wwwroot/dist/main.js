(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comment-details/comment-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comment-details/comment-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Comment-details:</p>\n\n<p *ngIf=\"!comment\"><em>Loading...</em></p>\n\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"comment\">\r\n  <thead>\r\n    <tr>\r\n      <th>Id</th>\r\n      <th>Text</th>\r\n      <th>Important</th>\r\n      <th>MovieId</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>{{ comment.id }}</td>\r\n      <td>{{ comment.text }}</td>\r\n      <td>{{ comment.important }}</td>\r\n      <td>{{ comment.movieItemId }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-comment/delete-comment.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-comment/delete-comment.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>delete-comment works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-movie/delete-movie.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-movie/delete-movie.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Delete-movie:</h3>\r\n\r\n  <div>\r\n    <table class='table table-striped' aria-labelledby=\"tableLabel\">\r\n      <thead>\r\n        <tr>\r\n          <th>Id</th>\r\n          <th>Title</th>\r\n          <th>Description</th>\r\n          <th>Genre</th>\r\n          <th>Duration</th>\r\n          <th>Realease year</th>\r\n          <th>Director</th>\r\n          <th>Added date</th>\r\n          <th>Rating</th>\r\n          <th>Watched</th>\r\n          <th>Comments</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{ movie.id }}</td>\r\n          <td>{{ movie.title }}</td>\r\n          <td>{{ movie.description }}</td>\r\n          <td>{{ movie.genre }}</td>\r\n          <td>{{ movie.duration }}</td>\r\n          <td>{{ movie.releaseYear }}</td>\r\n          <td>{{ movie.director }}</td>\r\n          <td>{{ movie.addedDate }}</td>\r\n          <td>{{ movie.rating }}</td>\r\n          <td>{{ movie.watched }}</td>\r\n          <td>{{ movie.comments }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div>\r\n    <button type=\"submit\" (click)=\"deleteMovie()\">Delete movie</button>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h1 id=\"tableLabel\">Multimedia Center</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!movies\"><em>Loading...</em></p>\r\n\r\n<div>\r\n  <span>Filter movies by Added date</span>\r\n  <label>\r\n    from\r\n    <input #startDate type=\"date\" class=\"mx-2\">\r\n    <input #startTime type=\"time\" class=\"mx-2\">\r\n  </label>\r\n  <label>\r\n    to\r\n    <input #endDate type=\"date\" class=\"mx-2\">\r\n    <input #endTime type=\"time\" class=\"mx-2\">\r\n  </label>\r\n  <div class=\"d-inline px-3\">\r\n    <button class=\"btn btn-sm btn-outline-primary\"\r\n            type=\"button\"\r\n            (click)=\"filterMovies(startDate.value, startTime.value, endDate.value, endTime.value)\">\r\n      Filter Movies\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<h3>Movies</h3>\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"movies\">\r\n  <thead>\r\n    <tr>\r\n      <th>Id</th>\r\n      <th>Title</th>\r\n      <th>Description</th>\r\n      <th>Genre</th>\r\n      <th>Duration</th>\r\n      <th>Realease year</th>\r\n      <th>Director</th>\r\n      <th>Added date</th>\r\n      <th>Rating</th>\r\n      <th>Watched</th>\r\n      <th>Number of comments</th>\r\n      <th colspan=\"3\">Operations</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let movie of movies\">\r\n      <td>{{ movie.id }}</td>\r\n      <td>{{ movie.title }}</td>\r\n      <td>{{ movie.description }}</td>\r\n      <td>{{ movie.genre }}</td>\r\n      <td>{{ movie.duration }}</td>\r\n      <td>{{ movie.releaseYear }}</td>\r\n      <td>{{ movie.director }}</td>\r\n      <td>{{ movie.addedDate }}</td>\r\n      <td>{{ movie.rating }}</td>\r\n      <td>{{ movie.watched }}</td>\r\n      <td>{{ movie.numberOfComments }}</td>\r\n      <td><a routerLink=\"/movie-details/{{movie.id}}\" (click)=\"onSelect(movie)\">Details</a></td>\r\n      <td><a routerLink=\"/update-movie/{{movie.id}}\" (click)=\"onClick(movie)\">Update</a></td>\r\n      <td><a routerLink=\"/delete-movie/{{movie.id}}\" (click)=\"deleteMovie(movie)\">Delete</a></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<div>\r\n  <a routerLink=\"/new-movie\" (click)=\"addMovie()\">Add movie</a>\r\n</div>\r\n\r\n<h3>Comments</h3>\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"comments\">\r\n  <thead>\r\n    <tr>\r\n      <th>Id</th>\r\n      <th>Text</th>\r\n      <th>Important</th>\r\n      <th>MovieId</th>\r\n      <th colspan=\"3\">Operations</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let comment of comments\">\r\n      <td>{{ comment.id }}</td>\r\n      <td>{{ comment.text }}</td>\r\n      <td>{{ comment.important }}</td>\r\n      <td>{{ comment.movieItemId }}</td>\r\n      <td><a routerLink=\"/comment-details/{{comment.id}}\" (click)=\"onDetails(comment)\">Details</a></td>\r\n      <td><a routerLink=\"/update-comment/{{comment.id}}\" (click)=\"onUpdate(comment)\">Update</a></td>\r\n      <td><a routerLink=\"/delete-comment/{{comment.id}}\" (click)=\"onDelete(comment)\">Delete</a></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<div>\r\n  <a routerLink=\"/new-comment\" (click)=\"addComment()\">Add comment</a>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Multimedia center</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-details/movie-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-details/movie-details.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 id=\"tableLabel\">Movie details:</h3>\n\n<p *ngIf=\"!movie\"><em>Loading...</em></p>\n\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"movie\">\r\n  <thead>\r\n    <tr>\r\n      <th>Id</th>\r\n      <th>Title</th>\r\n      <th>Description</th>\r\n      <th>Genre</th>\r\n      <th>Duration</th>\r\n      <th>Realease year</th>\r\n      <th>Director</th>\r\n      <th>Added date</th>\r\n      <th>Rating</th>\r\n      <th>Watched</th>\r\n      <th>Comments</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>{{ movie.id }}</td>\r\n      <td>{{ movie.title }}</td>\r\n      <td>{{ movie.description }}</td>\r\n      <td>{{ movie.genre }}</td>\r\n      <td>{{ movie.duration }}</td>\r\n      <td>{{ movie.releaseYear }}</td>\r\n      <td>{{ movie.director }}</td>\r\n      <td>{{ movie.addedDate }}</td>\r\n      <td>{{ movie.rating }}</td>\r\n      <td>{{ movie.watched }}</td>\r\n      <td>{{ movie.comments }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">NetCoreAngularApp</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\">Counter</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\">Fetch data</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-comment/new-comment.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-comment/new-comment.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>New-comment:</p>\n\n<form [formGroup]=\"form\"\r\n      (ngSubmit)=\"saveComment()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Text</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"text\" name=\"text\" formControlName=\"text\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"description\">Important</label>\r\n    <input class=\"radio-button\" type=\"radio\" name=\"important\" [value]=\"true\" formControlName=\"important\"> Yes&nbsp;\r\n    <input class=\"radio-button\" type=\"radio\" name=\"important\" [value]=\"false\" formControlName=\"important\"> No\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"description\">Movie item id</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"movieItemId\" name=\"movieItemId\" formControlName=\"movieItemId\">\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-success\">Save comment</button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-movie/new-movie.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-movie/new-movie.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>New-movie:</p>\r\n\r\n<form [formGroup]=\"form\"\r\n      (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" formControlName=\"title\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"description\">Description</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" formControlName=\"description\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"genre\">Genre</label>\r\n    <select class=\"form-control\" id=\"genre\" name=\"genre\" formControlName=\"genre\">\r\n      <option *ngFor=\"let i of genre\" [value]=\"i\">{{i}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"duration\">Duration</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"duration\" name=\"duration\" formControlName=\"duration\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"releaseYear\">Release year</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"releaseYear\" name=\"releaseYear\" formControlName=\"releaseYear\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"director\">Director</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"director\" name=\"director\" formControlName=\"director\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"addedDate\">Added date</label>\r\n    <input type=\"date\" class=\"form-control\" id=\"addedDate\" name=\"addedDate\" formControlName=\"addedDate\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"rating\">Rating</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"rating\" name=\"rating\" formControlName=\"rating\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"watched\">Watched</label>\r\n    <select class=\"form-control\" id=\"watched\" name=\"watched\" formControlName=\"watched\">\r\n      <option *ngFor=\"let i of watched\" [value]=\"i\">{{i}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-success\">Save movie</button>\r\n\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-comment/update-comment.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-comment/update-comment.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>update-comment works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-movie/update-movie.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-movie/update-movie.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Update-movie:</p>\r\n\r\n<form [formGroup]=\"form\"\r\n      (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Id</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"id\" name=\"id\" formControlName=\"id\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" formControlName=\"title\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"description\">Description</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" formControlName=\"description\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"genre\">Genre</label>\r\n    <select class=\"form-control\" id=\"genre\" name=\"genre\" formControlName=\"genre\">\r\n      <option *ngFor=\"let i of genre\" [value]=\"i\">{{i}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"duration\">Duration</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"duration\" name=\"duration\" formControlName=\"duration\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"releaseYear\">Release year</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"releaseYear\" name=\"releaseYear\" formControlName=\"releaseYear\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"director\">Director</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"director\" name=\"director\" formControlName=\"director\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"addedDate\">Added date</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"addedDate\" name=\"addedDate\" formControlName=\"addedDate\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"rating\">Rating</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"rating\" name=\"rating\" formControlName=\"rating\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"watched\">Watched</label>\r\n    <select class=\"form-control\" id=\"watched\" name=\"watched\" formControlName=\"watched\">\r\n      <option *ngFor=\"let i of watched\" [value]=\"i\">{{i}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-success\">Save movie</button>\r\n\r\n</form>\r\n\r\n<div>\r\n  <!--<table class='table table-striped' aria-labelledby=\"tableLabel\">\r\n    <thead>\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>Title</th>\r\n        <th>Description</th>\r\n        <th>Genre</th>\r\n        <th>Duration</th>\r\n        <th>Realease year</th>\r\n        <th>Director</th>\r\n        <th>Added date</th>\r\n        <th>Rating</th>\r\n        <th>Watched</th>\r\n        <th>Comments</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{ movie.id }}</td>\r\n        <td>{{ movie.title }}</td>\r\n        <td>{{ movie.description }}</td>\r\n        <td>{{ movie.genre }}</td>\r\n        <td>{{ movie.duration }}</td>\r\n        <td>{{ movie.releaseYear }}</td>\r\n        <td>{{ movie.director }}</td>\r\n        <td>{{ movie.addedDate }}</td>\r\n        <td>{{ movie.rating }}</td>\r\n        <td>{{ movie.watched }}</td>\r\n        <td>{{ movie.comments }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>-->\r\n</div>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-movie/update-movie.component */ "./src/app/update-movie/update-movie.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _delete_movie_delete_movie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./delete-movie/delete-movie.component */ "./src/app/delete-movie/delete-movie.component.ts");
/* harmony import */ var _comment_details_comment_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comment-details/comment-details.component */ "./src/app/comment-details/comment-details.component.ts");
/* harmony import */ var _update_comment_update_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-comment/update-comment.component */ "./src/app/update-comment/update-comment.component.ts");
/* harmony import */ var _delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./delete-comment/delete-comment.component */ "./src/app/delete-comment/delete-comment.component.ts");
/* harmony import */ var _new_comment_new_comment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./new-comment/new-comment.component */ "./src/app/new-comment/new-comment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_8__["FetchDataComponent"],
            _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsComponent"],
            _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_10__["NewMovieComponent"],
            _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_11__["UpdateMovieComponent"],
            _delete_movie_delete_movie_component__WEBPACK_IMPORTED_MODULE_13__["DeleteMovieComponent"],
            _comment_details_comment_details_component__WEBPACK_IMPORTED_MODULE_14__["CommentDetailsComponent"],
            _update_comment_update_comment_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCommentComponent"],
            _delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_16__["DeleteCommentComponent"],
            _new_comment_new_comment_component__WEBPACK_IMPORTED_MODULE_17__["NewCommentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_8__["FetchDataComponent"] },
                { path: 'movie-details/:id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsComponent"] },
                { path: 'new-movie', component: _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_10__["NewMovieComponent"] },
                { path: 'update-movie/:id', component: _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_11__["UpdateMovieComponent"] },
                { path: 'delete-movie/:id', component: _delete_movie_delete_movie_component__WEBPACK_IMPORTED_MODULE_13__["DeleteMovieComponent"] },
                { path: 'comment-details/:id', component: _comment_details_comment_details_component__WEBPACK_IMPORTED_MODULE_14__["CommentDetailsComponent"] },
                { path: 'new-comment', component: _new_comment_new_comment_component__WEBPACK_IMPORTED_MODULE_17__["NewCommentComponent"] },
                { path: 'update-comment/:id', component: _update_comment_update_comment_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCommentComponent"] },
                { path: 'delete-comment/:id', component: _delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_16__["DeleteCommentComponent"] }
            ])
        ],
        entryComponents: [
            _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_10__["NewMovieComponent"],
            _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_11__["UpdateMovieComponent"],
            _new_comment_new_comment_component__WEBPACK_IMPORTED_MODULE_17__["NewCommentComponent"],
            _update_comment_update_comment_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCommentComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comment-details/comment-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/comment-details/comment-details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQtZGV0YWlscy9jb21tZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/comment-details/comment-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comment-details/comment-details.component.ts ***!
  \**************************************************************/
/*! exports provided: CommentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDetailsComponent", function() { return CommentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CommentDetailsComponent = class CommentDetailsComponent {
    constructor(http, baseUrl, route) {
        this.route = route;
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        http.get(baseUrl + 'api/Comments/' + id).subscribe(result => {
            this.comment = result;
            console.log(this.comment);
        }, error => console.error(error));
    }
};
CommentDetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CommentDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-comment-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./comment-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comment-details/comment-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./comment-details.component.css */ "./src/app/comment-details/comment-details.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CommentDetailsComponent);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/delete-comment/delete-comment.component.css":
/*!*************************************************************!*\
  !*** ./src/app/delete-comment/delete-comment.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1jb21tZW50L2RlbGV0ZS1jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/delete-comment/delete-comment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/delete-comment/delete-comment.component.ts ***!
  \************************************************************/
/*! exports provided: DeleteCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCommentComponent", function() { return DeleteCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let DeleteCommentComponent = class DeleteCommentComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeleteCommentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-delete-comment',
        template: __importDefault(__webpack_require__(/*! raw-loader!./delete-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-comment/delete-comment.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./delete-comment.component.css */ "./src/app/delete-comment/delete-comment.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], DeleteCommentComponent);



/***/ }),

/***/ "./src/app/delete-movie/delete-movie.component.css":
/*!*********************************************************!*\
  !*** ./src/app/delete-movie/delete-movie.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1tb3ZpZS9kZWxldGUtbW92aWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/delete-movie/delete-movie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/delete-movie/delete-movie.component.ts ***!
  \********************************************************/
/*! exports provided: DeleteMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovieComponent", function() { return DeleteMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let DeleteMovieComponent = class DeleteMovieComponent {
    constructor(http, baseUrl, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.id = this.route.snapshot.paramMap.get('id');
        http.get(baseUrl + 'api/MovieItems/' + this.id).subscribe(result => {
            this.movie = result;
            console.log(this.movie);
        }, error => console.error(error));
    }
    deleteMovie() {
        this.http.delete('https://localhost:5001/api/movieItems' + '/' + this.id).subscribe(result => {
            console.log(result);
            this.router.navigate(['/fetch-data']);
        }, error => console.error(error));
    }
};
DeleteMovieComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DeleteMovieComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-delete-movie',
        template: __importDefault(__webpack_require__(/*! raw-loader!./delete-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-movie/delete-movie.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./delete-movie.component.css */ "./src/app/delete-movie/delete-movie.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DeleteMovieComponent);

var Genre;
(function (Genre) {
    Genre[Genre["comedy"] = 1] = "comedy";
    Genre[Genre["adventure"] = 2] = "adventure";
    Genre[Genre["animation"] = 3] = "animation";
    Genre[Genre["action"] = 4] = "action";
    Genre[Genre["drama"] = 5] = "drama";
    Genre[Genre["thriller"] = 6] = "thriller";
    Genre[Genre["horror"] = 7] = "horror";
    Genre[Genre["crime"] = 8] = "crime";
    Genre[Genre["fantasy"] = 9] = "fantasy";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl, router) {
        this.http = http;
        this.router = router;
        http.get(baseUrl + 'api/MovieItems').subscribe(result => {
            this.movies = result;
            console.log(this.movies);
        }, error => console.error(error));
        http.get(baseUrl + 'api/Comments').subscribe(result => {
            this.comments = result;
            console.log(this.comments);
        }, error => console.error(error));
    }
    onSelect(movie) {
        this.router.navigate(['/movie-details', movie.Id]);
    }
    onClick(movie) {
        this.router.navigate(['/update-movie', movie.Id]);
    }
    deleteMovie(movie) {
        this.router.navigate(['/delete-movie', movie.Id]);
    }
    addMovie() {
        this.router.navigate(['/new-movie']);
    }
    onDetails(comment) {
        this.router.navigate(['/comment-details', comment.Id]);
    }
    onUpdate(comment) {
        this.router.navigate(['/update-comment', comment.Id]);
    }
    onDelete(comment) {
        this.router.navigate(['/delete-comment', comment.Id]);
    }
    addComment() {
        this.router.navigate(['/new-comment']);
    }
    filterMovies(startDate, startTime, endDate, endTime) {
        let startDateTime, endDateTime;
        if (startDate) {
            startDateTime = startDate;
            if (startTime) {
                startDateTime = `${startDateTime}T${startTime}`;
            }
        }
        if (endDate) {
            endDateTime = endDate;
            if (endTime) {
                endDateTime = `${endDateTime}T${endTime}`;
            }
        }
        this.http.get('https://localhost:5001/api/movieItems/' + `${startDateTime}/${endDateTime}`).subscribe(result => {
            this.movies = result;
            console.log(this.movies);
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], FetchDataComponent);

var Genre;
(function (Genre) {
    Genre[Genre["comedy"] = 1] = "comedy";
    Genre[Genre["adventure"] = 2] = "adventure";
    Genre[Genre["animation"] = 3] = "animation";
    Genre[Genre["action"] = 4] = "action";
    Genre[Genre["drama"] = 5] = "drama";
    Genre[Genre["thriller"] = 6] = "thriller";
    Genre[Genre["horror"] = 7] = "horror";
    Genre[Genre["crime"] = 8] = "crime";
    Genre[Genre["fantasy"] = 9] = "fantasy";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/movie-details/movie-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let MovieDetailsComponent = class MovieDetailsComponent {
    constructor(http, baseUrl, route) {
        this.route = route;
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        http.get(baseUrl + 'api/MovieItems/' + id).subscribe(result => {
            this.movie = result;
            console.log(this.movie);
        }, error => console.error(error));
    }
};
MovieDetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MovieDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-movie-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-details/movie-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./movie-details.component.css */ "./src/app/movie-details/movie-details.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MovieDetailsComponent);

var Genre;
(function (Genre) {
    Genre[Genre["comedy"] = 1] = "comedy";
    Genre[Genre["adventure"] = 2] = "adventure";
    Genre[Genre["animation"] = 3] = "animation";
    Genre[Genre["action"] = 4] = "action";
    Genre[Genre["drama"] = 5] = "drama";
    Genre[Genre["thriller"] = 6] = "thriller";
    Genre[Genre["horror"] = 7] = "horror";
    Genre[Genre["crime"] = 8] = "crime";
    Genre[Genre["fantasy"] = 9] = "fantasy";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/new-comment/new-comment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-comment/new-comment.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1jb21tZW50L25ldy1jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/new-comment/new-comment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-comment/new-comment.component.ts ***!
  \******************************************************/
/*! exports provided: NewCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCommentComponent", function() { return NewCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let NewCommentComponent = class NewCommentComponent {
    constructor(http, baseUrl, formBuilder, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.form = this.formBuilder.group({
            id: 0,
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            important: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            movieItemId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    saveComment() {
        this.http.post('https://localhost:5001/api/Comments', this.form.value).subscribe(data => {
            console.log(data);
            this.router.navigate(['/fetch-data']);
        });
    }
};
NewCommentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NewCommentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-new-comment',
        template: __importDefault(__webpack_require__(/*! raw-loader!./new-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-comment/new-comment.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./new-comment.component.css */ "./src/app/new-comment/new-comment.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NewCommentComponent);



/***/ }),

/***/ "./src/app/new-movie/new-movie.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1tb3ZpZS9uZXctbW92aWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.ts ***!
  \**************************************************/
/*! exports provided: NewMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMovieComponent", function() { return NewMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let NewMovieComponent = class NewMovieComponent {
    constructor(http, baseUrl, formBuilder, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.genre = ['comedy', 'adventure', 'animation', 'action', ' drama', 'thriller', '  horror', 'crime', 'fantasy'];
        this.watched = ['yes', 'no'];
        this.form = this.formBuilder.group({
            id: 0,
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('action'),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            releaseYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            director: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            addedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            watched: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('yes')
        });
    }
    onSubmit() {
        this.http.post('https://localhost:5001/api/movieItems', this.form.value).subscribe(data => {
            console.log(data);
            this.router.navigate(['/fetch-data']);
        });
    }
};
NewMovieComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NewMovieComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-new-movie',
        template: __importDefault(__webpack_require__(/*! raw-loader!./new-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-movie/new-movie.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./new-movie.component.css */ "./src/app/new-movie/new-movie.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NewMovieComponent);

var Genre;
(function (Genre) {
    Genre[Genre["comedy"] = 1] = "comedy";
    Genre[Genre["adventure"] = 2] = "adventure";
    Genre[Genre["animation"] = 3] = "animation";
    Genre[Genre["action"] = 4] = "action";
    Genre[Genre["drama"] = 5] = "drama";
    Genre[Genre["thriller"] = 6] = "thriller";
    Genre[Genre["horror"] = 7] = "horror";
    Genre[Genre["crime"] = 8] = "crime";
    Genre[Genre["fantasy"] = 9] = "fantasy";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/update-comment/update-comment.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-comment/update-comment.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1jb21tZW50L3VwZGF0ZS1jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/update-comment/update-comment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-comment/update-comment.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCommentComponent", function() { return UpdateCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let UpdateCommentComponent = class UpdateCommentComponent {
    constructor() { }
    ngOnInit() {
    }
};
UpdateCommentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-update-comment',
        template: __importDefault(__webpack_require__(/*! raw-loader!./update-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-comment/update-comment.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./update-comment.component.css */ "./src/app/update-comment/update-comment.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], UpdateCommentComponent);



/***/ }),

/***/ "./src/app/update-movie/update-movie.component.css":
/*!*********************************************************!*\
  !*** ./src/app/update-movie/update-movie.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1tb3ZpZS91cGRhdGUtbW92aWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/update-movie/update-movie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/update-movie/update-movie.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMovieComponent", function() { return UpdateMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let UpdateMovieComponent = class UpdateMovieComponent {
    constructor(http, baseUrl, route, formBuilder, router) {
        this.http = http;
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.genre = ['comedy', 'adventure', 'animation', 'action', ' drama', 'thriller', '  horror', 'crime', 'fantasy'];
        this.watched = ['yes', 'no'];
        this.titleOperations = 'create';
        this.httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        //const id = parseInt(this.route.snapshot.paramMap.get('id'));
        http.get(baseUrl + 'api/MovieItems/' + this.id).subscribe(result => {
            this.movie = result;
            console.log(this.movie);
        }, error => console.error(error));
        this.form = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('action'),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            releaseYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            director: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            addedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            watched: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('yes')
        });
    }
    onSubmit() {
        this.http.put('https://localhost:5001/api/movieItems' + '/' + this.id, this.form.value, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        }).subscribe(data => {
            console.log(data);
            this.router.navigate(['/fetch-data']);
        });
    }
};
UpdateMovieComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UpdateMovieComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-update-movie',
        template: __importDefault(__webpack_require__(/*! raw-loader!./update-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-movie/update-movie.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./update-movie.component.css */ "./src/app/update-movie/update-movie.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UpdateMovieComponent);

var Genre;
(function (Genre) {
    Genre[Genre["comedy"] = 1] = "comedy";
    Genre[Genre["adventure"] = 2] = "adventure";
    Genre[Genre["animation"] = 3] = "animation";
    Genre[Genre["action"] = 4] = "action";
    Genre[Genre["drama"] = 5] = "drama";
    Genre[Genre["thriller"] = 6] = "thriller";
    Genre[Genre["horror"] = 7] = "horror";
    Genre[Genre["crime"] = 8] = "crime";
    Genre[Genre["fantasy"] = 9] = "fantasy";
})(Genre || (Genre = {}));
class MovieItem {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\C#Projects\MovieApp\MovieApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map