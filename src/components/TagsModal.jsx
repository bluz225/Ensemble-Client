import { useState } from "react"

export default function TagsModal({ setTagModal, handleSubmit, handleAddTagsSubmit, tagForm, setTagForm, tagModalType, tags, selectedTags, setSelectedTags }) {
    
    const [tagsOnClothing, setTagsOnClothing] = useState([])
    
    useEffect(()=>{
        
    },[])

    const closeTagClick = () => {
        setTagModal(false)
    }

    const allTags = tags.map((mappedTag, i) =>{
        // console.log(mappedTag)
        return(
            <div key={mappedTag._id}>
                <input type="checkbox" name="tagName" id="tagName" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" /**checked={selectedTags.some((tag) => tag._id === mappedTag._id)}*/ value={mappedTag} onChange={e => handleCheckbox(e, mappedTag) } />
                <label htmlFor="tagName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{mappedTag.tagName}</label>       
            </div>
        )
    })

    const handleCheckbox = (e,tag) =>{
        console.log("tag",tag)
        // setSelectedTags([...selectedTags, tag])
        let currentlySelectedTags = []
        currentlySelectedTags.push(tag)
        // map through checked tags and return their ids
        console.log("selectedTags",selectedTags)
        const selectedTagsIds = currentlySelectedTags.map(tag => {
            return tag._id  
        })
        console.log("SELECTED TAG IDS",selectedTagsIds)

        console.log("allTags",allTags)

        // // if you check a tag & it isn't already in selectedTags, add it
        // if(e.target.checked && !selectedTags.some((tag) => tag === e.target.value)){
        //     // add a tag that has an id that matches the value of the checkbox to selectedTags
        //     setSelectedTags([...selectedTags, allTags.find(tag => tag === e.target.value)]) 
        // // if you uncheck a tag & it is in selectedTags remove it
        // }else if(!e.target.checked && selectedTags.some((tag) => tag === e.target.value)) {
        //     // find the index of specific tag
        //     const idx = selectedTagsIds.indexOf(e.target.value)
        //     // make a copy of selectedTags
        //     const selectedTagsCopy = [...selectedTags]
        //     // remove the tag at found index
        //     selectedTagsCopy.splice(idx, 1)
        //     // set selectedTags to the updated selectedTagsCopy
        //     setSelectedTags(selectedTagsCopy)
        // }

    }

    return (
        <>
            {tagModalType === "create" ? 
            
            <div id="tag-create-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="tag-create-modal" onClick={() => closeTagClick()}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create a New Tag</h3>
                            <form className="space-y-6" action="#" onSubmit={(e) => handleSubmit(e, tagForm)}>
                                <div>
                                    <label for="tagName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tag:</label>
                                    <input type="text" name="tagName" id="tagName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={tagForm.tagName} placeholder="Create a Tag" onChange={e => setTagForm({ ...tagForm, tagName: e.target.value })} required />
                                </div>

                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Tag</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div id="tag-apply-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="tag-apply-modal" onClick={() => closeTagClick()}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add tags!</h3>
                            <form className="space-y-6" action="#" onSubmit={(e) => handleAddTagsSubmit(e, selectedTags)}>
                                {allTags}
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Tags</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}