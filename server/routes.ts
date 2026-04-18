import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed initial announcements if none exist
  async function seedDatabase() {
    try {
      const existing = await storage.getAnnouncements();
      if (existing.length === 0) {
        await storage.createAnnouncement({
          title: "BME Conclave 2026",
          content: "Join us for the flagship national gathering of India's non-ferrous metals industry on April 8-9, 2026 at Bharat Mandapam, New Delhi. Connect with 800+ industry leaders, explore 70+ expo stalls, and participate in strategic discussions on market trends and policy reforms.",
        });
        await storage.createAnnouncement({
          title: "BME App Launching Soon",
          content: "We are excited to announce the upcoming launch of our new BME Mobile App. Stay tuned for the enhanced mobile experience with real-time market updates, easy access to benchmark pricing, and seamless industry connectivity - available on iOS and Android.",
        });
        await storage.createAnnouncement({
          title: "Benchmark Prices Updated",
          content: "Latest benchmark prices for Copper and Zinc have been released and circulated to members.",
        });
      }
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  }

  // Call seed on startup
  seedDatabase();

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get(api.announcements.list.path, async (req, res) => {
    try {
      const results = await storage.getAnnouncements();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get(api.events.list.path, async (req, res) => {
    try {
      const results = await storage.getEvents();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get(api.team.list.path, async (req, res) => {
    try {
      const results = await storage.getTeam();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get(api.circulars.list.path, async (req, res) => {
    try {
      const results = await storage.getCirculars();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get(api.gallery.list.path, async (req, res) => {
    try {
      const results = await storage.getGalleryItems();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return httpServer;
}
