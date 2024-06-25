CREATE DATABASE users_db;
USE users_db;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
-- Insert a sample user (password is hashed using bcrypt)
INSERT INTO users (username, password) VALUES ('user', '$2b$10$E9g91h8XQp8KQdCFSW8rUukZ/9a.w2a1qvH8DQmDw6cCIelMw8vaK');  -- password: pass
