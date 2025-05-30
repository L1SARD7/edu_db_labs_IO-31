export class CreateAnswerInputModel {
  constructor(response_id, question_id, answer_text, selected_option_ids) {
    this.response_id = response_id;
    this.question_id = question_id;
    this.answer_text = answer_text;
    this.selected_option_ids = selected_option_ids;
  }
}
export default CreateAnswerInputModel;