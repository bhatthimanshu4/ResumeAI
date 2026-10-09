import { NextRequest, NextResponse } from "next/server";
type SuggestionSeverity = "critical" | "warning" | "info";

interface BackendSuggestion {
  text: string;
  severity: SuggestionSeverity;
}

function getSeverity(text: string): BackendSuggestion["severity"] {
  const t = text.toLowerCase();
  if (/critical|urgent|crucial|fatal|must|missing|not found/i.test(t)) return "critical";
  if (/improve|better|should|add|consider|more/i.test(t)) return "warning";
  return "info";
}

function buildSuggestions(raw: string[]): BackendSuggestion[] {
  return raw.map(s => ({ text: s, severity: getSeverity(s) }));
}

function extractKeywords(text: string): string[] {
  return Array.from(
    new Set(
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(
          w =>
            w.length >= 3 &&
            ![
              "the","and","for","with","you","are","will","have","this","your",
              "from","that","their","they","about","work","experience","role",
              "team","looking","including","required","preferred","looking","with",
            ].includes(w),
        ),
    ),
  );
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const jobDescription = String(formData.get("jobDescription") ?? "").trim();
  const resumeFile = formData.get("resume") as File | null;

  if (resumeFile) {
    console.log("Resume File Name:", resumeFile.name);
    console.log("Resume File Size:", resumeFile.size);
    console.log("Resume File Type:", resumeFile.type);
  }

  if (!jobDescription && !resumeFile) {
    return NextResponse.json({ error: "No input provided" }, { status: 400 });
  }

  const mockSuggestions = [
    "Add AWS skills",
    "Improve React projects",
    "Use better metrics",
    "Add Docker experience",
    "Include PostgreSQL projects",
    "Consider adding TypeScript examples",
  ];

  const referenceKeywords = [
    "aws", "react", "typescript", "tailwind", "next.js",
    "docker", "postgresql", "node.js", "git", "rest api",
  ];
  const jdTokens = extractKeywords(jobDescription);
  const matchedKeywords = referenceKeywords.filter(k => jdTokens.includes(k));
  const missingKeywords = referenceKeywords.filter(k => !jdTokens.includes(k));
  const keywordMatchRate = referenceKeywords.length > 0
    ? Math.round((matchedKeywords.length / referenceKeywords.length) * 100)
    : 0;

  return NextResponse.json({
    score: 85,
    keywordMatchRate,
    matchedKeywords,
    missingKeywords,
    suggestions: buildSuggestions(mockSuggestions),
  });
}
