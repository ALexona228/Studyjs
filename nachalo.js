const mycity={
    city: 'Makeevka',
    info:{
        popular: true,
        Country: 'USA'
    }
}
const jeka='Canada'

mycity.info['Country']='jeka'

console.log(mycity)

mycity.info.Country=jeka

const country='Country'

mycity.info[country]='usa'

console.log(mycity)

