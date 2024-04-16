import { act, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrendingCarousel from "@/components/trending-carousel-test";
import { mockCollectionWithNfts } from "@/lib/mock-api";

describe("TrendingCarousel", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the TrendingCarousel component", () => {
    render(<TrendingCarousel {...mockCollectionWithNfts} />);
    expect(screen.getByText("Trending Now")).toBeInTheDocument();
  });

  it("renders the artist and title of the first NFT", () => {
    render(<TrendingCarousel {...mockCollectionWithNfts} />);
    const { artist, title, nfts } = mockCollectionWithNfts;
    const artistElements = screen.getAllByText(artist);
    expect(artistElements.length).toBe(2); // Expect artist name in two places
    expect(screen.getByText(`${title} collection`)).toBeInTheDocument();
    expect(screen.getByText(nfts[0].title)).toBeInTheDocument();
  });

  it("changes image/title after specific interval", async () => {
    render(<TrendingCarousel {...mockCollectionWithNfts} />);
    const { nfts } = mockCollectionWithNfts;
    const firstNft = nfts[0];
    const secondNft = nfts[1];

    expect(screen.getByText(firstNft.title)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(10000); // Fast forward the timer
    });

    await waitFor(() => {
      expect(screen.queryByText(firstNft.title)).not.toBeInTheDocument();
      expect(screen.getByText(secondNft.title)).toBeInTheDocument();
    });
  });

  it("changes currentItem after user interaction", async () => {
    render(<TrendingCarousel {...mockCollectionWithNfts} />);
    const { nfts } = mockCollectionWithNfts;
    const firstNft = nfts[0];
    const secondNft = nfts[1];
    const thirdNft = nfts[2];

    expect(screen.getByText(firstNft.title)).toBeInTheDocument();

    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars.length).toBe(nfts.length);

    act(() => {
      progressBars[1].click();
    });

    await waitFor(() => {
      expect(screen.queryByText(firstNft.title)).not.toBeInTheDocument();
      expect(screen.getByText(secondNft.title)).toBeInTheDocument();
    });

    act(() => {
      progressBars[2].click();
    });

    await waitFor(() => {
      expect(screen.queryByText(secondNft.title)).not.toBeInTheDocument();
      expect(screen.getByText(thirdNft.title)).toBeInTheDocument();
    });
  });
});
