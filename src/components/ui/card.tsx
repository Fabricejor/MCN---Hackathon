import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility for classnames

// Define the base props
type HotelCardBaseProps = {
  imageUrl: string;
  imageAlt: string;
  roomType: string;
  hotelName: string;
  location: string;
  rating: number;
  reviewCount: number;
};

// Create a discriminated union for polymorphic props using framer-motion's types
export type HotelCardProps = HotelCardBaseProps &
  (
    | ({ href?: undefined } & Omit<HTMLMotionProps<"div">, keyof HotelCardBaseProps>)
    | ({ href: string } & Omit<HTMLMotionProps<"a">, keyof HotelCardBaseProps>)
  );

const HotelCard = React.forwardRef<
  HTMLDivElement | HTMLAnchorElement,
  HotelCardProps
>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      roomType,
      hotelName,
      location,
      rating,
      reviewCount,
      href,
      ...props
    },
    ref
  ) => {
    const Component = href ? motion.a : motion.div;

    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any} // Using `as any` here is a pragmatic choice for complex polymorphic refs with framer-motion
        href={href}
        className={cn(
          "group flex flex-col md:flex-row overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg",
          className
        )}
        // Animation variants for framer-motion
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        {/* Image Section */}
        <div className="md:w-2/5 w-full h-56 md:h-auto overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center p-4 md:p-6 md:w-3/5 space-y-2">
          <span className="text-sm text-muted-foreground">{roomType}</span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">{hotelName}</h3>
          
          {/* Location */}
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{location}</span>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center pt-2 text-muted-foreground">
            <Star className="mr-2 h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
            <span className="ml-1.5">({reviewCount.toLocaleString()} Reviews)</span>
          </div>

          {/* Actions slot */}
          {props.children ? (
            <div className="mt-4 flex items-center justify-end w-full">
              {props.children as React.ReactNode}
            </div>
          ) : null}
        </div>
      </Component>
    );
  }
);

HotelCard.displayName = "HotelCard";

export { HotelCard };