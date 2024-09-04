"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `This organization is a registered student organization of Cornell University`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}
