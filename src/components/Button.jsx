import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center 
    h-11 transition-colors hover:text-color-1 
    ${px || `px-7`} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = `releative z-10 `;

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
