"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var process_1 = require("../../services/process");
var router = express_1.default.Router();
router.get('/', process_1.process);
exports.default = router;
