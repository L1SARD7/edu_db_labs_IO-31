export class QuestionViewModel {
  constructor(id, survey_id, question_text, question_type, question_order) {
    this.id = id;
    this.survey_id = survey_id;
    this.question_text = question_text;
    this.question_type = question_type;
    this.question_order = question_order;
  }
}
export default QuestionViewModel;