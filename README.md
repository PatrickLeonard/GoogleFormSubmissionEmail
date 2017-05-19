# G Suite (Google Apps) Email on Form Submission


* Step 1  - Create a Google Form
	![Screenshot of an Example Google Form with generic fields](https://raw.githubusercontent.com/PatrickLeonard/GoogleFormSubmissionEmail/master/Screen%20Prints/01-Example%20Form.png)
* Step 2  - Add a response Google Spreadsheet

* Step 3  - Create new Google Spreadsheet

* Step 4  - Open the newly created Google Spreadsheet

* Step 5  - Add another sheet with the receiving email addresses in the first column

* Step 6  - Select Script Editor from the menu ribbon and rename the Google Project

* Step 7  - Paste the Google Script code into the new script editor window and modify as needed for the variable amount of columns/questions

* Step 8  - Display All Triggers for the current project

* Step 9  - Set up the trigger to use the form submission as shown

* Step 10 - Set up the failure notification to notify you of errors that occur

* Step 11 - Now save the Google Script and run the sendFormSubmitEmail function

* Step 12 - An authorization alert should now appear

* Step 13 - Authorize the project to use your Google account to read from the Google Spreadsheet and send the email

* Step 14 - The test email should have been received

* Step 15 - Confirm that multiple recipients were sent the email

* Step 16 - (Optional) Example of what error messages are received from during script failure