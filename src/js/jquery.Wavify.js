import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery
import { TweenLite, TweenMax, Power1 } from 'gsap'; // Import GSAP functions

// Wavify jQuery Plugin
(function ($) {
    $.fn.wavify = function (options) {
        // Options
        var settings = $.extend({
            container: options.container ? options.container : 'body',
            height: 200,
            amplitude: 100,
            speed: 0.15,
            bones: 3,
            color: 'rgba(255,255,255, 0.20)'
        }, options);

        var wave = this,
            width = $(settings.container).width(),
            height = $(settings.container).height(),
            points = [],
            lastUpdate,
            totalTime = 0; // Ensure this variable is defined

        // Set color
        TweenLite.set(wave, { attr: { fill: settings.color } });

        function drawPoints(factor) {
            var points = [];
            for (var i = 0; i <= settings.bones; i++) {
                var x = (i / settings.bones) * width;
                var sinSeed = (factor + (i + i % settings.bones)) * settings.speed * 100;
                var sinHeight = Math.sin(sinSeed / 100) * settings.amplitude;
                var yPos = Math.sin(sinSeed / 100) * sinHeight + settings.height;
                points.push({ x: x, y: yPos });
            }
            return points;
        }

        function drawPath(points) {
            var SVGString = 'M ' + points[0].x + ' ' + points[0].y;
            var cp0 = {
                x: (points[1].x - points[0].x) / 2,
                y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y)
            };
            SVGString += ' C ' + cp0.x + ' ' + cp0.y + ' ' + cp0.x + ' ' + cp0.y + ' ' + points[1].x + ' ' + points[1].y;

            var prevCp = cp0;
            for (var i = 1; i < points.length - 1; i++) {
                var cp1 = {
                    x: (points[i].x - prevCp.x) + points[i].x,
                    y: (points[i].y - prevCp.y) + points[i].y
                };
                SVGString += ' C ' + cp1.x + ' ' + cp1.y + ' ' + cp1.x + ' ' + cp1.y + ' ' + points[i + 1].x + ' ' + points[i + 1].y;
                prevCp = cp1;
            }

            SVGString += ' L ' + width + ' ' + height;
            SVGString += ' L 0 ' + height + ' Z';
            return SVGString;
        }

        // Draw function
        function draw() {
            var now = window.Date.now();
            if (lastUpdate) {
                var elapsed = (now - lastUpdate) / 1000;
                lastUpdate = now;
                totalTime += elapsed; // Ensure this variable is used correctly
                var factor = totalTime * Math.PI;
                TweenMax.to(wave, settings.speed, {
                    attr: {
                        d: drawPath(drawPoints(factor))
                    },
                    ease: Power1.easeInOut
                });
            } else {
                lastUpdate = now;
            }
            requestAnimationFrame(draw);
        }

        // Pure js debounce function to optimize resize method
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                }, wait);
                if (immediate && !timeout) func.apply(context, args);
            };
        }

        // Redraw for resize with debounce
        var redraw = debounce(function () {
            wave.attr('d', ''); // Clear the current path
            points = []; // Reset points
            totalTime = 0; // Reset total time
            width = $(settings.container).width(); // Update width
            height = $(settings.container).height(); // Update height
            lastUpdate = false; // Reset last update time
            setTimeout(function () {
                draw(); // Restart the drawing process
            }, 50);
        }, 250);
        
        $(window).on('resize', redraw); // Attach the resize event

        // Execute the drawing function
        return draw();
    };
}(jQuery));

// React Component
const WavyBackground = () => {
    const waveRef = useRef(null);

    useEffect(() => {
        // Initialize wavify on the SVG element
        $(waveRef.current).wavify({
            height: 200,
            amplitude: 100,
            speed: 0.15,
            bones: 3,
            color: 'rgba(255,255,255, 0.20)'
        });

        // Cleanup function to remove the wavify effect on unmount
        return () => {
            $(window).off('resize'); // Remove the resize event listener
        };
    }, []);

    return (
        <svg ref={waveRef} className="wave" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path d="" />
        </svg>
    );
};

export default WavyBackground;