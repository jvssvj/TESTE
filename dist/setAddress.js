export function setAddress(ipParam, city, countryParam, regionParam, timezoneParam, ispParam) {
    const ip = document.querySelector('#tracker__infos__address__ip');
    const location = document.querySelector('#tracker__infos__location__info');
    const timezone = document.querySelector('#tracker__infos__time__info');
    const isp = document.querySelector('#tracker__infos__isp__info');
    ip.textContent = ipParam;
    location.textContent = `${city}, ${regionParam}, ${countryParam}`;
    timezone.textContent = `UTC${timezoneParam}`;
    isp.textContent = ispParam;
}
