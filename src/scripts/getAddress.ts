const API_LEY = 'at_FSIMR4SEznadiR8jXDGVEKcC5MZuL'

interface Address {
    ip: string
    isp: string
    location: {
        lat: number
        lng: number
        city: string
        country: string
        region: string
        timezone:string
    }
}

export async function getAddress(ip:string) {
    try {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_LEY}&ipAddress=${ip}`
        const resp = await fetch(url, {
            method: 'GET'
        })

        if(!resp.ok) {
            throw new Error('Failed to find address')
        }

        const data: Address = await resp.json()
        
        return data

    } catch (error) {
        console.log(error)
    }
}