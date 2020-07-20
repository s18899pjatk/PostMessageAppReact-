CREATE DATABASE postsList;

CREATE TABLE post
(
    post_id SERIAL PRIMARY KEY,
    txt_content VARCHAR(255)
);

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL

);