import { connection } from '../db/db.js';

export const QuestionsRepository = {
  async findAll() {
    const [rows] = await connection.execute('SELECT * FROM Questions');
    return rows;
  },

  async findById(id) {
    const [rows] = await connection.execute('SELECT * FROM Questions WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ survey_id, question_text, question_type, question_order }) {
    await connection.execute(
      'INSERT INTO Questions (survey_id, question_text, question_type, question_order) VALUES (?, ?, ?, ?)',
      [survey_id, question_text, question_type, question_order || 0]
    );
    const [rows] = await connection.execute(
      'SELECT * FROM Questions WHERE survey_id = ? ORDER BY id DESC LIMIT 1',
      [survey_id]
    );
    return rows[0];
  },

  async update(id, { question_text, question_type, question_order }) {
    const fields = [];
    const values = [];

    if (question_text) {
      fields.push('question_text = ?');
      values.push(question_text);
    }
    if (question_type) {
      fields.push('question_type = ?');
      values.push(question_type);
    }
    if (typeof question_order === 'number') {
      fields.push('question_order = ?');
      values.push(question_order);
    }

    if (!fields.length) return false;

    values.push(id);
    const [result] = await connection.execute(
      `UPDATE Questions SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await connection.execute('DELETE FROM Questions WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};
export default QuestionsRepository;
