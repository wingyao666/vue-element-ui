import axios from 'axios'

// export function get(url) {
//     return new Promise((resolve => {
//         axios.get(url).then(res=>{
//             resolve(res.data)
//         }).catch(err => {
//
//         })
//     }))
// }

export function get2(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}



export const get = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
