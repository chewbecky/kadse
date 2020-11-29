function TREKProgressSVG(props) {
  return (
    <svg
      width="356px"
      height="41px"
      viewBox="0 0 356 41"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "-6px" }}
      transform={props.rotate ? "rotate(-180)" : "rotate(0)"}
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Combined-Shape"
          transform="translate(158.000000, -157.000000)"
          fill="#FFAA7A"
        >
          <path
            d="M40,0 L40,16 L32,16 C27.581722,16 24,19.581722 24,24 L24,24 L24,331 C24,335.418278 27.581722,339 32,339 L32,339 L40,339 L40,355 L24,355 C10.745166,355 1.623249e-15,344.254834 0,331 L0,24 C-1.623249e-15,10.745166 10.745166,2.4348735e-15 24,0 L40,0 Z"
            transform="translate(20.000000, 177.500000) rotate(90.000000) translate(-20.000000, -177.500000) "
          />
        </g>
      </g>
    </svg>
  );
}

export default TREKProgressSVG;
