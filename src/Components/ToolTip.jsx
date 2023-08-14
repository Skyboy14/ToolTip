import { useState } from 'react';
import '../StyleSheets/ToolTip.css';

// text and posotion is passed as prop
function ToolTip({ text, position }) {

  // hook to indicate the show and hide of tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  // action to show tooltip
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  // action to hide tooltip
  const handleMouseLeave = () => {
    setShowTooltip(false);
    };


    let positionCss = ''

    // to give CSS based on input of position
    switch (position) {
        case 'top':
            positionCss = 'tooltip top-position';
            break;
        case 'bottom':
            positionCss = 'tooltip bottom-position';
            break;
        case 'right':
            positionCss = 'tooltip right-position';
            break;
        case 'left':
            positionCss = 'tooltip left-position';
            break;

        // to take care of default case
        default :  positionCss = 'tooltip bottom-position';

    }

    
    return (
      
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className='buttonStyle'>
                Hover over me
            </button>
      {showTooltip && <div className={positionCss} >{text}</div>}
    </div>
  );
}

export default ToolTip;
