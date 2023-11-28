/**
 * Quando e necessário criar um component?
 * >> quando um elemento se repete muitas vezes com op mesmo funcionamento
 * >> quando você consegue tirar algo de um componente maior sem que aquele componente maior pare de funcionar
 * tomar cuidaod com otimização prematura
 */
import styles from "./Avatar.module.css";

/**
 * criar interface e desestruturar objetos
 */
interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return (
    <>
      <img
        alt={alt}
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
      />
    </>
  );
}
