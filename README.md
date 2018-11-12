# ArkParadigmCodeProject
Coding Challenge Before Interview

Note, due to time I was not able to get the writing to a .txt file implemented.
My original intention was to use an JavaScript array that would first read the .txt file then
append any new JSON inputs into that array and use that array for querying for JSON values at any key given.

I was only able to get an array working with all the JSON values.

In addition, due to time, I did not include a test suite.


OPERATION:
- launch terminal/cmd/git bash
- type node index.js (starts the server)
- go to http://localhost:3420
- type in any input into the JSON field, the program will give errors for any invalid inputs, otherwise it will output to the Update channel
- type in any input into the key field, if a value at that key exists it will output to the update Channel
