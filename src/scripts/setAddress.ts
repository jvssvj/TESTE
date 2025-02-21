export function setAddress(ipParam: string, city: string, countryParam:string, regionParam: string, timezoneParam: string, ispParam: string) {
    const ip = document.querySelector<HTMLSpanElement>('#tracker__infos__address__ip')
    const location = document.querySelector<HTMLSpanElement>('#tracker__infos__location__info')
    const timezone = document.querySelector<HTMLSpanElement>('#tracker__infos__time__info')
    const isp = document.querySelector<HTMLSpanElement>('#tracker__infos__isp__info')

    ip.textContent = ipParam
    location.textContent = `${city}, ${regionParam}, ${countryParam}`
    timezone.textContent = `UTC${timezoneParam}`
    isp.textContent = ispParam
}