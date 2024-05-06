'use client'
import {postChecks} from "@/_actions/postChecked";

export default function Checkbox({ checkboxid, checked, dataTitle, dataID }){
    checkboxid = checkboxid.replace(/\s+/g, "_")

    console.log(checkboxid)
    console.log(dataTitle)
    console.log(dataID)
    console.log(checked)

    const handleClickOn = () => console.log(checkboxid + "_turned_on")
    const handleClickOff = () => console.log(checkboxid + "_turned_off")


    if (checked) {

         return (
             <input type="checkbox" id={checkboxid} className="w-5 h-5 align-middle" defaultChecked onClick={handleClickOff}/>
         )
            // onclick={postChecks(dataTitle, dataID, checked)}
    }
    return (
        <input type="checkbox" id="checkbox" className="w-5 h-5 align-middle" onClick={handleClickOn}/>
    )

}