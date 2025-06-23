import { pgTable, serial, text, integer, timestamp, jsonb, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table to store test takers
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  language: varchar('language', { length: 10 }).notNull().default('ko'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Test results table to store completed tests
export const testResults = pgTable('test_results', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  totalScore: integer('total_score').notNull(),
  resultType: varchar('result_type', { length: 50 }).notNull(),
  answers: jsonb('answers').notNull(), // Store the array of user answers
  questionsUsed: jsonb('questions_used').notNull(), // Store which questions were used
  completedAt: timestamp('completed_at').defaultNow().notNull(),
});

// User relations
export const usersRelations = relations(users, ({ many }) => ({
  testResults: many(testResults),
}));

// Test results relations
export const testResultsRelations = relations(testResults, ({ one }) => ({
  user: one(users, {
    fields: [testResults.userId],
    references: [users.id],
  }),
}));

// Types for TypeScript
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type TestResult = typeof testResults.$inferSelect;
export type InsertTestResult = typeof testResults.$inferInsert;