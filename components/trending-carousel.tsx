/* eslint-disable react/no-unescaped-entities */
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const TrendingCarousel = () => {
  return (
    <Card className="bg-[]">
      <CardHeader>
        <CardTitle>Trending</CardTitle>
        <CardDescription>
          See what's trending on the marketplace
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-40 h-40 bg-gray-200 rounded-lg" />
          <div className="flex-shrink-0 w-40 h-40 bg-gray-200 rounded-lg" />
          <div className="flex-shrink-0 w-40 h-40 bg-gray-200 rounded-lg" />
          <div className="flex-shrink-0 w-40 h-40 bg-gray-200 rounded-lg" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">View All</Button>
      </CardFooter>
    </Card>
  );
};

export default TrendingCarousel;
