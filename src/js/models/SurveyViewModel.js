export class SurveyViewModel {
  constructor(id, title, description, is_active, created_at, closed_at, author_id) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.is_active = is_active;
    this.created_at = created_at;
    this.closed_at = closed_at;
    this.author_id = author_id;
  }
}

export default SurveyViewModel;