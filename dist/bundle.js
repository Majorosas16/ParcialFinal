/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/form/form.ts":
/*!*************************************!*\
  !*** ./src/components/form/form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst firebase_1 = __webpack_require__(/*! ../../utils/firebase */ \"./src/utils/firebase.ts\");\nconst addpr = {\n    title: '',\n    date: '',\n    location: '',\n    image: '',\n    attendees: '',\n};\nclass Add extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    changeTitle(e) {\n        addpr.title = e.target.value;\n    }\n    changeDate(e) {\n        addpr.date = e.target.value;\n    }\n    changeLocation(e) {\n        addpr.location = e.target.value;\n    }\n    changeAtendees(e) {\n        addpr.attendees = e.target.value;\n    }\n    changeImage(e) {\n        addpr.image = e.target.value;\n    }\n    submitForm() {\n        (0, firebase_1.addProduct)(addpr);\n        alert('Evento creado');\n        // dispatch(navigate(Screens.ADMIN))\n    }\n    render() {\n        var _a, _b, _c, _d, _e, _f;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <div>\r\n                    <input type=\"text\" id=\"title\" placeholder=\"Enter title\">\r\n                     <input type=\"text\" id=\"date\" placeholder=\"Enter date\">\r\n                      <input type=\"text\" id=\"location\" placeholder=\"Enter location\" >\r\n                       <input type=\"text\" id=\"imageLink\" placeholder=\"Enter image URL\">\r\n                       <input type=\"text\" id=\"at\" placeholder=\"Enter attendees\">\r\n                    <button id=\"submitButton\" type=\"submit\">Add Product</button>\r\n                </div>\r\n            `;\n            const buttonSubmit = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\"#submitButton\");\n            buttonSubmit.addEventListener('click', this.submitForm);\n            const title = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(\"#title\");\n            title.addEventListener('change', this.changeTitle);\n            const loc = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(\"#location\");\n            loc.addEventListener('change', this.changeLocation);\n            const date = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector(\"#date\");\n            date.addEventListener('change', this.changeDate);\n            const at = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector(\"#at\");\n            at.addEventListener('change', this.changeAtendees);\n            const image = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector(\"#imageLink\");\n            image.addEventListener('change', this.changeImage);\n        }\n    }\n}\ncustomElements.define(\"event-form\", Add);\nexports[\"default\"] = Add;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/form/form.ts?");

/***/ }),

/***/ "./src/firebaseConfig.ts":
/*!*******************************!*\
  !*** ./src/firebaseConfig.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.firebaseConfig = void 0;\nexports.firebaseConfig = {\n    apiKey: \"AIzaSyAPJpVaWLLIM4su6eWfzo5KD9taxDwWpz8\",\n    authDomain: \"desespero-55ca6.firebaseapp.com\",\n    projectId: \"desespero-55ca6\",\n    storageBucket: \"desespero-55ca6.firebasestorage.app\",\n    messagingSenderId: \"21928754986\",\n    appId: \"1:21928754986:web:1d4010b1a8568644706853\",\n    measurementId: \"G-STSQ8GX7P3\"\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/firebaseConfig.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./screens/admin */ \"./src/screens/admin.ts\");\nconst store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\nconst store_2 = __webpack_require__(/*! ./types/store */ \"./src/types/store.ts\");\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0, store_1.addObserver)(this);\n    }\n    connectedCallback() {\n        console.log('screen', store_1.appState.screen);\n        this.render();\n    }\n    render() {\n        var _a, _b, _c;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            switch (store_1.appState.screen) {\n                case store_2.Screens.EDIT:\n                    const edit = this.ownerDocument.createElement('app-edit');\n                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(edit);\n                    break;\n                case store_2.Screens.ADMIN:\n                    const admin = this.ownerDocument.createElement('app-admin');\n                    (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(admin);\n                    break;\n                case store_2.Screens.USER:\n                    const modi = this.ownerDocument.createElement('app-modi');\n                    (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(modi);\n                    break;\n                default:\n                    break;\n            }\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/admin.ts":
