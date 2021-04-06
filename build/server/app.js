"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var dotenv = require('dotenv-flow').config({ silent: true });
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path');
var fs = require('fs');
var app = express_1.default();
//Session
app.use(express_session_1.default({
    resave: false,
    saveUninitialized: true,
    secret: require('crypto').randomBytes(64).toString('hex'),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express_1.default.static(path.join(__dirname, '../../dist')));
//Path router
function setupRoutes(entry) {
    var _this = this;
    console.log("Entry:", path.join(__dirname, entry));
    fs.readdirSync(path.join(__dirname, entry)).forEach(function (route) { return __awaiter(_this, void 0, void 0, function () {
        var hasSubRoute, uri, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    hasSubRoute = (route.lastIndexOf('.') <= 0);
                    if (!hasSubRoute) return [3 /*break*/, 1];
                    console.log("Entering new route:", path.join(entry, route));
                    setupRoutes(path.join(entry, route));
                    return [3 /*break*/, 3];
                case 1:
                    route = path.join(entry, route);
                    route = route.substr(0, route.lastIndexOf('.'));
                    uri = route.substr(route.indexOf('/'));
                    console.log("Applying route: \u001B[33m[\u001B[34m" + uri + "\u001B[0m => \u001B[34m./" + route + "\u001B[33m]");
                    _b = (_a = app).use;
                    _c = ["" + uri];
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("./" + route)); })];
                case 2:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    _d.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
setupRoutes('routes');
app.use('/*', function (req, res) { return res.sendFile(path.join(__dirname, '../../dist/index.html')); });
exports.default = app;
