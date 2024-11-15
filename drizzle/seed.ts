import { db } from './db';
import { users } from './schema';

export async function main() {
  const user: typeof users.$inferInsert = {
    name: 'John',
    email: 'john@example.com',
    password: '12345678',
  };
  await db.insert(users).values(user);
  console.log(`Created user with id: ${user.id}`);
}

main();