/*!******************************!*\
  !*** ./src/screens/admin.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../components/form/form */ \"./src/components/form/form.ts\");\nclass AddEvent extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\r\n            <p>Formulario de eventos</p>\r\n        <event-form></event-form>\r\n        `;\n            }\n        });\n    }\n}\ncustomElements.define('app-admin', AddEvent);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/admin.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addObserver = exports.dispatch = exports.appState = void 0;\nconst storage_1 = __importStar(__webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\"));\nconst reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst emptyState = {\n    screen: store_1.Screens.ADMIN,\n    events: [],\n};\nexports.appState = storage_1.default.get({\n    key: storage_1.PersistanceKeys.STORE,\n    defaultValue: emptyState,\n});\nlet observers = [];\nconst persistStore = (state) => storage_1.default.set({ key: storage_1.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(exports.appState));\n    const newState = (0, reducer_1.reducer)(action, clone);\n    exports.appState = newState;\n    persistStore(newState);\n    notifyObservers();\n};\nexports.dispatch = dispatch;\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\nexports.addObserver = addObserver;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reducer = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case store_1.Actions.navigate:\n            return Object.assign(Object.assign({}, currentState), { screen: payload });\n        case store_1.Actions.GETPRODUCTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload });\n        default:\n            return currentState;\n    }\n};\nexports.reducer = reducer;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Actions = exports.Screens = exports.SomeActions = void 0;\nvar SomeActions;\n(function (SomeActions) {\n    SomeActions[\"X\"] = \"X\";\n})(SomeActions = exports.SomeActions || (exports.SomeActions = {}));\nvar Screens;\n(function (Screens) {\n    Screens[\"EDIT\"] = \"EDIT\";\n    Screens[\"USER\"] = \"USER\";\n    Screens[\"ADMIN\"] = \"ADMIN\";\n})(Screens = exports.Screens || (exports.Screens = {}));\nvar Actions;\n(function (Actions) {\n    Actions[\"navigate\"] = \"navigate\";\n    Actions[\"GETPRODUCTS\"] = \"GETPRODUCTS\";\n})(Actions = exports.Actions || (exports.Actions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/firebase.ts":
/*!*******************************!*\
  !*** ./src/utils/firebase.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteProduct = exports.editProduct = exports.getProduct = exports.addProduct = exports.getFirebaseInstance = void 0;\nconst firebaseConfig_1 = __webpack_require__(/*! ../firebaseConfig */ \"./src/firebaseConfig.ts\");\nlet db;\nlet auth;\nlet storage;\nconst getFirebaseInstance = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (!db) {\n        const { getFirestore } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const { initializeApp } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"node_modules_firebase_app_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\"));\n        const { getAuth } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_auth_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\"));\n        const { getStorage } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_storage_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\"));\n        const app = initializeApp(firebaseConfig_1.firebaseConfig);\n        db = getFirestore(app);\n        auth = getAuth(app);\n        storage = getStorage();\n    }\n    return { db, auth, storage };\n});\nexports.getFirebaseInstance = getFirebaseInstance;\nconst addProduct = (post) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { collection, addDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const where = collection(db, 'events');\n        const registerPost = {\n            image: post.image,\n            title: post.title,\n            datehour: post.datehour,\n            address: post.address,\n            peoplenumber: post.peoplenumber,\n        };\n        // Añadir el post y obtener la referencia del documento creado\n        const docRef = yield addDoc(where, registerPost);\n        console.log('Se añadió con éxito el post con ID:', docRef.id);\n        // Retorna el ID del documento creado\n        return docRef.id;\n    }\n    catch (error) {\n        console.error('Error al añadir el documento:', error);\n        throw error; // Lanzar el error para manejarlo en la llamada\n    }\n});\nexports.addProduct = addProduct;\nconst getProduct = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { collection, getDocs, query, orderBy } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const postsCollection = collection(db, 'events');\n        // Ordena los documentos por 'dateadded' en orden descendente\n        const postsQuery = query(postsCollection, orderBy('dateadded', 'desc'));\n        const querySnapshot = yield getDocs(postsQuery);\n        const data = [];\n        querySnapshot.forEach((doc) => {\n            const postData = doc.data();\n            postData.id = doc.id;\n            data.push(postData);\n        });\n        return data;\n    }\n    catch (error) {\n        console.error('Error obteniendo los documentos:', error);\n        return [];\n    }\n});\nexports.getProduct = getProduct;\nconst editProduct = (id, updatedFields) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { doc, updateDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        // Obtén la referencia al documento específico por ID\n        const docRef = doc(db, 'events', id);\n        // Actualiza los campos especificados\n        yield updateDoc(docRef, updatedFields);\n        console.log(`El documento con ID ${id} fue actualizado con éxito.`);\n        return true; // Retorna true si se actualizó correctamente\n    }\n    catch (error) {\n        console.error('Error al actualizar el documento:', error);\n        throw error; // Lanza el error para manejarlo en la llamada\n    }\n});\nexports.editProduct = editProduct;\nconst deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { db } = yield (0, exports.getFirebaseInstance)();\n        const { doc, deleteDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        // Crear referencia al documento específico\n        const docRef = doc(db, 'events', id);\n        // Eliminar el documento\n        yield deleteDoc(docRef);\n        console.log(`El producto con ID ${id} ha sido eliminado correctamente.`);\n    }\n    catch (error) {\n        console.error('Error al eliminar el producto de Firebase:', error);\n        throw error; // Relanzar el error para manejarlo en otros niveles\n    }\n});\nexports.deleteProduct = deleteProduct;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/firebase.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PersistanceKeys = void 0;\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys = exports.PersistanceKeys || (exports.PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\nexports[\"default\"] = {\n    get,\n    set,\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/storage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dca_scoffolding:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdca_scoffolding"] = self["webpackChunkdca_scoffolding"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;