USE blogsfullstack;



CREATE TABLE Blogs (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    content TEXT NOT NULL,
    authorid INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (authorid) REFERENCES Authors (id) ON DELETE CASCADE
);

CREATE TABLE Authors (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(75) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY(id)
);


CREATE TABLE Tags (
	id INT AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);



CREATE TABLE BlogTags (
	blogid INT NOT NULL,
    tagid INT NOT NULL,
    PRIMARY KEY(blogid, tagid),
    FOREIGN KEY (blogid) REFERENCES Blogs (id) ON DELETE CASCADE,
    FOREIGN KEY (tagid) REFERENCES Tags (id) ON DELETE CASCADE
);

-- These inserts aren't what I had initially. I started getting confused on the front end,
-- so I changed some of the database stuff and then got more confused... :(
INSERT INTO Authors (name, email) VALUE ('TESTING 3', 'TESTING 3');
INSERT INTO Blogs (title, content, authorid) VALUE ('New test3', 'I am Testing this BLOG3', 1);
INSERT INTO Tags (name) VALUE ('GAMING');
INSERT INTO BlogTags (blogid, tagid) VALUE (1, 5);

SELECT * FROM Authors;
SELECT * FROM Blogs;
SELECT * FROM Tags;
SELECT * FROM BlogTags;
CALL spBlogTags(5);

DELIMITER //
CREATE PROCEDURE spBlogTags(blogid INT)
BEGIN
	SELECT Tags.id, Tags.name FROM BlogTags 
	JOIN Tags on Tags.id = BlogTags.tagid
	WHERE blogid = blogid;
END //
DELIMITER ;

SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid;