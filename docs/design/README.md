# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

## Модель бізнес-об'єктів
@startuml
left to right direction

' === USERS ===
entity Users <> #900052
entity Users.id <> #ed2f9b
entity Users.login <> #ed2f9b
entity Users.email <> #ed2f9b
entity Users.password <> #ed2f9b

Users.id --* Users
Users.login --* Users
Users.email --* Users
Users.password --* Users

' === SURVEYS ===
entity Surveys <> #754000
entity Surveys.id <> #e39d2c
entity Surveys.title <> #e39d2c
entity Surveys.description <> #e39d2c
entity Surveys.is_active <> #e39d2c
entity Surveys.created_at <> #e39d2c
entity Surveys.closed_at <> #e39d2c
entity Surveys.author_id <> #e39d2c

Surveys.id --* Surveys
Surveys.title --* Surveys
Surveys.description --* Surveys
Surveys.is_active --* Surveys
Surveys.created_at --* Surveys
Surveys.closed_at --* Surveys
Surveys.author_id --* Surveys

' === QUESTIONS ===
entity Questions <> #006080
entity Questions.id <> #00b3b3
entity Questions.survey_id <> #00b3b3
entity Questions.question_text <> #00b3b3
entity Questions.question_type <> #00b3b3
entity Questions.question_order <> #00b3b3

Questions.id --* Questions
Questions.survey_id --* Questions
Questions.question_text --* Questions
Questions.question_type --* Questions
Questions.question_order --* Questions

' === OPTIONS ===
entity Options <> #334e68
entity Options.id <> #86bbd8
entity Options.question_id <> #86bbd8
entity Options.option_text <> #86bbd8

Options.id --* Options
Options.question_id --* Options
Options.option_text --* Options

' === RESPONSES ===
entity Responses <> #7b2cbf
entity Responses.id <> #c77dff
entity Responses.survey_id <> #c77dff
entity Responses.user_id <> #c77dff
entity Responses.submitted_at <> #c77dff

Responses.id --* Responses
Responses.survey_id --* Responses
Responses.user_id --* Responses
Responses.submitted_at --* Responses

' === ANSWERS ===
entity Answers <> #ff5d8f
entity Answers.id <> #ffb3c1
entity Answers.response_id <> #ffb3c1
entity Answers.question_id <> #ffb3c1
entity Answers.answer_text <> #ffb3c1
entity Answers.selected_option_ids <> #ffb3c1

Answers.id --* Answers
Answers.response_id --* Answers
Answers.question_id --* Answers
Answers.answer_text --* Answers
Answers.selected_option_ids --* Answers

' === RELATIONS ===
Users "1" -- "0..*" Surveys : author_id
Surveys "1" -- "0..*" Questions : survey_id
Questions "1" -- "0..*" Options : question_id
Users "1" -- "0..*" Responses : user_id
Surveys "1" -- "0..*" Responses : survey_id
Responses "1" -- "0..*" Answers : response_id
Questions "1" -- "0..*" Answers : question_id

@enduml


## ER-модель

@startuml
' Напрямок для зручності читання
left to right direction
!define table(x) class x << (T,#FFAAAA) >>
!define primary_key(x) <u>x</u>

' Таблиці
table(Users) {
  primary_key(id): INT
  login: VARCHAR(100)
  email: VARCHAR(255)
  password: VARCHAR(255)
}

table(Surveys) {
  primary_key(id): INT
  title: VARCHAR(255)
  description: TEXT
  is_active: BOOLEAN
  created_at: DATETIME
  closed_at: DATETIME
  author_id: INT
}

table(Questions) {
  primary_key(id): INT
  survey_id: INT
  question_text: TEXT
  question_type: ENUM('text', 'single_choice', 'multiple_choice')
  question_order: INT
}

table(Options) {
  primary_key(id): INT
  question_id: INT
  option_text: VARCHAR(255)
}

table(Responses) {
  primary_key(id): INT
  survey_id: INT
  user_id: INT
  submitted_at: DATETIME
}

table(Answers) {
  primary_key(id): INT
  response_id: INT
  question_id: INT
  answer_text: TEXT
  selected_option_ids: VARCHAR(255)
}

' Зв’язки між таблицями
Surveys::author_id --> Users::id
Questions::survey_id --> Surveys::id
Options::question_id --> Questions::id
Responses::survey_id --> Surveys::id
Responses::user_id --> Users::id
Answers::response_id --> Responses::id
Answers::question_id --> Questions::id

@enduml


## Реляційна схема

![Реляційна схема](./relation-scheme.png)
