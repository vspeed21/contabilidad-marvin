import { imagesTypes } from "./interfaces";

interface Props {
  imageName: string
  type: imagesTypes
  className?: string
}

function CustomImage({ imageName, type, className }: Props) {
  return (
    <picture>
      <source className={className} srcSet={`img/${imageName}.avif`} type="image/avif" />
      <source className={className} srcSet={`img/${imageName}.webp`} type="image/webp" />
      <img className={className} src={`img/${imageName}.${type}`} alt={`image ${imageName}`} />
    </picture>
  );
}

export default CustomImage;
