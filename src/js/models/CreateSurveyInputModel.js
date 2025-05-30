export class CreateSurveyInputModel {
  constructor(title, description, author_id) {
    this.title = title;
    this.description = description;
    this.author_id = author_id;
  }
}
export default CreateSurveyInputModel;