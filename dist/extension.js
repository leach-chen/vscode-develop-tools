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
/**
 * 获取默认对象
 */
const getDefaultObject = () => {
    /* let defaultObject: any = {
      "Android Console Log": "newcmd react-native log-android",
      "IOS Console Log": "newcmd react-native log-ios",
      "Show Android Menu": "adb shell input keyevent 82",
      "Database Forward": "adb forward tcp:8585 tcp:8585"
    };
    return defaultObject; */
    return {};
};
/**
 * 获取package.json对象
 * @param wok
 */
const getPakageJsonObj = (wok) => __awaiter(void 0, void 0, void 0, function* () {
    let readPakageJsonObj;
    const packageJsonPath = `${wok}/package.json`;
    //const checkPkgManager = existsSync(`${wok}/package-lock.json`);
    //const useNpm = checkPkgManager ? true : false;
    const isFileExists = fs_1.existsSync(`${wok}/package.json`);
    if (isFileExists) {
        let readPakageJson = yield vscode_1.workspace.fs.readFile(vscode_1.Uri.file(packageJsonPath));
        try {
            readPakageJsonObj = JSON.parse(readPakageJson.toString());
        }
        catch (e) {
            console.log(e);
        }
    }
    return readPakageJsonObj;
});
/**
 * 获取developconfig.json对象
 * @param wok
 */
const getDevelopconfigJsonObj = (wok) => __awaiter(void 0, void 0, void 0, function* () {
    let readDevelopconfigJsonObj;
    const developconfigJsonPath = `${wok}/dtconfig.json`;
    const isFileExists = fs_1.existsSync(`${wok}/dtconfig.json`);
    if (isFileExists) {
        let developconfigJson = yield vscode_1.workspace.fs.readFile(vscode_1.Uri.file(developconfigJsonPath));
        try {
            readDevelopconfigJsonObj = JSON.parse(developconfigJson.toString());
        }
        catch (e) {
            console.log(e);
        }
    }
    return readDevelopconfigJsonObj;
});
function showScripts() {
    return __awaiter(this, void 0, void 0, function* () {
        const wok = vscode_1.workspace.rootPath;
        const NEWCMD_SPLIT = "newcmd"; //指令前面添加该指令用于判定是否需要新建命令行来执行
        let packageJsonObj = yield getPakageJsonObj(wok); //package.json对象
        let developconfigJsonObj = yield getDevelopconfigJsonObj(wok); //自定义命令对象
        const runCommand = "npm";
        let splitObject1 = {
            "--------------------------------------------------------------------------------------------------------------": ""
        };
        let splitObject2 = {
            "---------------------------------------------------------------------------------------------------------------": ""
        };
        let defaultObject = getDefaultObject(); //默认菜单内容对象
        let scriptsObj = packageJsonObj === null || packageJsonObj === void 0 ? void 0 : packageJsonObj.scripts; //运行命令的对象
        let execCmdObj = developconfigJsonObj === null || developconfigJsonObj === void 0 ? void 0 : developconfigJsonObj.execCmd; //新建命令行对象
        let execObj = {};
        if (defaultObject && Object.values(defaultObject).length > 0) {
            execObj = defaultObject;
        }
        if (defaultObject &&
            Object.values(defaultObject).length > 0 &&
            scriptsObj &&
            Object.values(scriptsObj).length > 0) {
            execObj = Object.assign(execObj, splitObject1); //默认命令行与自定义命令之间添加分割线
        }
        let count = 0;
        if (execCmdObj && Object.values(execCmdObj).length > 0) {
            execObj = Object.assign(execObj, execCmdObj); //添加自定义命令对象，不新建命令行窗口
            count++;
        }
        if (scriptsObj && Object.values(scriptsObj).length > 0) {
            if (count > 0) {
                execObj = Object.assign(execObj, splitObject2); //如果存在自定义命令行，则添加分割线
            }
            execObj = Object.assign(execObj, scriptsObj);
        }
        if (Object.values(execObj).length > 0) {
            vscode_1.window.showQuickPick(Object.keys(execObj)).then((response) => __awaiter(this, void 0, void 0, function* () {
                if (response) {
                    if (vscode_1.window.terminals.length > 0 &&
                        execObj[response].slice(0, NEWCMD_SPLIT.length) != NEWCMD_SPLIT) {
                        vscode_1.window.terminals[0].sendText(execObj[response]);
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
                                let runExecCmd = "";
                                if ((defaultObject && response in defaultObject) ||
                                    (execCmdObj && response in execCmdObj)) {
                                    let cmd = execObj[response];
                                    if (cmd.slice(0, NEWCMD_SPLIT.length) == NEWCMD_SPLIT) {
                                        terminal.sendText(cmd.slice(NEWCMD_SPLIT.length + 1, cmd.length));
                                    }
                                    else {
                                        runExecCmd = cmd;
                                    }
                                }
                                else {
                                    runExecCmd = `${runCommand} run ${response}`;
                                }
                                terminal.sendText(runExecCmd);
                            }, 500);
                        }
                    }
                }
            }));
        }
        else {
            vscode_1.window.showErrorMessage("package.json or developconfig.json not found in workspace");
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