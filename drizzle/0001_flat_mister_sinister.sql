CREATE TYPE "public"."meeting_status" AS ENUM('upcoming', 'active', 'completed', 'processing', 'cancelled');--> statement-breakpoint
ALTER TABLE "agents" DROP CONSTRAINT "agents_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "agent_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "status" "meeting_status" DEFAULT 'upcoming' NOT NULL;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "started_at" timestamp;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "ended_at" timestamp;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "transcript_url" text;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "recording_url" text;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "summary" text;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "updated at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "agents" ADD CONSTRAINT "agents_user_id_agents_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."agents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agents" ADD CONSTRAINT "agents_agent_id_user_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agents" DROP COLUMN "instructions";--> statement-breakpoint
ALTER TABLE "agents" DROP COLUMN "updated_at";