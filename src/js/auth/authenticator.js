import { connection } from '../db/db.js';


export async function authenticateUserBasic(encodedHeader) {
  if (!encodedHeader?.startsWith('Basic ')) return false;

  const base64 = encodedHeader.replace('Basic ', '').trim();
  const decoded = Buffer.from(base64, 'base64').toString();
  const [login, password] = decoded.split(':');

  const [rows] = await connection.execute(
    'SELECT id FROM Users WHERE login = ? AND password = ?',
    [login, password]
  );

  if (rows.length === 0) return false;

  return rows[0].id; 
}

export function BasicAuthMiddleware() {
  return async function (req, res, next) {
    const authHeader = req.headers.authorization;
    const userId = await authenticateUserBasic(authHeader);

    if (!userId) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Access to protected routes"');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.userId = userId;
    next();
  };
}

export default BasicAuthMiddleware;
