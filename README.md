# README - Thrifty.
Frontend <a href='https://github.com/geraldarzy/thrifty-frontend'>repository</a>
<br>
Backend <a href='https://github.com/geraldarzy/thrifty-backend'>repository</a>

<strong>About the Project</strong>
 <br>
Thrifty is a hub for all the the best thriftshops in NYC. The goal is to provide a center for shopping thriftstores online. Imagine a single place in which you can shop from all your favorite thrift stores. Whether it be Beacon's Closet in Williamsburg or Plato's Closet in Manhattan, we got you covered. Within the site, you can shop according to store or just any item you like. Your cart can consist of items from all sorts of different Thrift Stores and you can still place only one order to purchase from all different stores.
<br><br>

<strong>Built with:</strong> <br>
Backend: 
- Ruby on Rails Framework (Backend API)
- PostGreSQL Database

Frontend:
- Javascript
- Jquery
- HTML/CSS
- Bootstrap
<br><br>


<strong>JS Classes</strong> <br> 
Within the front end repository, there are .js files inside the src directory. Each class has a responsibility in order to try and organize up the functions into Class Static Methods.
<br><br>
## Each class name and their responsibility is as follows:
| Class Names   |Responsibility|
| :-------------: |:-------------|
| User     | <ul> <li>retrieve information about the user object in the database</li> <li>handle the cookie on the frontend</li></ul> |
| Store| <ul> <li>retrieve a list of stores and information about each store from the backend</li></ul>      | 
| Item| <ul> <li>retrieve a list of items based on the parameter passed into its method</li> <li>make a container element and append it to the DOM for each item</li></ul>   | 
| Cart| <ul> <li>retrieve a list of items from users cart from the backend</li> <li>make a container element and append it to the specific cart modal for each item </li></ul>    | 
| Session| <ul> <li>handles the cookie when a user tries to log in or out</li></ul>    | 
| Modals|<ul> <li>makes and appends modals to the DOM for other methods to be able to append to this modal</li><li>adding listeners to certain buttons to make the modals more responsive</li></ul>   | 
| Showpage| <ul> <li>clears the DOM and handles the logic on which elements to append to the DOM</li> <li>also in charge of activating the hidden modals when needed</li></ul>   | 

<strong>Bootstrap:</strong> <br>
Bootstrap was used and it is included in `index.html`. In the `head` you will find the link and scripts that link bootstrap into the project. <br>
<br>
Modals: <br>
The modals are functioning via HTML attribute tags. <br>
JQuery is also used to show/hide the modals from javascript. <br>
` $('myModal').modal('show')` and ` $('myModal').modal('hide')`

<hr>

### <strong>Contributing</strong>
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

<hr>
MIT License

Copyright (c) 2021 Arzy The Arzinator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
