'use client'
import {postChecks} from "@/_actions/postChecked";

export default function Checkbox({ checkboxid, checked, dataTitle, dataID }){
    checkboxid = checkboxid.replace(/\s+/g, "_")

    console.log(checkboxid)
    console.log(dataTitle)
    console.log(dataID)

    const handleClick = () => console.log(checkboxid + "clicked")


    if (checked) {
            <input type="checkbox" id={checkboxid} className="w-4 h-4 align-middle" defaultChecked />
        // onclick={postChecks(dataTitle, dataID, checked)}
    }
    return (
        <input type="checkbox" id="checkbox" className="w-4 h-4 align-middle" onClick={handleClick}/>
    )

}