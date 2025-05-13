import { useEffect, useRef } from "react";

export const RippleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const colors = {
            ripple: "#61dafb", // Light blue
            background1: "#0f0f0f",
            background2: "#1a1a1a",
            rain: "rgba(173, 216, 230, 0.3)", // light bluish rain
        };

        const ripples: Array<{ x: number; y: number; radius: number; maxRadius: number; alpha: number; speed: number; fadeSpeed: number }> = [];
        const raindrops: Array<{ x: number; y: number; length: number; speed: number }> = [];

        const createRipple = () => {
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                radius: 0,
                maxRadius: 100 + Math.random() * 200,
                alpha: 1,
                speed: 0.5 + Math.random() * 0.5,
                fadeSpeed: 0.005 + Math.random() * 0.005,
            };
        };

        const createRaindrop = () => {
            return {
                x: Math.random() * width,
                y: Math.random() * -height, // start above the canvas
                length: 10 + Math.random() * 10,
                speed: 0.5 + Math.random() * 0.8,
            };
        };

        // Initial ripples
        for (let i = 0; i < 10; i++) {
            ripples.push(createRipple());
        }

        // Initial raindrops
        for (let i = 0; i < 100; i++) {
            raindrops.push(createRaindrop());
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Background
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, colors.background1);
            gradient.addColorStop(1, colors.background2);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw ripples
            ripples.forEach((ripple, index) => {
                if (ripple.alpha <= 0 || ripple.radius > ripple.maxRadius) {
                    ripples[index] = createRipple();
                }

                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(97, 218, 251, ${ripple.alpha})`;
                ctx.lineWidth = 2;
                ctx.stroke();

                ripple.radius += ripple.speed;
                ripple.alpha -= ripple.fadeSpeed;
            });

            // Draw raindrops
            raindrops.forEach((drop, index) => {
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(drop.x, drop.y + drop.length);
                ctx.strokeStyle = colors.rain;
                ctx.lineWidth = 1;
                ctx.stroke();

                drop.y += drop.speed;

                // Reset drop
                if (drop.y > height) {
                    raindrops[index] = createRaindrop();
                }
            });

            requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};
