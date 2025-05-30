import { connection } from '../db/db.js';

export const ResponsesRepository = {
  async findAll() {
    const [rows] = await connection.execute('SELECT * FROM Responses');
    return rows;
  },

  async findById(id) {
    const [rows] = await connection.execute('SELECT * FROM Responses WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ survey_id, user_id }) {
    await connection.execute(
      'INSERT INTO Responses (survey_id, user_id) VALUES (?, ?)',
      [survey_id, user_id]
    );
    const [rows] = await connection.execute(
      'SELECT * FROM Responses WHERE survey_id = ? AND user_id = ? ORDER BY submitted_at DESC LIMIT 1',
      [survey_id, user_id]
    );
    return rows[0];
  },

  async update(id, { survey_id, user_id }) {
    const fields = [];
    const values = [];

    if (survey_id) {
      fields.push('survey_id = ?');
      values.push(survey_id);
    }
    if (user_id) {
      fields.push('user_id = ?');
      values.push(user_id);
    }

    if (!fields.length) return false;

    values.push(id);
    const [result] = await connection.execute(
      `UPDATE Responses SET ${fields.join(', ')} WHERE id = ?`,
      values
    );
    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await connection.execute('DELETE FROM Responses WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};
export default ResponsesRepository;
