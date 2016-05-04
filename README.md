# JsonFileDatabase
node js code that has some functions to deal with registration database that works on Json file

author: Moutaz Samir

needed Modules:     --you should download these modules using the command (npm install module_name)
  jsonfile
  
Notes:

1) All functions are asynchronous except the ones that has in their names this part "Sync".

2) The functions are asynchronous in order not to block the server while doing I/O operations which is the first advantage of nodejs.

3) For the getters and checkers functions, you should deal with its output inside the function itself depending on the written comment there (so you should read this functions to use them correctly).

4) You will see some commented code to know how to use these functions

5) Don't forget that they are Async functions, so if you decided to write data then reads it, you may find it undefined as the write function took time more than that of read function.
