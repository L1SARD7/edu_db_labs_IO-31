import { connection } from '../db/db.js';

export const SurveysRepository = {
  async findAll() {
    const [rows] = await connection.execute('SELECT * FROM Surveys');
    return rows;
  },

  async findById(id) {
    const [rows] = await connection.execute('SELECT * FROM Surveys WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ title, description, author_id }) {
    await connection.execute(
      'INSERT INTO Surveys (title, description, author_id) VALUES (?, ?, ?)',
      [title, description || '', author_id]
    );
    const [rows] = await connection.execute(
      'SELECT * FROM Surveys WHERE title = ? AND author_id = ? ORDER BY created_at DESC LIMIT 1',
      [title, author_id]
    );
    return rows[0];
  },

  async update(id, { title, description, is_active, closed_at }) {
    const fields = [];
    const values = [];

    if (title) {
      fields.push('title = ?');
      values.push(title);
    }
    if (description) {
      fields.push('description = ?');
      values.push(description);
    }
    if (typeof is_active === 'boolean') {
      fields.push('is_active = ?');
      values.push(is_active);
    }
    if (closed_at) {
      fields.push('closed_at = ?');
      values.push(closed_at);
    }

    if (!fields.length) return false;

    values.push(id);
    const [result] = await connection.execute(
      `UPDATE Surveys SET ${fields.join(', ')} WHERE id = ?`,
      values
    );
    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await connection.execute('DELETE FROM Surveys WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};
export default SurveysRepository;
