# Реалізація інформаційного та програмного забезпечення


## SQL-скрипт
```sql
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Surveys (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    closed_at DATETIME,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    survey_id INT NOT NULL,
    question_text TEXT NOT NULL,
    question_type ENUM('text', 'single_choice', 'multiple_choice') NOT NULL,
    question_order INT DEFAULT 0,
    FOREIGN KEY (survey_id) REFERENCES Surveys(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT NOT NULL,
    option_text VARCHAR(255) NOT NULL,
    FOREIGN KEY (question_id) REFERENCES Questions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    survey_id INT NOT NULL,
    user_id INT NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (survey_id) REFERENCES Surveys(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    response_id INT NOT NULL,
    question_id INT NOT NULL,
    answer_text TEXT,
    selected_option_ids VARCHAR(255),
    FOREIGN KEY (response_id) REFERENCES Responses(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES Questions(id) ON DELETE CASCADE
);
```

## SQL-скрипт для початкового наповнення бази даних
```sql
INSERT INTO Users (login, email, password) VALUES 
('Artem', 'klimchuk.artem@lll.kpi.ua', '1234'),
('incognito', 'example@gmail.com', 'qwerty'),
('Misha', 'Vikhlyaev.Mykhailo@gmail.com', 'password');

INSERT INTO Surveys (title, description, author_id) VALUES 
('Опитування щодо освіти', 'Опитування про стан освіти в Україні', 1),
('Опитування щодо транспорту', 'Ваше ставлення до громадського транспорту', 2),
('Технології у повсякденному житті', 'Це опитування допоможе дізнатись, як люди використовують сучасні цифрові технології у щоденній рутині.', 1);


INSERT INTO Questions (survey_id, question_text, question_type, question_order) VALUES 
(1, 'Який ваш рівень освіти?', 'single_choice', 1),
(1, 'Які предмети вам подобались у школі?', 'multiple_choice', 2),

(2, 'Який транспорт ви використовуєте щодня?', 'multiple_choice', 1),
(2, 'Які проблеми ви бачите в громадському транспорті?', 'text', 2),

(3, 'Скільки часу на день ви користуєтесь смартфоном?', 'single_choice', 1),
(3, 'Для чого ви найчастіше використовуєте смартфон?', 'multiple_choice', 2),
(3, 'Чи відчуваєте ви залежність від смартфону?', 'single_choice', 3),
(3, 'Що б ви хотіли змінити у своїх цифрових звичках?', 'text', 4);

INSERT INTO Options (question_id, option_text) VALUES
(1, 'Середня'),
(1, 'Вища'),
(1, 'Післядипломна'),

(2, 'Математика'),
(2, 'Історія'),
(2, 'Література'),

(3, 'Автобус'),
(3, 'Метро'),
(3, 'Трамвай'),

(5, 'Менше 1 години'),
(5, '1–3 години'),
(5, '3–5 годин'),
(5, 'Більше 5 годин'),

(6, 'Соціальні мережі'),
(6, 'Навчання / саморозвиток'),
(6, 'Робота'),
(6, 'Розваги (відео, ігри тощо)'),
(6, 'Спілкування'),

(7, 'Так'),
(7, 'Ні'),
(7, 'Час від часу');

INSERT INTO Responses (survey_id, user_id) VALUES
(3, 2), 
(1, 3),
(2, 3), 
(3, 3); 

INSERT INTO Answers (response_id, question_id, answer_text, selected_option_ids) VALUES
(1, 5, NULL, '6'), 
(1, 6, NULL, '10,12'), 
(1, 7, NULL, '15'), 
(1, 8, 'Хотіла б менше часу проводити в телефоні', NULL),

(2, 1, NULL, '2'), 
(2, 2, NULL, '4,5'), 

(3, 3, NULL, '7,8'), 
(3, 4, 'Переповненість, відсутність графіка', NULL),

(4, 5, NULL, '7'),
(4, 6, NULL, '9,13'), 
(4, 7, NULL, '15'), 
(4, 8, 'Потрібно зменшити час в соцмережах', NULL);
```