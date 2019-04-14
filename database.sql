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

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
VALUES ('Koala Holla', 'Your client has asked your team to build a system to track their koalas. They need the ability to keep track of all koalas in their database, be able add a koala and mark itready for transfer.', 'images/kollaHolla.png', 'https://github.com/willmhowes/koala-holla-jens-master', 'https://github.com/willmhowes/koala-holla-jens-master', '03-20-2019', '4');

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
VALUES ('Prime Pizza', 'Your client has asked your team to build a pizza ordering system. Be able to handle the display of the menu, selection of the order, input of customer information, checkout and admin tracking.', 'images/primePizza.png', 'https://github.com/wabens/redux-pizza-parlor', 'https://github.com/wabens/redux-pizza-parlor', '03-29-2019', '5');

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
VALUES ('Feedback Form', 'Your client has asked to have a feedback form created. This form needs to compile data, store into a database, allow for the user to review and give an administrative view', 'images/feedback.png', 'https://github.com/KingmanDouglass/feedback-form-weekend', 'https://github.com/KingmanDouglass/feedback-form-weekend', '02-24-2019', '5');

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
VALUES ('Gallery of My Life', 'Create a form that allows the user to upload a photo that will flip to display a photo description on the click of the image. Allow users to like the photo and display the amount of likes stored in the database', 'images/myGallery.png', 'https://github.com/KingmanDouglass/react-gallery', 'https://github.com/KingmanDouglass/react-gallery', 