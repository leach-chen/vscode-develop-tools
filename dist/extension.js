module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
const run_script_1 = __webpack_require__(2);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-develop-tools" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let runScripts = vscode.commands.registerCommand("vscode-develop-tools.runScripts", () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        //   vscode.window.showInformationMessage(
        //     "Hello World from vscode-develop-tools!"
        //   );
        run_script_1.showScripts();
    });
    context.subscriptions.push(runScripts);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showScripts = void 0;
const fs_1 = __webpack_require__(3);
const vscode_1 = __webpack_require__(1);
function showScripts() {
    return __awaiter(this, void 0, void 0, function* () {
        const wok = vscode_1.workspace.rootPath;
        if (wok) {
            const packageJsonPath = `${wok}/package.json`;
            const checkPkgManager = fs_1.existsSync(`${wok}/package-lock.json`);
            const useNpm = checkPkgManager ? true : false;
            const runCommand = useNpm ? "npm" : "yarn";
            const readPakageJson = yield vscode_1.workspace.fs.readFile(vscode_1.Uri.file(packageJsonPath));
            let packageJsonObj = JSON.parse(readPakageJson.toString());
            let splitObject1 = {
                "--------------------------------------------------------------------------------------------------------------": ""
            };
            let splitObject2 = {
                "---------------------------------------------------------------------------------------------------------------": ""
            };
            let notCreateTerminal = ["Show Android Menu"]; //不需要创建命令行的指令
            let defaultObject = {
                "Android Console Log": "react-native log-android",
                "IOS Console Log": "react-native log-ios",
                "Show Android Menu": "adb shell input keyevent 82",
                "Database Forward": "adb forward tcp:8585 tcp:8585"
            };
            let scriptsObj = packageJsonObj.scripts;
            let execCmdObj = packageJsonObj.execCmd;
            let execCmdNewObj = packageJsonObj.execCmdNew;
            packageJsonObj = Object.assign(defaultObject, splitObject1);
            let count = 0;
            if (execCmdObj && Object.values(execCmdObj).length > 0) {
                packageJsonObj = Object.assign(packageJsonObj, execCmdObj);
                count++;
            }
            if (execCmdNewObj && Object.values(execCmdNewObj).length > 0) {
                packageJsonObj = Object.assign(packageJsonObj, execCmdNewObj);
                count++;
            }
            if (count > 0) {
                packageJsonObj = Object.assign(packageJsonObj, splitObject2);
            }
            packageJsonObj = Object.assign(packageJsonObj, scriptsObj);
            vscode_1.window.showQuickPick(Object.keys(packageJsonObj)).then((response) => __awaiter(this, void 0, void 0, function* () {
                if (response) {
                    if ((notCreateTerminal.indexOf(response) >= 0 ||
                        response in execCmdObj) &&
                        vscode_1.window.terminals.length > 0) {
                        vscode_1.window.terminals[0].sendText(defaultObject[response]);
                    }
                    else {
                        const terminal = vscode_1.window.createTerminal({
                            cwd: wok,
                            hideFromUser: false,
                            name: response
                        });
                        if (!(response in splitObject1) && !(response in splitObject2)) {
                            terminal.show();
                            setTimeout(() => {
                                if (response in defaultObject || response in execCmdNewObj) {
                                    terminal.sendText(defaultObject[response]);
                                }
                                else {
                                    terminal.sendText(`${runCommand} run ${response}`);
                                }
                            }, 500);
                        }
                    }
                }
            }));
        }
        else {
            vscode_1.window.showErrorMessage("Workspace not found");
        }
    });
}
exports.showScripts = showScripts;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);
//# sourceMappingURL=extension.js.map