import React from 'react'

export const PersonalDetails = (props) => {
    const { phoneNo, age, adharNo, mother, father, inputOnChangeHandler } = props;
    return (
        <div>
            <input type="text" name="phoneNo" value={phoneNo} onChange={(e)=>{inputOnChangeHandler(e,'personalDetails')}} />
        </div>
    )
}
export default PersonalDetails
