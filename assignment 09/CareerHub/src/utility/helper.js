
// get all data from json data

export const getData = async () => {
    const loadData = await fetch('/db.json')
    const data = await loadData.json()
    return data
}

export const singelData = async (ids) => {
    const loadData = await fetch('/db.json')
    const data = await loadData.json()
    const featuredJobs = data.featured_jobs;
    const  jobById = featuredJobs.find(job => job.id == ids);
    return jobById
}


export const storeData = async (id) => {

    const chekStorage = localStorage.getItem('applied')

    if (!chekStorage) {
       
        const loadData = await fetch('/db.json')
        const data = await loadData.json()
        const featuredJobs = data.featured_jobs;
        const appliedItem = featuredJobs.find( (data) => data.id === id )
        let jobErr = []
        jobErr.push(appliedItem)
        const stringyfyData = JSON.stringify(jobErr)
        localStorage.setItem('applied', stringyfyData)
       return false
    }else{
        const oldData = JSON.parse(chekStorage)
        const loadData = await fetch('/db.json')
        const data = await loadData.json()
        const featuredJobs = data.featured_jobs;
        const appliedItem = featuredJobs.find( (data) => data.id === id )
        oldData.push(appliedItem)
        const stringyfyData = JSON.stringify(oldData)
        localStorage.setItem('applied', stringyfyData)
        return true
    }
}
