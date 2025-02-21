import { getAddress } from "./getAddress.js";
import { map } from "./map.js";
import { setAddress } from "./setAddress.js";

const trackerInput = document.querySelector<HTMLInputElement>('#tracker--input')
const trackerBtn = document.querySelector<HTMLInputElement>('#tracker--btn')
const errorSpan = document.querySelector<HTMLDivElement>('#show--error')

document.addEventListener('DOMContentLoaded', () => {
    map(40.712776, -73.935242, 'Brooklyn', 'NY')

    trackerBtn.addEventListener('click', async () => {
        validateIp(trackerInput.value)

        if(trackerInput.value !== '') {
            const data = await getAddress(trackerInput.value)

            const ip = data.ip
            const isp = data.isp
            const city = data.location.city
            const country = data.location.country
            const region = data.location.region
            const timezone = data.location.timezone
            const lat = data.location.lat
            const lng = data.location.lng
    
            setAddress(ip, city, country, region, timezone, isp)
            map(lat, lng, region, country)

            trackerInput.value = ''
        }
        
    })
})

function validateIp(inputValue: string) {
    const IP = inputValue.trim()

    const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/;
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])$/;

    if(ipv4Regex.test(IP) || ipv6Regex.test(IP)) {
        console.log('IP correto')
        trackerInput.classList.remove('error')
        errorSpan.classList.remove('visible')
        errorSpan.textContent = ''
    } else {
       console.log('IP incorreto')
       trackerInput.classList.add('error')
       errorSpan.classList.add('visible')
       errorSpan.textContent = 'Invalid IP'
       return
    }
}