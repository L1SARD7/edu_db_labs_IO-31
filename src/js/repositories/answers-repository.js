import { connection } from '../db/db.js';

export const AnswersRepository = {
  async findAll() {
    const [rows] = await connection.execute('SELECT * FROM Answers');
    return rows;
  },

  async findById(id) {
    const [rows] = await connection.execute('SELECT * FROM Answers WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ response_id, question_id, answer_text, selected_option_ids }) {
    await connection.execute(
      'INSERT INTO Answers (response_id, question_id, answer_text, selected_option_ids) VALUES (?, ?, ?, ?)',
      [response_id, question_id, answer_text || null, selected_option_ids || null]
    );
    const [rows] = await connection.execute(
      'SELECT * FROM Answers WHERE response_id = ? AND question_id = ? ORDER BY id DESC LIMIT 1',
      [response_id, question_id]
    );
    return rows[0];
  },

  async update(id, { answer_text, selected_option_ids }) {
    const fields = [];
    const values = [];

    if (answer_text !== undefined) {
      fields.push('answer_text = ?');
      values.push(answer_text);
    }
    if (selected_option_ids !== undefined) {
      fields.push('selected_option_ids = ?');
      values.push(selected_option_ids);
    }

    if (!fields.length) return false;

    values.push(id);
    const [result] = await connection.execute(
      `UPDATE Answers SET ${fields.join(', ')} WHERE id = ?`,
      values
    );
    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await connection.execute('DELETE FROM Answers WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};
export default AnswersRepository;
