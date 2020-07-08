CREATE DATABASE postsList;

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    txt_content VARCHAR(255)
)