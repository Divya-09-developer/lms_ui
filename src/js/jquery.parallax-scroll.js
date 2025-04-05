import React, { useEffect, useRef } from 'react';
import { TweenLite, TweenMax, Power1 } from 'gsap';
import $ from 'jquery';

let totalTime = 0;
let currentTime = 0;
let applyProperties = false;

const ParallaxScroll = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize the ParallaxScroll
        const parallaxScroll = {
            showLogs: false,
            round: 1000,
            _inited: false,
            _properties: ['x', 'y', 'z', 'rotateX', 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'scale'],
            _requestAnimationFrame: (function () {
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
            })(),
            init: function () {
                this._log("init");
                if (this._inited) {
                    this._log("Already Inited");
                    return;
                }
                this._inited = true;
                this._onScroll(true);
            },
            _log: function (message) {
                if (this.showLogs) console.log("Parallax Scroll / " + message);
            },
            _onScroll: function (noSmooth) {
                const scroll = $(document).scrollTop();
                const windowHeight = $(window).height();
                this._log("onScroll " + scroll);
                $("[data-parallax]").each((index, el) => {
                    const $el = $(el);
                    const properties = [];
                    const style = $el.data("style") || $el.attr("style") || "";
                    $el.data("style", style);
                    const datas = [$el.data("parallax")];
                    let iData;

                    for (iData = 2; ; iData++) {
                        if ($el.data("parallax" + iData)) {
                            datas.push($el.data("parallax-" + iData));
                        } else {
                            break;
                        }
                    }

                    const datasLength = datas.length;
                    for (iData = 0; iData < datasLength; iData++) {
                        const data = datas[iData];
                        let scrollFrom = data["from-scroll"];
                        if (scrollFrom === undefined) scrollFrom = Math.max(0, $el.offset().top - windowHeight);
                        scrollFrom = scrollFrom | 0;
                        let scrollDistance = data["distance"];
                        let scrollTo = data["to-scroll"];
                        if (scrollDistance === undefined && scrollTo === undefined) scrollDistance = windowHeight;
                        scrollDistance = Math.max(scrollDistance | 0, 1);
                        let easing = data["easing"];
                        let easingReturn = data["easing-return"];
                        if (easing === undefined || !$.easing || !$.easing[easing]) easing = null;
                        if (easingReturn === undefined || !$.easing || !$.easing[easingReturn]) easingReturn = easing;
                        if (scrollTo === undefined) scrollTo = scrollFrom + scrollDistance;
                        scrollTo = scrollTo | 0;
                        let smoothness = data["smoothness"];
                        if (smoothness === undefined) smoothness = 30;
                        smoothness = smoothness | 0;
                        if (noSmooth || smoothness === 0) smoothness = 1;
                        smoothness = smoothness | 0;
                        let scrollCurrent = scroll;
                        scrollCurrent = Math.max(scrollCurrent, scrollFrom);
                        scrollCurrent = Math.min(scrollCurrent, scrollTo);
                        if (easing) {
                            if ($el.data("sens") === undefined) $el.data("sens", "back");
                            if (scrollCurrent > scrollFrom) {
                                if ($el.data("sens") === "back") {
                                    $el.data("current-time", 1);
                                    $el.data("sens", "go");
                                } else {
                                    $el.data("current-time", $el.data("current-time") + 1);
                                }
                            }
                            if (scrollCurrent < scrollTo) {
                                if ($el.data("sens") === "go") {
                                    $el.data("current-time", 1);
                                    $el.data("sens", "back");
                                } else {
                                    $el.data("current-time", $el.data("current-time") + 1);
                                }
                            }
                            if (noSmooth) $el.data("current-time", totalTime);
                        }
                        this._properties.forEach(prop => {
                            let defaultProp = 0;
                            let to = data[prop];
                            if (to === undefined) return;
                            if (prop === "scale" || prop === "scaleX" || prop === "scaleY" || prop === "scaleZ") {
                                defaultProp = 1;
                            } else {
                                to = to | 0;
                            }
                            let prev = $el.data("_" + prop);
                            if (prev === undefined) prev = defaultProp;
                            let next = ((to - defaultProp) * ((scrollCurrent - scrollFrom) / (scrollTo - scrollFrom))) + defaultProp;
                            let val = prev + (next - prev) / smoothness;
                            if (easing && currentTime > 0 && currentTime <= totalTime) {
                                let from = defaultProp;
                                if ($el.data("sens") === "back") {
                                    from = to;
                                    to = -to;
                                    easing = easingReturn;
                                    totalTime = totalTimeReturn;
                                }
                                val = $.easing[easing](null, currentTime, from, to, totalTime);
                            }
                            val = Math.ceil(val * this.round) / this.round;
                            if (val === prev && next === to) val = to;
                            if (!properties[prop]) properties[prop] = 0;
                            properties[prop] += val;
                            if (prev !== properties[prop]) {
                                $el.data("_" + prop, properties[prop]);
                                applyProperties = true;
                            }
                        });
                    }
                    if (applyProperties) {
                        if (properties["z"] !== undefined) {
                            let perspective = data["perspective"];
                            if (perspective === undefined) perspective = 800;
                            let $parent = $el.parent();
                            if (!$parent.data("style")) $parent.data("style", $parent.attr("style") || "");
                            $parent.attr("style", "perspective:" + perspective + "px; -webkit-perspective:" + perspective + "px; " + $parent.data("style"));
                        }
                        if (properties["scaleX"] === undefined) properties["scaleX"] = 1;
                        if (properties["scaleY"] === undefined) properties["scaleY"] = 1;
                        if (properties["scaleZ"] === undefined) properties["scaleZ"] = 1;
                        if (properties["scale"] !== undefined) {
                            properties["scaleX"] *= properties["scale"];
                            properties["scaleY"] *= properties["scale"];
                            properties["scaleZ"] *= properties["scale"];
                        }
                        let translate3d = "translate3d(" + (properties["x"] ? properties["x"] : 0) + "px, " + (properties["y"] ? properties["y"] : 0) + "px, " + (properties["z"] ? properties["z"] : 0) + "px)";
                        let rotate3d = "rotateX(" + (properties["rotateX"] ? properties["rotateX"] : 0) + "deg) rotateY(" + (properties["rotateY"] ? properties["rotateY"] : 0) + "deg) rotateZ(" + (properties["rotateZ"] ? properties["rotateZ"] : 0) + "deg)";
                        let scale3d = "scaleX(" + properties["scaleX"] + ") scaleY(" + properties["scaleY"] + ") scaleZ(" + properties["scaleZ"] + ")";
                        let cssTransform = translate3d + " " + rotate3d + " " + scale3d + ";";
                        this._log(cssTransform);
                        $el.attr("style", "transform:" + cssTransform + " -webkit-transform:" + cssTransform + " " + style);
                    }
                });
                this._requestAnimationFrame($.proxy(this._onScroll, this, false));
            }
        };

        // Initialize the parallax scroll
        parallaxScroll.init();

        // Cleanup function to remove event listeners if needed
        return () => {
            $(window).off('resize', parallaxScroll._onScroll);
        };
    }, []);

    return (
        <div ref={containerRef} data-parallax="...">
            Your content here
        </div>
    );
};

export default ParallaxScroll;