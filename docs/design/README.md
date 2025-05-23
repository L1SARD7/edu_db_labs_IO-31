# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

## Модель бізнес-об'єктів
@startuml
left to right direction

' Users
entity Users <> #900052 {
  id
  login
  email
  password
}

' Surveys
entity Surveys <> #450561 {
  id
  title
  description
  is_active
  created_at
  closed_at
  author_id
}

' Questions
entity Questions <> #316e7a {
  id
  survey_id
  question_text
  question_type
  question_order
}

' Options
entity Options <> #5b0673 {
  id
  question_id
  option_text
}

' Responses
entity Responses <> #ad5a00 {
  id
  survey_id
  user_id
  submitted_at
}

' Answers
entity Answers <> #04378a {
  id
  response_id
  question_id
  answer_text
  selected_option_ids
}

' Relationships
Users "1" -- "0..*" Surveys : author_id
Surveys "1" -- "0..*" Questions : survey_id
Questions "1" -- "0..*" Options : question_id
Surveys "1" -- "0..*" Responses : survey_id
Users "1" -- "0..*" Responses : user_id
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
