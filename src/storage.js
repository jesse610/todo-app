
const storeLocalStorage = (projects) => {
    localStorage.setItem('properties', JSON.stringify(projects))
}

const retrieveLocalStorage = () => {
    const storedProjects = localStorage.getItem('properties')

    let properties;

    if (storedProjects)
    {
        properties = JSON.parse(storedProjects)
    }

    return properties
}

export {
    storeLocalStorage,
    retrieveLocalStorage
}