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
const web_tools_1 = __webpack_require__(4);
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
    let runWebTools = vscode.commands.registerCommand("vscode-develop-tools.goWebTools", uri => {
        web_tools_1.goWebTools(context, uri);
    });
    context.subscriptions.push(runScripts);
    context.subscriptions.push(runWebTools);
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
exports.showScripts = exports.getDevelopconfigJsonObj = void 0;
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
exports.getDevelopconfigJsonObj = getDevelopconfigJsonObj;
function showScripts() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const wok = vscode_1.workspace.rootPath;
        const NEWCMD_SPLIT = "newcmd"; //指令前面添加该指令用于判定是否需要新建命令行来执行
        let packageJsonObj = yield getPakageJsonObj(wok); //package.json对象
        let developconfigJsonObj = yield exports.getDevelopconfigJsonObj(wok); //自定义命令对象
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
        if (((_a = vscode_1.window.terminals) === null || _a === void 0 ? void 0 : _a.length) == 0) {
            vscode_1.window.createTerminal({
                cwd: wok,
                hideFromUser: false,
                name: "cmd"
            });
        }
        if (Object.values(execObj).length > 0) {
            vscode_1.window.showQuickPick(Object.keys(execObj)).then((response) => __awaiter(this, void 0, void 0, function* () {
                var _b;
                if (response) {
                    if (((_b = vscode_1.window.terminals) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
                        execObj[response].slice(0, NEWCMD_SPLIT.length) != NEWCMD_SPLIT &&
                        !(scriptsObj && response in scriptsObj)) {
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
            vscode_1.window.showErrorMessage("package.json or dtconfig.json not found in workspace");
        }
    });
}
exports.showScripts = showScripts;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
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
exports.goWebTools = void 0;
const vscode_1 = __webpack_require__(1);
const run_script_1 = __webpack_require__(2);
const util = __webpack_require__(5);
const vscode = __webpack_require__(1);
const path = __webpack_require__(6);
const fs = __webpack_require__(3);
const getWebViewContent = (context, templatePath) => {
    const resourcePath = util.getExtensionFileAbsolutePath(context, templatePath);
    const dirPath = path.dirname(resourcePath);
    let html = fs.readFileSync(resourcePath, "utf-8");
    console.log(html);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa：" + resourcePath);
    // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
    html = html.replace(/(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g, (m, $1, $2) => {
        return ($1 +
            vscode.Uri.file(path.resolve(dirPath, $2))
                .with({ scheme: "vscode-resource" })
                .toString() +
            '"');
    });
    console.log(html);
    return html;
};
const goWebTools = (context, uri) => {
    //const projectPath = workspace.rootPath;
    //if (!projectPath) return;
    try {
        const panel = vscode.window.createWebviewPanel("WebTools", // viewType
        "Tools Bundle", // 视图标题
        1, // 显示在编辑器的哪个部位
        {
            enableScripts: true,
            retainContextWhenHidden: true,
        });
        //let global = { projectPath, panel };
        panel.webview.html = getWebViewContent(context, "src/webtools/index.html");
        panel.webview.onDidReceiveMessage((message) => { }, undefined, context.subscriptions);
        setTimeout(() => {
            getIframeData(panel);
        }, 1000);
    }
    catch (e) {
        console.log(e);
    }
};
exports.goWebTools = goWebTools;
const getIframeData = (panel) => __awaiter(void 0, void 0, void 0, function* () {
    const wok = vscode_1.workspace.rootPath;
    let developconfigJsonObj = yield run_script_1.getDevelopconfigJsonObj(wok); //自定义命令对象
    let previewPageObj = developconfigJsonObj === null || developconfigJsonObj === void 0 ? void 0 : developconfigJsonObj.previewPage;
    panel.webview.postMessage({ text: '你好，我是小茗同学！' });
    for (var key in previewPageObj) {
        const value = previewPageObj[key];
        let content = yield fs.readFileSync(wok + "/" + value, "utf-8");
        previewPageObj[key] = content;
    }
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    console.log(previewPageObj);
    panel.webview.postMessage({ content: previewPageObj });
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtensionFileAbsolutePath = exports.getProjectPath = void 0;
const fs_1 = __webpack_require__(3);
const vscode_1 = __webpack_require__(1);
const path = __webpack_require__(6);
/**
 * 获取当前所在工程根目录，有3种使用方法：<br>
 * getProjectPath(uri) uri 表示工程内某个文件的路径<br>
 * getProjectPath(document) document 表示当前被打开的文件document对象<br>
 * getProjectPath() 会自动从 activeTextEditor 拿document对象，如果没有拿到则报错
 * @param {*} document
 */
const getProjectPath = (document) => {
    var _a;
    if (!document) {
        document = vscode_1.window.activeTextEditor
            ? vscode_1.window.activeTextEditor.document
            : null;
    }
    if (!document) {
        //this.showError("当前激活的编辑器不是文件或者没有文件被打开！");
        return "11";
    }
    const currentFile = (document.uri ? document.uri : document).fsPath;
    let projectPath = null;
    let workspaceFolders = (_a = vscode_1.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a.map(item => item.uri.path);
    // 由于存在Multi-root工作区，暂时没有特别好的判断方法，先这样粗暴判断
    // 如果发现只有一个根文件夹，读取其子文件夹作为 workspaceFolders
    if ((workspaceFolders === null || workspaceFolders === void 0 ? void 0 : workspaceFolders.length) == 1 &&
        workspaceFolders[0] === vscode_1.workspace.rootPath) {
        const rootPath = workspaceFolders[0];
        var files = fs_1.readdirSync(rootPath);
        workspaceFolders = files
            .filter((name) => !/^\./g.test(name))
            .map((name) => path.resolve(rootPath, name));
        // vscode.workspace.rootPath会不准确，且已过时
        // return vscode.workspace.rootPath + '/' + this._getProjectName(vscode, document);
    }
    workspaceFolders === null || workspaceFolders === void 0 ? void 0 : workspaceFolders.forEach((folder) => {
        if (currentFile.indexOf(folder) === 0) {
            projectPath = folder;
        }
    });
    if (!projectPath) {
        //this.showError("获取工程根路径异常！");
        return "22";
    }
    return projectPath;
};
exports.getProjectPath = getProjectPath;
// /**
//  * 获取当前工程名
//  */
// getProjectName: function (projectPath: any) {
//   return path.basename(projectPath);
// },
// getPluginPath() {},
// /**
//  * 将一个单词首字母大写并返回
//  * @param {*} word 某个字符串
//  */
// upperFirstLetter: function (word: any) {
//   return (word || "").replace(/^\w/, m => m.toUpperCase());
// },
// /**
//  * 将一个单词首字母转小写并返回
//  * @param {*} word 某个字符串
//  */
// lowerFirstLeter: function (word: any) {
//   return (word || "").replace(/^\w/, m => m.toLowerCase());
// },
// /**
//  * 全局日志开关，发布时可以注释掉日志输出
//  */
// log: function (...args: any) {
//   console.log(...args);
// },
// /**
//  * 全局日志开关，发布时可以注释掉日志输出
//  */
// error: function (...args: any) {
//   console.error(...args);
// },
// /**
//  * 弹出错误信息
//  */
// showError: function (info: any) {
//   vscode.window.showErrorMessage(info);
// },
// /**
//  * 弹出提示信息
//  */
// showInfo: function (info: any) {
//   vscode.window.showInformationMessage(info);
// },
// findStrInFolder: function (folderPath: any, str: any) {},
// /**
//  * 从某个文件里面查找某个字符串，返回第一个匹配处的行与列，未找到返回第一行第一列
//  * @param filePath 要查找的文件
//  * @param reg 正则对象，最好不要带g，也可以是字符串
//  */
// findStrInFile: function (filePath: any, reg: string | RegExp) {
//   const content = fs.readFileSync(filePath, "utf-8");
//   reg = typeof reg === "string" ? new RegExp(reg, "m") : reg;
//   // 没找到直接返回
//   if (content.search(reg) < 0) return { row: 0, col: 0 };
//   const rows = content.split(os.EOL);
//   // 分行查找只为了拿到行
//   for (let i = 0; i < rows.length; i++) {
//     let col = rows[i].search(reg);
//     if (col >= 0) {
//       return { row: i, col };
//     }
//   }
//   return { row: 0, col: 0 };
// },
// /**
//  * 获取某个字符串在文件里第一次出现位置的范围，
//  */
// getStrRangeInFile: function (filePath: any, str: string | RegExp | any[]) {
//   var pos = this.findStrInFile(filePath, str);
//   return new vscode.Range(
//     new vscode.Position(pos.row, pos.col),
//     new vscode.Position(pos.row, pos.col + str.length)
//   );
// },
// /**
//  * 简单的检测版本大小
//  */
// checkVersion: function (
//   version1: string | number,
//   version2: string | number
// ) {
//   version1 = parseInt(version1.replace(/\./g, ""));
//   version2 = parseInt(version2.replace(/\./g, ""));
//   return version1 > version2;
// },
/**
 * 获取某个扩展文件绝对路径
 * @param context 上下文
 * @param relativePath 扩展中某个文件相对于根目录的路径，如 images/test.jpg
 */
const getExtensionFileAbsolutePath = (context, relativePath) => {
    return path.join(context.extensionPath, relativePath);
};
exports.getExtensionFileAbsolutePath = getExtensionFileAbsolutePath;
// /**
//  * 获取某个扩展文件相对于webview需要的一种特殊路径格式
//  * 形如：vscode-resource:/Users/toonces/projects/vscode-cat-coding/media/cat.gif
//  * @param context 上下文
//  * @param relativePath 扩展中某个文件相对于根目录的路径，如 images/test.jpg
//  */
// getExtensionFileVscodeResource: function (
//   context: { extensionPath: any },
//   relativePath: any
// ) {
//   const diskPath = vscode.Uri.file(
//     path.join(context.extensionPath, relativePath)
//   );
//   return diskPath.with({ scheme: "vscode-resource" }).toString();
// },
// /**
//  * 在Finder中打开某个文件或者路径
//  */
// openFileInFinder: function (filePath: string) {
//   if (!fs.existsSync(filePath)) {
//     this.showError("文件不存在：" + filePath);
//   }
//   // 如果是目录，直接打开就好
//   if (fs.statSync(filePath).isDirectory()) {
//     exec(`open ${filePath}`);
//   } else {
//     // 如果是文件，要分开处理
//     const fileName = path.basename(filePath);
//     filePath = path.dirname(filePath);
//     // 这里有待完善，还不知道如何finder中如何选中文件
//     exec(`open ${filePath}`);
//   }
// },
// /**
//  * 在vscode中打开某个文件
//  * @param {*} path 文件绝对路径
//  * @param {*} text 可选，如果不为空，则选中第一处匹配的对应文字
//  */
// openFileInVscode: function (path: any, text: string | RegExp | any[]) {
//   let options = undefined;
//   if (text) {
//     const selection = this.getStrRangeInFile(path, text);
//     options = { selection };
//   }
//   vscode.window.showTextDocument(vscode.Uri.file(path), options);
// },
// /**
//  * 用JD-GUI打开jar包
//  */
// openJarByJdGui: function (jarPath: string) {
//   // 如何选中文件有待完善
//   const jdGuiPath = vscode.workspace
//     .getConfiguration()
//     .get("eggHelper.jdGuiPath");
//   if (!jdGuiPath) {
//     this.showError("JD-GUI路径不能为空！");
//     return;
//   }
//   if (!fs.existsSync(jdGuiPath)) {
//     this.showError(
//       "您还没有安装JD-GUI，请安装完后到vscode设置里面找到HSF助手并进行路径配置。"
//     );
//     return;
//   }
//   if (!fs.existsSync(jarPath)) {
//     this.showError("jar包未找到：" + jarPath);
//     return;
//   }
//   exec(`open ${jarPath} -a ${jdGuiPath}`);
// },
// /**
//  * 使用默认浏览器中打开某个URL
//  */
// openUrlInBrowser: function (url: any) {
//   exec(`open '${url}'`);
// },
// /**
//  * 递归遍历清空某个资源的require缓存
//  * @param {*} absolutePath
//  */
// clearRequireCache(absolutePath: string) {
//   const root = require.cache[absolutePath];
//   if (!root) return;
//   if (root.children) {
//     // 如果有子依赖项，先清空依赖项的缓存
//     root.children.forEach(item => {
//       this.clearRequireCache(item.id);
//     });
//   }
//   delete require.cache[absolutePath];
// },
// /**
//  * 动态require，和普通require不同的是，加载之前会先尝试删除缓存
//  * @param {*} modulePath
//  */
// dynamicRequire(modulePath: string) {
//   this.clearRequireCache(modulePath);
//   return require(modulePath);
// },
// /**
//  * 读取properties文件
//  * @param {*} filePath
//  */
// readProperties(filePath: string) {
//   const content = fs.readFileSync(filePath, "utf-8");
//   let rows = content.split(os.EOL);
//   rows = rows.filter((row: string) => row && row.trim() && !/^#/.test(row));
//   const result = {};
//   rows.forEach((row: string) => {
//     let temp = row.split("=");
//     result[temp[0].trim()] = temp[1].trim();
//   });
//   return result;
// },
// /**
//  * 比较2个对象转JSON字符串后是否完全一样
//  * 特别注意，由于JS遍历对象的无序性（部分浏览器是按照添加顺序遍历的）导致同样的对象，
//  * 转成JSON串之后反而不一样，所以这里采用其它方式实现。
//  * @param {*} obj1
//  * @param {*} obj2
//  */
// jsonEquals(obj1: any, obj2: any) {
//   let s1 = this.formatToSpecialJSON(obj1, "", true);
//   let s2 = this.formatToSpecialJSON(obj2, "", true);
//   return s1 === s2;
// }


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=extension.js.map