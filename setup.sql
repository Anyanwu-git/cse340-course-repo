DROP DATABASE IF EXISTS cse340;
CREATE DATABASE cse340;
USE cse340;

CREATE TABLE organizations (
    organization_id INT AUTO_INCREMENT PRIMARY KEY,
    organization_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(100) NOT NULL,
    project_description TEXT,
    organization_id INT,
    FOREIGN KEY (organization_id) REFERENCES organizations(organization_id)
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE project_categories (
    project_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (project_id, category_id),
    FOREIGN KEY (project_id) REFERENCES projects(project_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

INSERT INTO organizations (organization_name, phone, email)
VALUES
('Helping Hands', '123-456-7890', 'help@hands.org'),
('Green Earth', '222-333-4444', 'green@earth.org');

INSERT INTO projects (project_name, project_description, organization_id)
VALUES
('Food Drive', 'Collect food for families in need', 1),
('Tree Planting', 'Plant trees in the community', 2),
('School Supply Donation', 'Provide school supplies for children', 1);

INSERT INTO categories (category_name)
VALUES
('Community Support'),
('Environment'),
('Education');

INSERT INTO project_categories (project_id, category_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(1, 3);