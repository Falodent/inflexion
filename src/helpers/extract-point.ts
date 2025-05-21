// helpers
import { convertDate } from "./convert-date";

// types
import {
  CatalystEvent,
  KPITable,
  PunchQuote,
  TOCData,
  ToneAndRiskData,
} from "@/types/content";

export const extractPoints = (htmlString: string): string[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const firstUl = doc.querySelector("ul");

  return firstUl
    ? Array.from(firstUl.querySelectorAll("li")).map(
        (li) => li.textContent || ""
      )
    : [];
};

export function extractPeople(html: string): string[] {
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  if (!h1Match || h1Match.length < 2) return [];

  const h1Text = h1Match[1];

  const namePart = h1Text.split("—")[1]?.trim();
  if (!namePart) return [];

  return namePart.split("×").map((name) => name.trim());
}

export const extractCatalystCalendar = (
  htmlString: string
): CatalystEvent[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const headings = Array.from(doc.querySelectorAll("h3"));
  const catalystHeading = headings.find((h) =>
    h.textContent?.toLowerCase().includes("catalyst calendar")
  );

  if (!catalystHeading) return [];

  const events: CatalystEvent[] = [];
  const next = catalystHeading.nextElementSibling;

  if (next?.tagName.toLowerCase() === "ul") {
    const lis = Array.from(next.querySelectorAll("li"));
    for (const li of lis) {
      const text = li.textContent || "";
      const match = text.match(/^(\d{4}-\d{2}-\d{2}):\s*(.*)$/);
      if (match) {
        events.push({
          date: convertDate(match[1]),
          event: match[2],
        });
      }
    }
  }

  return events;
};

export function extractTone(htmlString: string): ToneAndRiskData | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const result: ToneAndRiskData | null = {
    sentiment: "",
    risks: [],
  };

  const sentimentPattern = /Sentiment:\s*([^)]+\))/i;
  const paragraphs = Array.from(doc.querySelectorAll("p"));

  for (const p of paragraphs) {
    const match = p.textContent?.match(sentimentPattern);
    if (match) {
      result.sentiment = match[1].trim();
      break;
    }
  }

  const risksHeader = Array.from(doc.querySelectorAll("p, h3")).find((p) =>
    p.textContent?.includes("Risk")
  );

  if (risksHeader) {
    let nextElement = risksHeader.nextElementSibling;

    while (nextElement) {
      if (nextElement.tagName === "UL") {
        const riskItems = Array.from(nextElement.querySelectorAll("li"));
        result.risks = riskItems.map((li) => li.textContent?.trim() || "");
        break;
      }
      nextElement = nextElement.nextElementSibling;
    }
  }

  return result;
}

export function extractPunchQuotes(htmlString: string): PunchQuote[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const quotes: PunchQuote[] = [];

  const punchQuotesSection = Array.from(doc.querySelectorAll("p, h3")).find(
    (p) =>
      p.textContent?.includes("Punch Quotes") ||
      p.textContent?.includes("Key Quotes")
  );

  if (!punchQuotesSection) return quotes;

  let quotesContainer = punchQuotesSection.nextElementSibling;

  if (!quotesContainer || !quotesContainer.textContent?.includes("• [")) {
    quotesContainer = punchQuotesSection.parentElement;
  }

  if (!quotesContainer) return quotes;

  const textContent = quotesContainer.textContent || "";
  const quotePattern = /•\s*\[([^\]]+)\]\s*—\s*"([^"]+)"/g;
  let match;

  while ((match = quotePattern.exec(textContent)) !== null) {
    quotes.push({
      timestamp: match[1].trim(),
      quote: match[2].trim(),
    });
  }

  return quotes;
}

export function extractTOC(htmlString: string): TOCData[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const tocItems: TOCData[] = [];

  const tocHeader = Array.from(
    doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
  ).find((header) =>
    /(Chronological|Timeline|Agenda|ToC|Table of Contents)/i.test(
      header.textContent || ""
    )
  );

  if (!tocHeader) return tocItems;

  let tocList: HTMLUListElement | null = null;
  let nextElement = tocHeader.nextElementSibling;

  while (nextElement) {
    if (nextElement.tagName === "UL") {
      tocList = nextElement as HTMLUListElement;
      break;
    }
    nextElement = nextElement.nextElementSibling;
  }

  if (!tocList) return tocItems;

  const items = tocList.querySelectorAll("li");
  items.forEach((item) => {
    const text = item.textContent?.trim() || "";

    const timestampMatch = text.match(/(?:\[)?(\d{2}:\d{2}:\d{2})(?:\])?/);
    if (!timestampMatch) return;

    const timestampEndPos = timestampMatch.index! + timestampMatch[0].length;

    const content = text
      .slice(timestampEndPos)
      .replace(/^[\s-—:]+/, "")
      .trim();

    if (content) {
      tocItems.push({
        timestamp: timestampMatch[1],
        content,
      });
    }
  });

  return tocItems;
}

export const extractKPITable = (htmlString: string): KPITable | null => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const table = doc.querySelector("table");
  if (!table) return null;

  const headers = Array.from(table.querySelectorAll("thead th")).map(
    (th) => th.textContent?.trim() || ""
  );

  const rows = Array.from(table.querySelectorAll("tbody tr")).map((tr) => {
    return Array.from(tr.querySelectorAll("td")).map(
      (td) => td.textContent?.trim() || ""
    );
  });

  return { headers, rows };
};
