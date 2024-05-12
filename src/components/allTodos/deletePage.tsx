'use client'

import {deletePage} from "@/_actions/postDeletePage";

export default function DeletePage( dataTitle ) {

    dataTitle = dataTitle["dataTitle"]

    return (
        <button className="w-6 h-6 ml-3 mt-1.5 bg-red-700 border-2 rounded-md border-black flex  align-middle justify-center Logo" onClick={e => deletePage(dataTitle)}></button>
    )
}