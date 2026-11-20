import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Frankfurter v2 publishes reference rates; cache them to protect the upstream.
const SOURCE_URL = "https://api.frankfurter.dev/v2/rate/eur/try";

export async function GET() {
  try {
    const response = await fetch(SOURCE_URL, {
      next: { revalidate: 60 * 60 },
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      throw new Error(`Upstream FX HTTP ${response.status}`);
    }

    const data: unknown = await response.json();
    if (typeof data !== "object" || data === null) {
      throw new Error("Invalid FX response");
    }

    const rate = (data as { rate?: unknown }).rate;
    const date = (data as { date?: unknown }).date;
    if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0 || rate > 500) {
      throw new Error("Invalid EUR/TRY rate");
    }

    return NextResponse.json(
      {
        base: "EUR",
        quote: "TRY",
        rate,
        date: typeof date === "string" ? date : null,
        source: "Frankfurter",
      },
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200" } },
    );
  } catch (error) {
    console.error("EUR/TRY reference rate unavailable:", error);
    // Never serve an unverified rate as though it were live.
    return NextResponse.json(
      { error: "Current EUR/TRY reference rate is temporarily unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
