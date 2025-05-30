export class CreateQuestionInputModel {
  constructor(survey_id, question_text, question_type, question_order = 0) {
    this.survey_id = survey_id;
    this.question_text = question_text;
    this.question_type = question_type;
    this.question_order = question_order;
  }
}
export default CreateQuestionInputModel;