# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

## Модель бізнес-об'єктів
@startuml
title Business Object Model - Survey System

' Напрямок зліва направо
left to right direction

class Users {
  +id: int
  +login: varchar
  +email: varchar
  +password: varchar
}

class Surveys {
  +id: int
  +title: varchar
  +description: text
  +is_active: boolean
  +created_at: datetime
  +closed_at: datetime
  +author_id: int
}

class Questions {
  +id: int
  +survey_id: int
  +question_text: text
  +question_type: enum
  +question_order: int
}

class Options {
  +id: int
  +question_id: int
  +option_text: varchar
}

class Responses {
  +id: int
  +survey_id: int
  +user_id: int
  +submitted_at: datetime
}

class Answers {
  +id: int
  +response_id: int
  +question_id: int
  +answer_text: text
  +selected_option_ids: varchar
}

' Зв’язки між сутностями
Users "1" --> "0..*" Surveys : creates >
Surveys "1" --> "1..*" Questions
Questions "1" --> "0..*" Options
Surveys "1" --> "0..*" Responses
Users "1" --> "0..*" Responses
Responses "1" --> "1..*" Answers
Questions "1" --> "0..*" Answers
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
