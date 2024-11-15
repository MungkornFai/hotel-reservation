import { relations } from 'drizzle-orm';
import { pgTable, pgEnum } from 'drizzle-orm/pg-core';
import * as t from 'drizzle-orm/pg-core';

// Define the user role enum
export const userRole = pgEnum('role', ['USER', 'ADMIN']);
export const roomStatus = pgEnum('room_status', [
  'Available',
  'occupied',
  'under_mantained',
]);
export const bookStatus = pgEnum('book_status', [
  'Pending',
  'Confirmed',
  'Cancelled',
]);
export const paymentStatus = pgEnum('payment_status', ['Pending', 'Paid']);

// Create the users table schema
export const users = pgTable('users', {
  id: t.serial('id').primaryKey(),
  name: t.text('name').notNull(),
  email: t.text('email').unique().notNull(),
  password: t.text('password').notNull(),
  role: userRole().default('USER'),
});

export const room_types = pgTable('room_types', {
  id: t.serial('id').primaryKey(),
  type_name: t.varchar('type_name', { length: 50 }).notNull(),
  description: t.text('description').notNull(),
  base_price: t.decimal('base_price', { precision: 10, scale: 2 }).notNull(),
});

export const rooms = pgTable('rooms', {
  id: t.serial('id').primaryKey(),
  room_number: t.varchar('room_number', { length: 10 }).unique().notNull(),
  room_type_id: t.integer('room_type_id').notNull(),
  capacity: t.integer('capacity').notNull(),
  prince_per_night: t
    .decimal('prince_per_night', { precision: 10, scale: 2 })
    .notNull(),
  description: t.text('description').notNull(),
  room_status: roomStatus().default('Available'),
  created_at: t.timestamp('created_at').defaultNow().notNull(),
  updated_at: t.timestamp('updated_at').defaultNow().notNull(),
});

export const booking = pgTable('booking', {
  id: t.serial('id').primaryKey(),
  user_id: t.integer('user_id').notNull(),
  room_id: t.integer('room_id').notNull(),
  check_in: t.date('check_in').notNull(),
  check_out: t.date('check_out').notNull(),
  total_price: t.decimal('total_price', { precision: 10, scale: 2 }).notNull(),
  book_status: bookStatus().default('Pending'),
});

export const payments = pgTable('payment', {
  id: t.serial('id').primaryKey(),
  booking_id: t.integer('booking_id').notNull(),
  amount: t.decimal('amount', { precision: 10, scale: 2 }).notNull(),
  payment_date: t.timestamp('payment_date').defaultNow().notNull(),
  payment_method: t.text('payment_method').notNull(),
  payment_status: paymentStatus().default('Pending'),
  created_at: t.timestamp('created_at').defaultNow().notNull(),
  updated_at: t.timestamp('updated_at').defaultNow().notNull(),
});

export const reviews = pgTable('reviews', {
  id: t.serial('id').primaryKey(),
  user_id: t.integer('user_id').notNull(),
  room_id: t.integer('room_id').notNull(),
  review: t.text('review').notNull(),
  rating: t.integer('rating').notNull(),
  created_at: t.timestamp('created_at').defaultNow().notNull(),
  updated_at: t.timestamp('updated_at').defaultNow().notNull(),
});

// Define relationships



export const roomsRelations = relations(rooms, ({ one }) => ({
  room_type: one(room_types, {
    fields: [rooms.room_type_id],
    references: [room_types.id],
  }),
}));


export const bookRelations = relations(booking, ({ one }) => ({
  user: one(users, { fields: [booking.user_id], references: [users.id] }),
  room: one(rooms, { fields: [booking.room_id], references: [rooms.id] }),
}));


export const paymentRelations = relations(payments, ({ one }) => ({
  booking: one(booking, { fields: [payments.booking_id], references: [booking.id] }),
}));

export const reviewRelations = relations(reviews, ({ one }) => ({
  user: one(users, { fields: [reviews.user_id], references: [users.id] }),
  room: one(rooms, { fields: [reviews.room_id], references: [rooms.id] }),
}));