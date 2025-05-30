export class ResponseViewModel {
  constructor(id, survey_id, user_id, submitted_at) {
    this.id = id;
    this.survey_id = survey_id;
    this.user_id = user_id;
    this.submitted_at = submitted_at;
  }
}

export default ResponseViewModel;