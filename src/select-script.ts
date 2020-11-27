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

    let jsonOutput = JSON.parse(readPakageJson.toString());

    let notCreateTerminal: any = ["Show Android Menu"];

    let addObject: any = {
      "Android Console Log": "react-native log-android",
      "IOS Console Log": "react-native log-ios",
      "Show Android Menu": "adb shell input keyevent 82",
      "Database Forward": "adb forward tcp:8585 tcp:8585"
    };

    let splitObject = {
      "-------------------------------------------------------------------------------------------------------------":
        ""
    };

    jsonOutput = Object.assign(addObject, splitObject, jsonOutput.scripts);

    window.showQuickPick(Object.keys(jsonOutput)).then(async response => {
      if (response) {
        if (
          notCreateTerminal.indexOf(response) >= 0 &&
          window.terminals.length > 0
        ) {
          window.terminals[0].sendText(addObject[response]);
        } else {
          const terminal = window.createTerminal({
            cwd: wok,
            hideFromUser: false,
            name: response
          });
          if (!(response in splitObject)) {
            terminal.show();
            setTimeout(() => {
              if (response in addObject) {
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
