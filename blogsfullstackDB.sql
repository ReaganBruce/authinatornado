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
    password VARCHAR(60) NOT NULL,
    roll VARCHAR(25) DEFAULT 'guest',
    email VARCHAR(75) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY(id)
);

CREATE TABLE tokens (
	id INT AUTO_INCREMENT,
    authorid INT, 
	token TEXT,
    expires DATETIME,
	created_at DATETIME DEFAULT NOW(),
	PRIMARY KEY (id),
    FOREIGN KEY (authorid) REFERENCES Authors (id)
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

DELIMITER //
CREATE PROCEDURE spBlogTags(blogid INT)
BEGIN
	SELECT Tags.id, Tags.name FROM BlogTags 
	JOIN Tags on Tags.id = BlogTags.tagid
	WHERE blogid = blogid;
END //
DELIMITER ;

SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid;












