<a href="https://marketplace.visualstudio.com/items?itemName=leach-chen.vscode-develop-tools#overview"><img src="https://vsmarketplacebadge.apphb.com/version/leach-chen.vscode-develop-tools.svg" /> <img src="https://vsmarketplacebadge.apphb.com/installs-short/leach-chen.vscode-develop-tools.svg" /></a> <a href="https://marketplace.visualstudio.com/items?itemName=leach-chen.vscode-develop-tools#review-details"><img src="https://vsmarketplacebadge.apphb.com/rating-star/leach-chen.vscode-develop-tools.svg" /></a>

# Run scripts

A VS Code extension that allows you to run package.json scripts quickly with npm，or you can run yourself command

![Develop Tools VS Code extension](./images/demo.gif)

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
