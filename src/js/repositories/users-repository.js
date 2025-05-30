import { connection } from '../db/db.js';

export const UsersRepository = {
  async findAll() {
    const [rows] = await connection.execute('SELECT id, login, email FROM Users');
    return rows;
  },

  async findById(id) {
    const [rows] = await connection.execute('SELECT id, login, email FROM Users WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ login, email, password }) {
    await connection.execute(
      'INSERT INTO Users (login, email, password) VALUES (?, ?, ?)',
      [login, email, password]
    );
    const [rows] = await connection.execute(
      'SELECT id, login, email FROM Users WHERE login = ?', [login]
    );
    return rows[0];
  },

  async update(id, { login, email, password }) {
    const fields = [];
    const values = [];

    if (login) {
      fields.push('login = ?');
      values.push(login);
    }
    if (email) {
      fields.push('email = ?');
      values.push(email);
    }
    if (password) {
      fields.push('password = ?');
      values.push(password);
    }

    if (fields.length === 0) return false;

    values.push(id);
    const [result] = await connection.execute(
      `UPDATE Users SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await connection.execute('DELETE FROM Users WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};
export default UsersRepository;
