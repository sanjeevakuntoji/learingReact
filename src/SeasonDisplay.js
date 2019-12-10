import React from 'react';
import './SeasonDispaly.css'
const seasonConfig = {
    summer: {
        text: "Lets hit the beach",
        inconName: 'sun'
    },
    winter: {
        text: "Burr, it chilly",
        inconName: 'snowflake'
    }
};

const getSeason = (lat , month) =>{
    if(month > 2 && month <9) {
        return lat >0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    // const text = season === 'winter'? 'Burr, it chilly' : 'Lets hit the beach'
    // const icon = season === 'winter' ? 'snowflake' : 'sun'

    const {text, inconName } = seasonConfig[season]; ///constaining text and iconName
    
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${inconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${inconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;