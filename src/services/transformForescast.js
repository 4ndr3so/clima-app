
import moment from 'moment';
import transClima from './transClima';
import 'moment/locale/es'


const transformForescast=data=>(
    data.list.filter(item=>{
        //console.log(moment.unix( item.dt).hour())
        return(
        moment.unix( item.dt).hour() === 4||
        moment.unix( item.dt).hour() === 10||
        moment.unix( item.dt).hour() === 16
    )}).map(item=>({
        weekDay:moment.unix(item.dt).format('ddd'),
        hour:moment.unix(item.dt).hour(),
        data:transClima(item)
       
    }))
)

export default transformForescast;