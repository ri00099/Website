import { db } from "./db";
import {
  inquiries,
  announcements,
  events,
  team,
  circulars,
  gallery,
  type InsertInquiry,
  type InquiryResponse,
  type AnnouncementResponse,
  type Event,
  type TeamMember,
  type Circular,
  type GalleryItem
} from "@shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<InquiryResponse>;
  getAnnouncements(): Promise<AnnouncementResponse[]>;
  createAnnouncement(announcement: { title: string; content: string }): Promise<AnnouncementResponse>;
  getEvents(): Promise<Event[]>;
  getTeam(): Promise<TeamMember[]>;
  getCirculars(): Promise<Circular[]>;
  getGalleryItems(): Promise<GalleryItem[]>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<InquiryResponse> {
    const [created] = await db.insert(inquiries).values(inquiry).returning();
    return created;
  }

  async getAnnouncements(): Promise<AnnouncementResponse[]> {
    return await db.select().from(announcements).orderBy(desc(announcements.date));
  }
  
  async createAnnouncement(announcement: { title: string; content: string }): Promise<AnnouncementResponse> {
    const [created] = await db.insert(announcements).values(announcement).returning();
    return created;
  }

  async getEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(desc(events.eventDate));
  }

  async getTeam(): Promise<TeamMember[]> {
    return await db.select().from(team).orderBy(team.order);
  }

  async getCirculars(): Promise<Circular[]> {
    return await db.select().from(circulars).orderBy(desc(circulars.date));
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(gallery).orderBy(desc(gallery.createdAt));
  }
}

export const storage = new DatabaseStorage();
