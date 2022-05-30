import '../App.css';


export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img
        style={{
          borderRadius: borderRadius || "0",
          width: width || "auto",
          height: height || "auto",
          objectFit: fit || "unset",
        }}
        src={src}
        alt={alt}
      />
    </div>
  );
};