import { useState, MouseEvent } from "react";

export default function ZoomImage({imageURL}: {imageURL: string}): JSX.Element {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPosition({ x, y });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="bg-[#F5F5F5] w-full lg:w-[445px] h-[400px] sm:h-[600px] overflow-hidden"
        >
            <img
                src={imageURL}
                alt="Zoomable"
                style={{
                    transformOrigin: `${position.x}% ${position.y}%`,
                }}
                className="transition-transform duration-300 hover:scale-150 w-full h-full object-cover"
            />
        </div>
    );
}
