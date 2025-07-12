"use client";

import { useState, useRef, useEffect } from "react";

type Segment = {
    label: string;
    value: string;
};

type SegmentedButtonProps = {
    segments: Segment[];
    defaultValue?: string;
    onChange?: (value: string) => void;
};

export default function SegmentedButton({
    segments,
    defaultValue,
    onChange,
}: SegmentedButtonProps) {
    const [selected, setSelected] = useState<string>(
        defaultValue || segments[0].value
    );
    const containerRef = useRef<HTMLDivElement>(null);
    const [segmentWidth, setSegmentWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            setSegmentWidth(width / segments.length);
        }
    }, [segments.length]);

    const handleSelect = (value: string) => {
        setSelected(value);
        onChange?.(value);
    };

    const selectedIndex = segments.findIndex((s) => s.value === selected);

    return (
        <div
            ref={containerRef}
            className='relative flex rounded-lg overflow-hidden border border-black dark:border-zinc-800 w-full max-w-md'
        >
            {/* Sliding background */}
            <div
                className='absolute top-0 h-full bg-black dark:bg-zinc-700 transition-all duration-300 ease-in-out rounded-lg'
                style={{
                    width: `${segmentWidth}px`,
                    left: `${selectedIndex * segmentWidth}px`,
                }}
            />

            {/* Buttons */}
            {segments.map((segment) => {
                const isSelected = selected === segment.value;
                return (
                    <button
                        key={segment.value}
                        onClick={() => handleSelect(segment.value)}
                        className={`w-full px-2 py-2 text-sm font-medium z-10 transition-colors text-center focus:outline-none 
              ${
                  isSelected
                      ? "text-white"
                      : "text-black dark:text-zinc-300 hover:text-black dark:hover:text-white"
              }`}
                        aria-pressed={isSelected}
                    >
                        {segment.label}
                    </button>
                );
            })}
        </div>
    );
}
