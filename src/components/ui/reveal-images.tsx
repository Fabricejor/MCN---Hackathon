import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

export interface RevealImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
  textClassName?: string;
}

export function RevealImageListItem({ text, images, textClassName }: RevealImageListItemProps) {
  // Mobile: h-32 w-28. Desktop: h-52 w-48.
  // Ajustez les valeurs de 'h' (hauteur) et 'w' (largeur) ici pour changer la taille de la zone des images.
  const container = "absolute right-0 -top-8 z-40 h-32 w-28 md:h-52 md:w-48 translate-x-12 group-hover:translate-x-16 md:group-hover:translate-x-24 transition-transform duration-500";
  
  // Mobile: w-28 h-28. Desktop: w-48 h-48.
  // Ajustez les valeurs de 'w' et 'h' dans `w-28 h-28 md:w-48 md:h-48`
  // pour contrôler la taille finale de l'image lorsqu'elle apparaît.
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-28 h-28 md:w-48 md:h-48 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-4">
      <h1 className={cn("text-6xl font-black text-[var(--gold)] transition-all duration-500 group-hover:opacity-40", textClassName)}>
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-8 group-hover:translate-y-8 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: RevealImageListItemProps[] = [
    {
      text: "Branding",
      images: [
        {
          src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Web design",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Illustration",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-background px-8 py-4">
      <h3 className="text-sm font-black uppercase text-muted-foreground">Our services</h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList };
