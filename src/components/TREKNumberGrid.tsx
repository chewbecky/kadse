import {
  Grid,
  GridItem,
  keyframes,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { getColor } from "@chakra-ui/theme-tools";
import React, {
  FunctionComponent,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import theme from "../theme";

interface TREKNumberGridProps {
  numberOfLines: number;
}

const changeColor = keyframes`
  0% { color: ${getColor(theme, "orange")}; }
  56% { color: ${getColor(theme, "orange")}; }
  57% { color: ${getColor(theme, "lightLavender")}; }
  68% { color: ${getColor(theme, "lightLavender")}; }
  69% { color: ${getColor(theme, "orange")}; }
  84% { color: ${getColor(theme, "orange")}; }
  85% { color: ${getColor(theme, "black")}; }
  100% { color: ${getColor(theme, "black")}; }
`;

const TREKNumberGrid: FunctionComponent<TREKNumberGridProps> = (props) => {
  const [columnCount, setColumnCount] = useState(10);
  const [gridTemplateColumn, setGridTemplateColumn] = useState("");
  const boundingRectRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions(window.innerWidth);
    });
    let columnCount: number = 0;
    if (boundingRectRef.current !== null) {
      columnCount = Math.floor(
        (boundingRectRef.current.offsetWidth - 196) / 36
      );
      setGridTemplateColumn(`36px 72px 24px repeat(${columnCount}, 36px) 32px`);
      setColumnCount(columnCount);
    }
  }, [boundingRectRef, dimensions]);

  const prefersReducedMotion = usePrefersReducedMotion();

  const setRandomNumber = (numOfDigits: number): number => {
    return Math.floor(Math.random() * Math.pow(10, numOfDigits));
  };

  const createGrid = (numberOfLines: number): ReactNode => {
    let cell = [];
    let key = 0;

    for (let i = 0; i < numberOfLines; i++) {
      const animation = prefersReducedMotion
        ? undefined
        : `${changeColor} infinite 5s linear ${i}s alternate`;

      cell.push(
        <GridItem key={key++}>
          <Text animation={animation} textStyle="content">
            {setRandomNumber(4)}
          </Text>
        </GridItem>
      );
      cell.push(
        <GridItem key={key++}>
          <Text animation={animation} textStyle="content">
            {setRandomNumber(7)}
          </Text>
        </GridItem>
      );
      cell.push(
        <GridItem key={key++}>
          <Text animation={animation} textStyle="content">
            {setRandomNumber(1)}
          </Text>
        </GridItem>
      );

      for (let j = 0; j < columnCount; j++) {
        cell.push(
          <GridItem key={key++}>
            <Text animation={animation} textStyle="content">
              {setRandomNumber(4)}
            </Text>
          </GridItem>
        );
      }

      cell.push(
        <GridItem key={key++}>
          <Text animation={animation} textStyle="content">
            {setRandomNumber(2)}
          </Text>
        </GridItem>
      );
    }

    return <>{cell}</>;
  };

  return (
    <Grid w="full" templateColumns={gridTemplateColumn} ref={boundingRectRef}>
      {createGrid(props.numberOfLines)}
    </Grid>
  );
};

TREKNumberGrid.defaultProps = {
  numberOfLines: 5,
};

export default TREKNumberGrid;
