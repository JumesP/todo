

export default function Checkbox({ checkboxid, checked }){
    if (checked) {
        return (
            <input type="checkbox" id={checkboxid} className="w-4 h-4 align-middle" checked/>
        )
    }
    return (
        <input type="checkbox" id="checkbox" className="w-4 h-4 align-middle"/>
    )

}