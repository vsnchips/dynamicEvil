/*This is Evil!
...And its very useful!
*/

/*
Using eval inside the VSCode Extension Development Host to dynamically do things and make new commands
*/

import * as vscode from 'vscode';

const json = require('jsonify')
var editor = vscode.window.activeTextEditor;

export function activate(context: vscode.ExtensionContext) {
	console.log('dynamicEvil is loaded.')
	const doit=vscode.commands.registerCommand('dynamicEvil.doit', () => {

        /* dynamicEvil.eval gets the selected text and eval's it. */

		try {
			//get the selected text
			let editor = vscode.window.activeTextEditor
			let textselection = editor.document.getText(editor.selection)

			// Display a message box to the user
			vscode.window.showInformationMessage('Eval`ing selection: ' + textselection );
			eval(textselection)

		} catch (err) {
			console.error(err)
		}

	});
	context.subscriptions.push(doit);
}

/*Example code. You may highlight these in the Extension Development Host window and run them with dynamicDefiniton.doit".
console.log goes to the DEBUG CONSOLE in the main debugging VSCode instance.

// Each time you run registerCommand, you will need to give it a new name. 
// You'll need some other magic to override pre-registered functions. Have fun!

let newcmdname='replSender.newLiveCommand'
vscode.commands.registerCommand(newcmdname, () => {
	try {
		console.log("Hello new overrideable live command!!\n")

	} catch (err) {
		console.error(err)
		vscode.window.showInformationMessage('Error:')
		vscode.window.showInformationMessage(json.stringify(err))
	}

});
vscode.commands.executeCommand(newcmdname)

//Examining the existing VSCode commands:
this.cmds=vscode.commands.getCommands(false);
console.log(this.cmds[0])

this.cmds.then( (commandList) => {
	console.log(commandList.length + commands)
	console.log(typeof(commandList)[0])
	} )

console.log(this.cmds[this.cmds.length-1]);

//Cool! So, whats in Scope? 

//Hello!
console.clear()
console.log("Hello!")

//This is the global context, check it out
console.log((this))

//List all the commands!
console.log(vscode.commands)			

//Dynamically create persistent vars by adding them to 'this'
//You can run these one line at a time

this.liveFoo = 'live_bar3'
console.log(this.liveFoo)

//this is the global scope so you dont need to ref it 
this.liveBar_nothis = 'look, no "this"!'
console.log(liveBar_nothis)






*/