import Image from "next/image";

const ProductGallery = ({ items }) => {
  // Construct Images.
  const images = items.map((item) => {
    return {
      original: item.src,
      thumbnail: item.src,
    };
  });
  const image = images[0].original;
  console.log(image);

  return <Image src={image} alt={image} width={300} height={300} />;
};

export default ProductGallery;
