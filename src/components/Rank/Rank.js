import React from 'react'

const Rank = ({rankPosition, name}) => {

    return (
        <div>
            <div className="f3 white">
            {name + ", welcome!  "}
            </div>
            <div className="f2 white">
            {"You already sent " + rankPosition + " images!"}
            </div>
        </div>
    )

}

export default Rank;






