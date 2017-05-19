/**
* Copyright (c) 2016 Patrick Leonard
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software. 
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


/**
 * @fileOverview Google Apps Script and Google Forms and Sheets email on form submission.
 * @author Patrick Leonard
 */

/**
* This function will allow you to get the data submitted by the form user.
* Since forms can have a varied number of question, this function needs to be
* modified for each different form. It's pretty simple. Create and name variables
* after the column headers in order. Then assign the value in the row array according
* to the coordinating column number with timeStamp as 0 and incrementing by one 
* as you move right.
* 
* Next you'll need to modify the format of the email since that can change with 
* each form. See sendOffTheEmail(...)
*/
function sendFormSubmitEmail() {
  //Get the active spreadsheet that is accepting responses from the Form
  var numColumns = 7;  // <-- THIS NEEDS TO MATCH THE NUMBER OF COLUMNS IN THE SPREADSHEET (INCLUDING TIMESTAMP)
  
  // Get the data for the total number of columns -1
  var data = getFormData(SpreadsheetApp.getActiveSpreadsheet(),numColumns);
  //Create variables to hold the values in the Spreadsheet columns
  var timeStamp;
  var multipleChoice;
  var shortAnswer;
  var checkbox;
  var linearScale;
  var time;
  var date;
  //For each data object, get a row and assign the columns to the variables
  //The numbers increment by one with timeStamp starting at zero, should end with one less than numColumns
  for (i in data) {    
    var row = data[i];
    timeStamp = row[0];
    multipleChoice = row[1];
    shortAnswer = row[2];
    checkbox = row[3];
    linearScale = row[4];
    time = row[5];    
    date = row[6];    
  }
  
  //Modify this function call to match your column header variables
  sendOffTheEmail(timeStamp,multipleChoice,shortAnswer,checkbox,linearScale,time,date);
  
}

/**
* This function allows you to format the email the is sent with the data submitted in the form.
* You can see from the associated screenshot how this will turn out, but you will need to edit 
* it to match the column header variables used in sendFormSubmitEmail(). Google Search: Google Script
* String Concatenation, and you will find information about how it works. 
* @param {object} timeStamp The timestamp of the form submission
* @param {object} multipleChoice The selection of the multiple choice question
* @param {object} shortAnswer The answer provided to the short answer question
* @param {object} checkbox The checkbox selection
* @param {object} linearScale The linear scale selection value
* @param {object} time The time value entry
* @param {object} date The date value entered
*/
function sendOffTheEmail(timeStamp,multipleChoice, shortAnswer, checkbox, linearScale, time, date) {
  //Create a subject variable
  var subject = "Example Email Google Script"; 
  var emailAddress = getEmailAddresses(); //Get the recipient email list
  //Begin creating the message that will be the email body text.
  var message = "Sent at: " + timeStamp + ".\n";
  message += "Choice from Question 1: " + multipleChoice + "\n";
  message += "Short Answer from Question 2: " + shortAnswer + "\n";
  message += "Selections from Question 3: " + checkbox + "\n";
  message += "Scale Selection from Question 4: " + linearScale + "\n";     
  
  //Sends the email
  MailApp.sendEmail(emailAddress, subject, message); 
}

/**
* Retrieves data from the form.
* Uses the first sheet and gets only the last row
* @param {SpreadSheet} ss The current Google Spreadsheet accepting form submissions
* @param {integer} numColumns The total number of columns in the Spreadsheet
*/
function getFormData(ss,numColumns) {
  var sheet = ss.getSheets()[0]; //Get the first "Sheet" in the SpreadSheet
  var startRow = sheet.getLastRow();  // First row of data to process in script 
  var numRows = 1;   // Number of rows to process, get the last row entered on submission
  return getDataRange(sheet,startRow,numRows,numColumns).getValues(); //Get the values in a twoDimensional array Object[][]
}

/**
* Retrieves a comma separated list of email addresses to receive
* the email on form submission
* @param {SpreadSheet} ss The current Google Spreadsheet accepting form submissions
* @param {integer} numColumns The total number of columns in the Spreadsheet
*/
function getEmailDataRange(ss,numColumns) {
  var sheet = ss.getSheets()[1]; //Get the second "Sheet" in the SpreadSheet
  var startRow = 1;  //First row of emails
  var numRows = sheet.getLastRow(); //Get all of the emails.
  return getDataRange(sheet,startRow,numRows,numColumns); //return data with numColumns
}


/**
* Wrapper to get the DataRange object 
* Always use the first column.
* @param {Sheet} sheet The current Google Sheet within the Spreadsheet accepting form submissions
* @param {integer} numColumns The total number of columns in the Spreadsheet
*/
function getDataRange(sheet,startRow,numRows,numColumns) {
  var startColumn = 1;
  // Fetch the range of cells that includes all of the columns for the last (freshly input) row
  return dataRange = sheet.getRange(startRow, startColumn, numRows, numColumns);
}


/**
* This function gathers the email addresses that are on the second sheet of the SpreadSheet
* Returns comma separated list of emails with one email in each cell of the first column in the
* second sheet.
*
*/
function getEmailAddresses() {
  var dataRange = getEmailDataRange(SpreadsheetApp.getActiveSpreadsheet(),1); //One Column
  var data = dataRange.getValues(); //Get the values in a twoDimensional array Object[][]
  var recipientsString = ""; //Create a variable for the comma separated list of email addresses
  var rangeHeight = dataRange.getHeight();
  var rangeWidth = dataRange.getWidth();
  var i=0;
  var j=0;
  //Create the comma separated list
  for(i;i<rangeWidth;++i) {
    for(j;j<rangeHeight;++j) {
      recipientsString += data[j][i];
      if(j != rangeHeight-1) {
         recipientsString += ",";
      }
    }
  }
  return recipientsString;  //return the string to the calling function
}