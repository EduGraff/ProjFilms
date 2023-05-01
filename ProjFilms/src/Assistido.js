  export default function Assistido({ jaVisto }) {
    if (jaVisto) {
      return <p > Assistir Novamente </p>
    }
    return <p> Assistir</p>
  }