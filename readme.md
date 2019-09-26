**How to run**

* npm i
* npm start

**How to use**

* Use your any kind of request (POST/GET/PUT/etc) as is and add "http://localhost:3000/" to beginning of the request URL. Example: http://localhost:3000/https://www.example.com 
* This will trigger the server make a request to avoid CORS issue.

**Important Notes**

* Make sure you are getting same response on Postman without this solution and with the solution.
* It is working with [application/json] and [plain/text] content types so we did not test it for other types.
* If it does not work for other types please update the app.js -> app.all middleware accordingly.