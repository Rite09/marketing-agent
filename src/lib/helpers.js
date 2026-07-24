import clsx from "clsx";

import { SITE_URL, siteMetadata } from "@/lib/constants";

export function cn(...inputs) {
  return clsx(...inputs);
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/images/og-cover.jpg",
}) {
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteMetadata.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteMetadata.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function splitLabel(value) {
  return value.split(" ").join("\u00A0");
}
