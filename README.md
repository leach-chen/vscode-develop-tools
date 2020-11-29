<a href=""><img src="" /><img src="" /></a><a href=""><img src="" /></a>

# Run button script

A VS Code extension that allows you to run package.json scripts quickly with npm，or you can run yourself command

![Run button script VS Code extension](https://github.com/leach-chen/vscode-develop-tools/blob/master/images/demo.gif?raw=true)

## Installation

In the command palette (`CMD + SHIFT + P`) select “Install Extension” and choose “Develop Tools”.

## Usage

1. you can add command at “package.json“ in “scripts“ part,the command will run with “npm“. such as:

```
 "scripts": {
    "vscode:prepublish": "npm run package",
    "compile": "webpack --devtool nosources-source-map --config ./build/node-extension.webpack.config.js",
    "watch": "webpack --watch --devtool nosources-source-map --info-verbosity verbose --config ./build/node-extension.webpack.config.js",
    "package": "webpack --mode production --config ./build/node-extension.webpack.config.js",
  }
```

2. you can run yourself command,you should create a **“dtconfig.json“** then you should add a json with “execCmd“ part. if command start with “newcmd“,the command run will create a new terminal. such as:

```
{
    "execCmd": {
      "Android Log": "react-native log-android",
	  "Android Log Create": "newcmd react-native log-android"  //if command start with "newcmd",the command run will create a new  terminal
    }
}
```
