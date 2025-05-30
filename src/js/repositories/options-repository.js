import { connection } from '../db/db.js';

export const OptionsRepository = {
  async findAll() {
    const [rows] = await connection.execute('SELECT * FROM Options');
    return rows;
  },

  async findById(id) {
    const [rows] = await connection.execute('SELECT * FROM Options WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ question_id, option_text }) {
    await connection.execute(
      'INSERT INTO Options (question_id, option_text) VALUES (?, ?)',
      [question_id, option_text]
    );
    const [rows] = await connection.execute(
      'SELECT * FROM Options WHERE question_id = ? ORDER BY id DESC LIMIT 1',
      [question_id]
    );
    return rows[0];
  },

  async update(id, { option_text }) {
    if (!option_text) return false;

    const [result] = await connection.execute(
      'UPDATE Options SET option_text = ? WHERE id = ?',
      [option_text, id]
    );
    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await connection.execute('DELETE FROM Options WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};
export default OptionsRepository;
