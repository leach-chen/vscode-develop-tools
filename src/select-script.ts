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

    let notCreateTerminal: any = ["Show Android Menu"]; //不需要创建命令行的指令

    let addObject: any = {
      "Android Console Log": "react-native log-android",
      "IOS Console Log": "react-native log-ios",
      "Show Android Menu": "adb shell input keyevent 82"
      // "Database Forward": "adb forward tcp:8585 tcp:8585"
    };

    let scriptsObj = packageJsonObj.scripts;
    let runScriptsObj = packageJsonObj.runScripts;

    let splitObject1 = {
      "--------------------------------------------------------------------------------------------------------------":
        ""
    };
    let splitObject2 = {
      "---------------------------------------------------------------------------------------------------------------":
        ""
    };

    packageJsonObj = Object.assign(
      addObject,
      splitObject1,
      runScriptsObj,
      splitObject2,
      scriptsObj
    );

    window.showQuickPick(Object.keys(packageJsonObj)).then(async response => {
      if (response) {
        if (
          (notCreateTerminal.indexOf(response) >= 0 &&
            window.terminals.length > 0) ||
          response[0] == "@"
        ) {
          window.terminals[0].sendText(addObject[response]);
        } else {
          const terminal = window.createTerminal({
            cwd: wok,
            hideFromUser: false,
            name: response
          });
          if (!(response in splitObject1) && !(response in splitObject2)) {
            terminal.show();
            setTimeout(() => {
              if (response in addObject || response in runScriptsObj) {
                terminal.sendText(addObject[response]);
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
