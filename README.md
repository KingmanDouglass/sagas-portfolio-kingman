# React Redux with Sagas

Build a portfolio

## Setup

```SQL
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');
```

1. `npm install`
1. `npm run server`
1. `npm run client`


### Project Page

- [X ] Client side route that displays projects that are stored in the database
- [X ] Each project should conditionally render a name, description, thumbnail, website, date complete and a tag. Many of the fields are optional, only show properties that aren't null.
- [X ] Include a link to GitHub that opens in a new window
- [X ] Add your name at the top of the page
- [X ] Use Sagas for API requests to your server

### Admin Page

- [X ] Client side route that displays a form allowing you to add a new project to your portfolio
- [X ] Include a drop down menu with a list of tags
- [X ] Send data to the server and notify the user of success or failure
- [X ] List projects by name and allow the user to delete them
- [X ] Include a button that navigates to the project page

### General Tasks

- [X ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [X ] Comment your code.
- [X ] Update this README to include a description of the project in your own words.

## Wireframes

> NOTE: Feel free to modify the styling and layout of content on the page. 

### Project Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/project_page.png" width="560">


### Admin Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/admin_page.png" width="560">

## Stretch Goals

- [ ] Use the GitHub API to get user information to display at the top of the page
- [X ] Improve styling on the page using Material UI
- [ ] Include a form on the admin page for adding new tags
- [ ] Implement additional features of the GitHub API
