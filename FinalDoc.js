//
// FinalDoc
// Version : 0.1
// Purpose: Google Apps Script that can finalize a document by removing the revision history and all editor access other then the owner. 
// Last Edit - Mar 7, 2018 by D.Roberts
//

// Will be used for possible sidebar functionality. 
function onOpen()
{
  DocumentApp.getUi().createAddonMenu().addItem('Finalize Document', 'showSidebar');
  
}
//
function FinalizeDoc() {
  
  //Find active document to be finalized and look up list of editors
  var currentDoc = DocumentApp.getActiveDocument();
  var editors = currentDoc.getEditors();
  
  //Confirm User is sure they want to finalize the document. Warn them that revisions and editors will be removed.
   var ui = DocumentApp.getUi();
   var response = ui.prompt('Confirm Document Finalization', 'Are you sure you want to finalize this document? \n Doing so will remove all revision history and editor access\n\n To proceed please type "yes" and click yes', ui.ButtonSet.YES_NO);
  
  //Process the document based on response
 if (response.getSelectedButton() == ui.Button.YES) {
   Logger.log('The user has confirmed finalization', response.getResponseText());
   
   //Remove Editior Access 
   Logger.log(editors);
   for (var i = 0; i < editors.length; i++) {
     currentDoc.removeEditor(editors[i]);
    };
 } else if (response.getSelectedButton() == ui.Button.NO) {
   Logger.log('The user did not confirm finalization process');
 } else {
   Logger.log('The user clicked the close button in the dialog\'s title bar.');
 }
 
  //Retrieve revision var SpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  
  //Delete revision history
  
  //Retrieve Editors
 
  //Display Final Message to User
  //DocumentApp.getUi().alert("Finalize this Document","My message to the end user.",DocumentApp.getUi().ButtonSet.OK);
  
}
