import React, { useEffect, useRef } from 'react';
import './Tooltip.css'; // Import your CSS for tooltip styles

const Tooltip = ({ children, tooltipContent, position = 'top', className = '' }) => {
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);
  const tooltipId = 'js-tooltip-element';

  useEffect(() => {
    const tooltipElement = tooltipRef.current;
    const triggerElement = triggerRef.current;

    // Initialize tooltip
    triggerElement.removeAttribute('title');
    triggerElement.setAttribute('tabindex', '0');

    const showTooltip = (event) => {
      createTooltip();
      placeTooltip();
    };

    const hideTooltip = () => {
      removeTooltip();
    };

    const handleMouseEnter = (event) => {
      showTooltip(event);
    };

    const handleMouseLeave = () => {
      hideTooltip();
    };

    triggerElement.addEventListener('mouseenter', handleMouseEnter);
    triggerElement.addEventListener('mouseleave', handleMouseLeave);
    triggerElement.addEventListener('focus', handleMouseEnter);
    triggerElement.addEventListener('blur', hideTooltip);

    return () => {
      triggerElement.removeEventListener('mouseenter', handleMouseEnter);
      triggerElement.removeEventListener('mouseleave', handleMouseLeave);
      triggerElement.removeEventListener('focus', handleMouseEnter);
      triggerElement.removeEventListener('blur', hideTooltip);
    };
  }, [tooltipContent, position]);

  const createTooltip = () => {
    let tooltip = document.getElementById(tooltipId);
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = tooltipId;
      tooltip.className = `tooltip tooltip--is-hidden ${className}`;
      document.body.appendChild(tooltip);
    }
    tooltip.innerHTML = tooltipContent;
    tooltip.classList.remove('tooltip--is-hidden');
  };

  const placeTooltip = () => {
    const tooltip = document.getElementById(tooltipId);
    const trigger = triggerRef.current;
    const positionTrigger = trigger.getBoundingClientRect();
    const tooltipDimensions = [tooltip.offsetHeight, tooltip.offsetWidth];
    const position = {};

    position.top = [positionTrigger.top - tooltipDimensions[0] - 10, (positionTrigger.left + positionTrigger.right) / 2 - tooltipDimensions[1] / 2];
    position.bottom = [positionTrigger.bottom + 10, (positionTrigger.left + positionTrigger.right) / 2 - tooltipDimensions[1] / 2];
    position.left = [positionTrigger.top + (positionTrigger.height / 2) - (tooltipDimensions[0] / 2), positionTrigger.left - tooltipDimensions[1] - 10];
    position.right = [positionTrigger.top + (positionTrigger.height / 2) - (tooltipDimensions[0] / 2), positionTrigger.right + 10];

    let direction = position;

    if (position[direction][0] < window.scrollY) direction = 'bottom';
    else if (position[direction][0] + tooltipDimensions[0] > window.scrollY + window.innerHeight) direction = 'top';
    else if (position[direction][1] < 0) direction = 'right';
    else if (position[direction][1] + tooltipDimensions[1] > window.innerWidth) direction = 'left';

    tooltip.style.top = position[direction][0] + 'px';
    tooltip.style.left = position[direction][1] + 'px';
    tooltip.classList.add(`tooltip--${direction}`);
  };

  const removeTooltip = () => {
    const tooltip = document.getElementById(tooltipId);
    if (tooltip) {
      tooltip.classList.add('tooltip--is-hidden');
    }
  };

  return (
    <span ref={triggerRef} className="js-tooltip-trigger">
      {children}
    </span>
  );
};

// Example usage of the Tooltip component
const App = () => {
  return (
    <div>
      <Tooltip tooltipContent="This is a tooltip!" position="top">
        <button>Hover or focus me!</button>
      </Tooltip>
    </div>
  );
};

export default App;