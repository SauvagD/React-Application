const baseAPI ='/api';

const phonesAPI = {
    get(){
        return new Promise((resolve, reject)=>{
            fetch('/api/phones')
            .then(result => result.json())
            .then(json =>resolve(json))
            .catch(err=>reject(err));
        })
    } ,
    create(phone){
        return new Promise((resolve, reject)=>{
            fetch(`${baseAPI}/addPhone`,{
                method: 'POST',
                body: JSON.stringify(phone),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(result=>result.json())
            .then(json=>resolve(json))
            .catch(err=>{
                reject(err);
            })
        })
    },
    update(phone){
        return new Promise((resolve, reject) => {
            fetch(`${baseAPI}/phone`, {
                method: 'PUT',
                body: JSON.stringify(phone),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(result=>result.json())
            .then(json=>resolve(json))
            .catch(err=>{
                reject(err);
            })
        })
    },

    // delete(phone){
    //     console.log(phone.id)
    //     return new Promise((resolve, reject)=>{
    //         fetch(`/api/phone/${phone.id}`, {
    //             method: 'DELETE'
    //         })
    //         .then(response =>response.json())
    //         .then(json=> resolve(json))
    //         .catch(err=>{
    //             reject(err);
    //         })
    //     }) 
    // },

}
export default phonesAPI;