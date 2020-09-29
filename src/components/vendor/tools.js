export default function dateDiff(date1, date2 = date1){             // if given, date2 must be higher than date1
    if(date2 === date1)date1 = new Date()
    if(date1.getFullYear() < date2.getFullYear())
        var diff = {month: (12 - (date1.getMonth()+1)) + 4}         // The Tour occur in 2021, so we're still in the previous year we calculate like this: (12 - (date1.getMonth+1))
    else var diff = {month: (date2.getMonth() - date1.getMonth())}  // otherwise if we're in 2021(the same year), we calculate like this: (date2.getMonth()-date1.getMonth())
    if(date1.getDate() > date2.getDate())                           // if current th day if higher than Tour's th day, we have to minus diff.month
        diff.month--
    date1.setMonth(date1.getMonth() + diff.month)                   // we egalize dates without counting further months, but just days now that we have months different

    var tmp = date2 - date1;

    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes

    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes

    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures

    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
    diff.day = tmp;

    return JSON.stringify(diff);
}



export function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = []
    const headers = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(',')

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    return result
}