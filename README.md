# Take-Home Coding Challenge for Front End Developer

Thanks for taking the time to work on this take-home coding challenge.

## Timing

Please complete and submit your work within 3 days.

## Business Problem

A company is looking to achieve inorganic growth through acquisitions. They have asked us to develop an online tool to track and analyze potential target companies.

## Requirements:

Your finish product should be client ready.

You can be as creative as you want but at the bare minimum your prototype should allow the client to perform the following activities:

- View a list of targets
- Edit an exising target
- Create a new target
- Delete a target

## Assumptions

- Please use either Angular (Preferred) or React
- Feel free to use any CSS framework or 3rd party JS library to extend your app
- Focus on making the application configurable and add any charts/analytics you like
- Demonstrate use of web standards and best practices.
- Make the navbar responsive with at least one breakpoint (your choice as to how it looks on a smaller screen width).
- Data does not need to be persisted (please generate and use your own mock data)
- Examples of data to be captured:
  - Status (e.g. researching, pending approval, approved, declined)
  - Company Info
  - Key Contacts
  - Financial Performance

## Bonuses (only if you have time)

- Use SASS or LESS to pre-compile your CSS.
- Add a CSS animation with transitions.
- Add unit tests
- Using EY Color Palette:
  - #333333
  - #ffe600
  - #ffffff
  - #cccccc
  - #999999

## Documentation:

Please modify README.md to add:

1. instructions on how to build/run your application
2. link to the live site
3. A paragraph or two about what you are particularly proud of in your implementation, and why.

## Submission Guidelines

1. Fork this project on github. You will need to create an account if you don't already have one.
2. Complete the project as described below within your fork.
3. Push all of your changes to your fork on github and submit a pull request.
4. Publish your application to a live site.
5. You should email your recruiter to let them know you had submitted a solution. Make sure to include your github username in your email (so we can match applicants with pull requests).

Thank you and good luck!





--------------------------------------------------

## Instructions on how to build/run your application

1. clone the project repository 
2. Run the command 'npm install' in the terminal after navigating to the project folder - installs the dependencies in node_modules folder
3. 'ng serve --open  --host 0.0.0.0  --disable-host-check' - starts the server

## link to the live site

https://galliambic-things.000webhostapp.com

## A paragraph or two about what you are particularly proud of in your implementation, and why.

Two things for which I am proud are: Implementation of idea(Ease of use) and Material Design.

Implementation of idea: I have kept the implementation as simple as possible, so that the client can use it easily. There is a side-navigation bar and main page area. Any action done through the navigation panel will be reflected on the page area.

Material Design: I have used the Angular Material for the UI implementation. It adheres to the UI/UX design standards and makes the application look more sophisticated. Also, the app works well in the mobile beacause of the side-navigation breakpoint.

Things that I have not done: I have only done the capabilities of Adding, Deleting, Editing the targets. I have not done much to make the application configurable in the given time.
The idea behind the Configurations tab in the side navigation panel is to give the client capabilities to configure on how he views the targets.
For example, the current configuration that he can give is the Color assignment for the Current Status of the target - Red for declined, Green for Approved etc..
Other implementation idea is the value of Financial performance(which is now an input value that is being given by clilent while adding a target). A good way to implement it would be to run some logic that can configured by the client with the parameters that influence the Financial performance and determining its value based on that.


