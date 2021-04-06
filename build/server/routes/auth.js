"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    if (req.session.hasAuth) {
        if (req.session.redirect) {
            res.redirect(req.session.redirect);
        }
        else {
            res.redirect('/profile');
        }
    }
    res.redirect('/auth/signin');
});
router.post('/signin', function (req, res) {
});
router.post('/signup', function (req, res) {
});
exports.default = router;
