import { expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import TrendingCarousel from "../(home)/trending-carousel";
import userEvent from "@testing-library/user-event";
import { mockCollectionWithNfts } from "@/lib/mock-api";

test("Trending Carousel is rendered", async () => {
  render(<TrendingCarousel {...mockCollectionWithNfts} />);

  // Check that the collection title is displayed
  expect(
    screen.getByText(`${mockCollectionWithNfts.title} collection`)
  ).toBeDefined();

  // Check that the NFT title is displayed
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: mockCollectionWithNfts.nfts[0].title,
    })
  ).toBeDefined();

  // Check that the artist name is displayed
  expect(screen.getByText(mockCollectionWithNfts.artist)).toBeDefined();

  expect(screen.getByText(mockCollectionWithNfts.artist)).toBeDefined();
});

test("progress bar corresponds to the number of NFTs and updates on click", () => {
  render(<TrendingCarousel {...mockCollectionWithNfts} />);

  const progressBars = screen.getAllByRole("progressbar");
  expect(progressBars).toHaveLength(mockCollectionWithNfts.nfts.length);

  // Click on the last progress bar
  userEvent.click(progressBars[progressBars.length - 1]);

  const lastNftTitle = screen.getByRole("heading", {
    level: 1,
    name: mockCollectionWithNfts.nfts[mockCollectionWithNfts.nfts.length - 1]
      .title,
  });

  // Check if the element is in the document
  expect(document.body.contains(lastNftTitle)).toBe(true);
});

test("carousel updates automatically", async () => {
  render(<TrendingCarousel {...mockCollectionWithNfts} />);

  const firstNftTitle = mockCollectionWithNfts.nfts[0].title;
  const secondNftTitle = mockCollectionWithNfts.nfts[1].title;

  // Wait for the carousel to update
  await waitFor(() => {
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: secondNftTitle,
      })
    ).toBeInTheDocument();
  });

  // Check that the first NFT title is no longer displayed
  expect(
    screen.queryByRole("heading", {
      level: 1,
      name: firstNftTitle,
    })
  ).toBeNull();
});
