#Example of tests involving md-dialog

#Update
The issue was related the root element that material using being different to the tests. Setting the root element in the test set up has fixed the issue

#Original 
There are many places in my production app where I use the md-dialog directive for confirmations, however I have been unable to write tests for these as I am unable to trigger the resolution of the dialog.

I have created a basic example in this Git repository in the hope that someone is able to help. The repository features a basic component that opens a dialog box, an index html for manual verification and 2 test cases.

The first test case is the issue that I'm trying to solve: resolving the dialog from inside the test, the second is an example of how the tests for md-dialog are written in the angular-material code base.

Run grunt to run the test case