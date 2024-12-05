CREATE TYPE "public"."status" AS ENUM('open', 'paid', 'void', 'uncollectible');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoice" (
	"íd" serial PRIMARY KEY NOT NULL,
	"createTs" timestamp DEFAULT now() NOT NULL,
	"value" integer NOT NULL,
	"description" text NOT NULL,
	"status" "status" NOT NULL
);
