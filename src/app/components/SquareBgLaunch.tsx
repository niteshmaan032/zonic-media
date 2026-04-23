"use client";

import { useEffect, useState } from "react";

type LaunchSquare = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
};

type SquarePoint = {
  top: number;
  left: number;
};

function isFarEnough(candidate: SquarePoint, placed: SquarePoint[]) {
  return placed.every((square) => {
    const verticalGap = Math.abs(square.top - candidate.top);
    const horizontalGap = Math.abs(square.left - candidate.left);

    return verticalGap > 9 || horizontalGap > 7;
  });
}

function pickSquarePoint(
  placed: SquarePoint[],
  leftMin: number,
  leftMax: number,
  fallbackIndex: number,
  fallbackCount: number,
) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const candidate = {
      top: 8 + Math.random() * 78,
      left: leftMin + Math.random() * (leftMax - leftMin),
    };

    if (isFarEnough(candidate, placed)) {
      return candidate;
    }
  }

  return {
    top: 12 + (fallbackIndex % fallbackCount) * (62 / Math.max(1, fallbackCount - 1)),
    left: (leftMin + leftMax) / 2,
  };
}

function buildSquares(count: number): LaunchSquare[] {
  const leftCount = Math.ceil(count / 2);
  const placed: SquarePoint[] = [];

  return Array.from({ length: count }, (_, index) => {
    let point: SquarePoint;

    if (index < leftCount) {
      point = pickSquarePoint(placed, 4, 19, index, leftCount);
    } else {
      point = pickSquarePoint(
        placed,
        81,
        96,
        index - leftCount,
        count - leftCount,
      );
    }

    placed.push(point);

    return {
      id: index,
      top: `${point.top}%`,
      left: `${point.left}%`,
      size: 30,
      delay: `${Math.random() * 4}s`,
      duration: `${3.8 + Math.random() * 4.4}s`,
    };
  });
}

export default function SquareBgLaunch() {
  const [squares, setSquares] = useState<LaunchSquare[]>([]);

  useEffect(() => {
    const syncSquares = () => {
      const squareCount = window.innerWidth < 768 ? 4 : 7;
      setSquares(buildSquares(squareCount));
    };

    syncSquares();
    window.addEventListener("resize", syncSquares);

    return () => window.removeEventListener("resize", syncSquares);
  }, []);

  return (
    <div className="launchpad-square-bg" aria-hidden="true">
      {squares.map((square) => (
        <div
          key={square.id}
          className="launchpad-square"
          style={{
            top: square.top,
            left: square.left,
            width: `${square.size}px`,
            height: `${square.size}px`,
            animationDelay: square.delay,
            animationDuration: square.duration,
          }}
        />
      ))}
    </div>
  );
}
