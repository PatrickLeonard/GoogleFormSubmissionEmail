# G Suite (Google Apps) Email on Form Submission


* Step 1  - Create a Google Form

	![Screenshot of an Example Google Form with generic fields](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/01-Example%20Form.png)

* Step 2  - Add a response Google Spreadsheet

	![Screenshot of an Example Google Form adding a Google Spreadsheet to store responses](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/02-Add_Response_Spreadsheet.png)

* Step 3  - Create new Google Spreadsheet

	![Screenshot of an Example Google Form create a new Google Spreadsheet to store responses](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/03-Create_New_Sheet.png)

* Step 4  - Open the newly created Google Spreadsheet

	![Screenshot of a new Google Spreadsheet to store responses](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/04-Open%20Sheet.png)

* Step 5  - Add another sheet with the receiving email addresses in the first column

	![Screenshot of a the second sheet within the Spreadsheet and two sample email addresses in the first column of each respective row ](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/05-Email_Addresses.png)

* Step 6  - Select Script Editor from the menu ribbon and rename the Google Project

	![Screenshot of the Google Sheet menu selecting Tools then Script Editor...](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/e0a6c238d6cf572833b092b56c6ab2bb2e5beda6/Screen%20Prints/06-Select_Script_Editor.png)

* Step 7  - Paste the Google Script code into the new script editor window and modify as needed for the variable amount of columns/questions

	![Screenshot of the new Script Editor screen](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/07-New_Script_Editor.png)

* Step 8  - Display All Triggers for the current project

	![Screenshot of the Script Editor screen with the menu selected at Edit then All your triggers](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/08-Display_All_Triggers.png)

* Step 9  - Set up the trigger to use the form submission as shown

	![Screenshot of the Script Editor trigger screen with the sendFormSubmitEmail function selected for Run and From spreadsheet and on form submit as the Events](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/09-Trigger_Setup.png)

* Step 10 - Set up the failure notification to notify you of errors that occur

	![Screenshot of the Script Editor notifications setup with Immediately and a specific email to receive script failure alerts](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/10-Failure_Notification.png)

* Step 11 - Now save the Google Script and run the sendFormSubmitEmail function

	![Screenshot of the Script Editor click the Diskette icon or save it, then select Run sendFormSubmitEmail to test](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/11-Save_and_Test.png)

* Step 12 - An authorization alert should now appear

	![Screenshot of the Script Editor authorization required modal](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/12-Authorization_Alert.png)

* Step 13 - Authorize the project to use your Google account to read from the Google Spreadsheet and send the email

	![Screenshot of the G Suite (Google Apps) authorization model for reading the Google Sheet and using Gmail to send the email](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/13-Allow_Permissions.png)

* Step 14 - The test email should have been received

	![Screenshot of receiving the email with the information submitted within the Google Form](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/14-Example_Email_Received.png)

* Step 15 - Confirm that multiple recipients were sent the email

	![Screenshot of receiving the email with the information submitted within the Google Form with multiple recipients](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/15-Confirm_Multiple_Users_Emailed.png)

* Step 16 - (Optional) Example of what error messages are received from during script failure

	![Screenshot of script failure notifications received within Gmail](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/16-Script_Failure_Emails.png)