import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us | CleanNestPro",
  description:
    "Apply to work with CleanNestPro in Antalya. We are building a trusted cleaning network for premium homes, holiday properties, and Airbnb hosts.",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}