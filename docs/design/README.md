# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

# Модель бізнес-об'єктів
@startuml

left to right direction

entity "User" as User {
  *id : INT
  *email : VARCHAR
  *passwordHash : VARCHAR
  *role : VARCHAR
  *isActive : BOOLEAN
}

entity "Survey" as Survey {
  *id : INT
  *title : VARCHAR
  *description : TEXT
  *status : VARCHAR
  *creationDate : DATETIME
  *closeDate : DATETIME
  *userId : INT
}

entity "Question" as Question {
  *id : INT
  *text : TEXT
  *type : VARCHAR
  *isRequired : BOOLEAN
  *order : INT
  *surveyId : INT
}

entity "SurveyLink" as SurveyLink {
  *id : INT
  *token : VARCHAR
  *isActive : BOOLEAN
  *expiryDate : DATETIME
  *clicks : INT
  *surveyId : INT
}

entity "Response" as Response {
  *id : INT
  *submissionDate : DATETIME
  *isComplete : BOOLEAN
  *surveyLinkId : INT
}

entity "Answer" as Answer {
  *id : INT
  *value : TEXT
  *responseId : INT
  *questionId : INT
}

User ||--o{ Survey : creates
Survey ||--o{ Question : contains
Survey ||--o{ SurveyLink : links
SurveyLink ||--o{ Response : generates
Response ||--o{ Answer : includes
Question ||--o{ Answer : asked by

@enduml


# ER-модель

@startuml
!define table(x) class x << (T,#FFAAAA) >>
!define primaryKey(x) <u>x</u>
!define foreignKey(x) <i>x</i>

' --- Сутність: User ---
table(User) {
  primaryKey(id) INT
  email VARCHAR
  passwordHash VARCHAR
  role VARCHAR
  isActive BOOLEAN
}

' --- Сутність: Survey ---
table(Survey) {
  primaryKey(id) INT
  title VARCHAR
  description TEXT
  status VARCHAR
  creationDate DATETIME
  closeDate DATETIME
  foreignKey(userId) INT
}

' --- Сутність: Question ---
table(Question) {
  primaryKey(id) INT
  text TEXT
  type VARCHAR
  isRequired BOOLEAN
  `order` INT
  foreignKey(surveyId) INT
}

' --- Сутність: SurveyLink ---
table(SurveyLink) {
  primaryKey(id) INT
  token VARCHAR
  isActive BOOLEAN
  expiryDate DATETIME
  clicks INT
  foreignKey(surveyId) INT
}

' --- Сутність: Response ---
table(Response) {
  primaryKey(id) INT
  submissionDate DATETIME
  isComplete BOOLEAN
  foreignKey(surveyLinkId) INT
}

' --- Сутність: Answer ---
table(Answer) {
  primaryKey(id) INT
  value TEXT
  foreignKey(responseId) INT
  foreignKey(questionId) INT
}

' --- Зв’язки ---
User ||--o{ Survey : has
Survey ||--o{ Question : has
Survey ||--o{ SurveyLink : has
SurveyLink ||--o{ Response : has
Response ||--o{ Answer : has
Question ||--o{ Answer : asked_by

@enduml

# Реляційна схема

![Реляційна схема](./relation-scheme.png)
