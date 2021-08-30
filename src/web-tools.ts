import { ExtensionContext, Uri, window, workspace } from "vscode";
import { getDevelopconfigJsonObj } from "./run-script";
import * as util from "./utils/util";

const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

const getWebViewContent = (context: any, templatePath: string) => {
  const resourcePath = util.getExtensionFileAbsolutePath(context, templatePath);
  const dirPath = path.dirname(resourcePath);
  let html = fs.readFileSync(resourcePath, "utf-8");
  // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
  html = html.replace(
    /(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g,
    (m: any, $1: any, $2: any) => {
      return (
        $1 +
        vscode.Uri.file(path.resolve(dirPath, $2))
          .with({ scheme: "vscode-resource" })
          .toString() +
        '"'
      );
    }
  );
  return html;
};

export const goWebTools = (context: ExtensionContext, uri: any) => {
  //const projectPath = workspace.rootPath;
  //if (!projectPath) return;
  try {
    const panel = vscode.window.createWebviewPanel(
      "WebTools", // viewType
      "Tools Bundle", // 视图标题
      1, // 显示在编辑器的哪个部位
      {
        enableScripts: true, // 启用JS，默认禁用
        retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
      }
    );

    //let global = { projectPath, panel };
    panel.webview.html = getWebViewContent(context, "src/webtools/index.html");
    panel.webview.onDidReceiveMessage(
      (message: any) => {},
      undefined,
      context.subscriptions
    );
    setTimeout(()=>{  //获取
      getIframeData(panel)
    },1000)
  } catch (e) {
    console.log(e);
  }
};

const getIframeData = async (panel:any) => {
  const wok = workspace.rootPath;
  let developconfigJsonObj: any = await getDevelopconfigJsonObj(wok); //自定义命令对象
  let previewPageObj = developconfigJsonObj?.previewPage; 
  for (var obj of previewPageObj)
  {
    for(var key in obj)
    {
      const value=obj[key]
      let content = await fs.readFileSync(wok+"/"+value, "utf-8")
      obj[key] = content
      if(value.indexOf(".html") != -1)
      {
        obj["type"] = "html"
      }else{
        obj["type"] = "md"
      }
      break;
    }
  }
  panel.webview.postMessage({content: previewPageObj});

};