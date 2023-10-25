
CREATE DATABASE project;

USE project;

-- 위에서 정의한 테이블들을 project 데이터베이스에 생성
-- member 테이블
CREATE TABLE member (
    memberId varchar(15) NOT NULL,
    memberName varchar(20) NOT NULL,
    memberPw varchar(255) NOT NULL,
    gender char(1) NOT NULL,
    email varchar(30) NOT NULL,
    phone char(11) NOT NULL,
    PRIMARY KEY (memberId)
);

-- reservation 테이블
CREATE TABLE reservation (
    reservationNumber VARCHAR(50) NOT NULL,
    performanceId VARCHAR(50) NOT NULL,
    memberId varchar(15) NOT NULL,
    performanceName VARCHAR(50) NOT NULL,
    runtime TIME NOT NULL,
    venue VARCHAR(50) NOT NULL,
    selectedTime TIME NOT NULL,
    selectedDay DATE NOT NULL,
    selectedPrice VARCHAR(20) NOT NULL,
    PRIMARY KEY (reservationNumber),
    FOREIGN KEY (memberId) REFERENCES member (memberId)
);

-- -- reservation 테이블
-- CREATE TABLE reservation (
--     reservationId INT NOT NULL,
--     memberId varchar(15) NOT NULL,
--     performanceId INT NOT NULL,
--     Field VARCHAR(255) NULL,
--     PRIMARY KEY (reservationId, memberId, performanceId),
--     FOREIGN KEY (memberId) REFERENCES member (memberId),
--     FOREIGN KEY (performanceId) REFERENCES performance (performanceId)
-- );

-- -- review 테이블
-- CREATE TABLE review (
--     reviewId INT NOT NULL,
--     reservationId INT NOT NULL,
--     memberId varchar(15) NOT NULL,
--     performanceId INT NOT NULL,
--     comment TEXT NULL,
--     reviewDate DATE NOT NULL,
--     PRIMARY KEY (reviewId, reservationId, memberId, performanceId),
--     FOREIGN KEY (reservationId) REFERENCES reservation (reservationId),
--     FOREIGN KEY (memberId) REFERENCES reservation (memberId),
--     FOREIGN KEY (performanceId) REFERENCES reservation (performanceId)
);
