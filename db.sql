CREATE DATABASE postsList;

CREATE TABLE post
(
    post_id SERIAL PRIMARY KEY,
    txt_content varchar(255)  NOT NULL,
    post_date timestamp  NOT NULL,
    user_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);