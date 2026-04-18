import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").defaultNow(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  eventDate: timestamp("event_date").notNull(),
  imageUrl: text("image_url"),
  type: text("type").notNull(), // 'event', 'conclave'
  createdAt: timestamp("created_at").defaultNow(),
});

export const team = pgTable("team", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  category: text("category").notNull(), // 'office_bearer', 'director', 'staff'
  imageUrl: text("image_url"),
  bio: text("bio"),
  order: integer("order"),
});

export const circulars = pgTable("circulars", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  fileUrl: text("file_url"),
  date: timestamp("date").defaultNow(),
});

export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  title: text("title"),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(), // 'event', 'exhibition', 'award'
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export const insertAnnouncementSchema = createInsertSchema(announcements).omit({ id: true, date: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true, createdAt: true });
export const insertTeamSchema = createInsertSchema(team).omit({ id: true });
export const insertCircularSchema = createInsertSchema(circulars).omit({ id: true, date: true });
export const insertGallerySchema = createInsertSchema(gallery).omit({ id: true, createdAt: true });

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type Announcement = typeof announcements.$inferSelect;
export type InsertAnnouncement = z.infer<typeof insertAnnouncementSchema>;

export type Event = typeof events.$inferSelect;
export type TeamMember = typeof team.$inferSelect;
export type Circular = typeof circulars.$inferSelect;
export type GalleryItem = typeof gallery.$inferSelect;

export type CreateInquiryRequest = InsertInquiry;
export type InquiryResponse = Inquiry;

export type AnnouncementResponse = Announcement;
