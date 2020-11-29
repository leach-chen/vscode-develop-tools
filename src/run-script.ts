import { existsSync } from "fs";
import { Uri, window, workspace } from "vscode";

/**
 * 获取默认对象
 */
const getDefaultObject: any = () => {
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
const getPakageJsonObj = async (wok: any) => {
  let readPakageJsonObj: any;
  const packageJsonPath = `${wok}/package.json`;
  //const checkPkgManager = existsSync(`${wok}/package-lock.json`);
  //const useNpm = checkPkgManager ? true : false;
  const isFileExists = existsSync(`${wok}/package.json`);
  if (isFileExists) {
    let readPakageJson = await workspace.fs.readFile(Uri.file(packageJsonPath));
    try {
      readPakageJsonObj = JSON.parse(readPakageJson.toString());
    } catch (e) {
      console.log(e);
    }
  }
  return readPakageJsonObj;
};

/**
 * 获取developconfig.json对象
 * @param wok
 */
const getDevelopconfigJsonObj = async (wok: any) => {
  let readDevelopconfigJsonObj: any;
  const developconfigJsonPath = `${wok}/dtconfig.json`;
  const isFileExists = existsSync(`${wok}/dtconfig.json`);
  if (isFileExists) {
    let developconfigJson = await workspace.fs.readFile(
      Uri.file(developconfigJsonPath)
    );
    try {
      readDevelopconfigJsonObj = JSON.parse(developconfigJson.toString());
    } catch (e) {
      console.log(e);
    }
  }
  return readDevelopconfigJsonObj;
};

export async function showScripts() {
  const wok = workspace.rootPath;

  const NEWCMD_SPLIT = "newcmd"; //指令前面添加该指令用于判定是否需要新建命令行来执行

  let packageJsonObj: any = await getPakageJsonObj(wok); //package.json对象
  let developconfigJsonObj: any = await getDevelopconfigJsonObj(wok); //自定义命令对象
  const runCommand = "npm";

  let splitObject1 = {
    "--------------------------------------------------------------------------------------------------------------":
      ""
  };
  let splitObject2 = {
    "---------------------------------------------------------------------------------------------------------------":
      ""
  };

  let defaultObject = getDefaultObject(); //默认菜单内容对象
  let scriptsObj = packageJsonObj?.scripts; //运行命令的对象
  let execCmdObj = developconfigJsonObj?.execCmd; //新建命令行对象

  let execObj: any = {};
  if (defaultObject && Object.values(defaultObject).length > 0) {
    execObj = defaultObject;
  }

  if (
    defaultObject &&
    Object.values(defaultObject).length > 0 &&
    scriptsObj &&
    Object.values(scriptsObj).length > 0
  ) {
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
    window.showQuickPick(Object.keys(execObj)).then(async response => {
      if (response) {
        if (
          window.terminals.length > 0 &&
          execObj[response].slice(0, NEWCMD_SPLIT.length) != NEWCMD_SPLIT
        ) {
          window.terminals[0].sendText(execObj[response]);
        } else {
          const terminal = window.createTerminal({
            cwd: wok,
            hideFromUser: false,
            name: response
          });
          if (!(response in splitObject1) && !(response in splitObject2)) {
            terminal.show();
            setTimeout(() => {
              let runExecCmd = "";
              if (
                (defaultObject && response in defaultObject) ||
                (execCmdObj && response in execCmdObj)
              ) {
                let cmd = execObj[response];
                if (cmd.slice(0, NEWCMD_SPLIT.length) == NEWCMD_SPLIT) {
                  terminal.sendText(
                    cmd.slice(NEWCMD_SPLIT.length + 1, cmd.length)
                  );
                } else {
                  runExecCmd = cmd;
                }
              } else {
                runExecCmd = `${runCommand} run ${response}`;
              }
              terminal.sendText(runExecCmd);
            }, 500);
          }
        }
      }
    });
  } else {
    window.showErrorMessage(
      "package.json or developconfig.json not found in workspace"
    );
  }
}
