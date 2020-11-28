import { existsSync } from "fs";
import { Uri, window, workspace } from "vscode";

export async function showScripts() {
  const wok = workspace.rootPath;

  if (wok) {
    const packageJsonPath = `${wok}/package.json`;
    const checkPkgManager = existsSync(`${wok}/package-lock.json`);
    const useNpm = checkPkgManager ? true : false;
    const runCommand = useNpm ? "npm" : "yarn";
    const readPakageJson = await workspace.fs.readFile(
      Uri.file(packageJsonPath)
    );

    let packageJsonObj = JSON.parse(readPakageJson.toString());

    let splitObject1 = {
      "--------------------------------------------------------------------------------------------------------------":
        ""
    };
    let splitObject2 = {
      "---------------------------------------------------------------------------------------------------------------":
        ""
    };

    let notCreateTerminal: any = ["Show Android Menu"]; //不需要创建命令行的指令
    let defaultObject: any = {
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

    window.showQuickPick(Object.keys(packageJsonObj)).then(async response => {
      if (response) {
        if (
          (notCreateTerminal.indexOf(response) >= 0 ||
            response in execCmdObj) &&
          window.terminals.length > 0
        ) {
          window.terminals[0].sendText(defaultObject[response]);
        } else {
          const terminal = window.createTerminal({
            cwd: wok,
            hideFromUser: false,
            name: response
          });
          if (!(response in splitObject1) && !(response in splitObject2)) {
            terminal.show();
            setTimeout(() => {
              if (response in defaultObject || response in execCmdNewObj) {
                terminal.sendText(defaultObject[response]);
              } else {
                terminal.sendText(`${runCommand} run ${response}`);
              }
            }, 500);
          }
        }
      }
    });
  } else {
    window.showErrorMessage("Workspace not found");
  }
}
