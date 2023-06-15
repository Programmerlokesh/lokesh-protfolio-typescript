import Link from "next/link";

function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link className="btn" href={link} passHref>
      {text}
    </Link>
  );
}

export default Button;
